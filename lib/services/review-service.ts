"use client"

import { createClient } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/database.types"

type Review = Database["public"]["Tables"]["reviews"]["Row"]
type ReviewInsert = Database["public"]["Tables"]["reviews"]["Insert"]

export const reviewService = {
  /**
   * Create a review for a swap
   */
  async createReview(review: ReviewInsert): Promise<Review | null> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    // Ensure the current user is the reviewer
    if (review.reviewer_id !== user.id) {
      console.error("Current user must be the reviewer")
      return null
    }

    const { data, error } = await supabase
      .from("reviews")
      .insert({
        ...review,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating review:", error)
      return null
    }

    // Update the reviewee's rating
    if (review.reviewee_id) {
      // Get all reviews for this user
      const { data: reviews, error: reviewsError } = await supabase
        .from("reviews")
        .select("rating")
        .eq("reviewee_id", review.reviewee_id)

      if (!reviewsError && reviews) {
        // Calculate the average rating
        const totalRating = reviews.reduce((sum, r) => sum + (r.rating || 0), 0)
        const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

        // Update the user's profile with the new rating
        await supabase.from("profiles").update({ rating: averageRating }).eq("id", review.reviewee_id)
      }
    }

    return data
  },

  /**
   * Get reviews for a user
   */
  async getUserReviews(userId: string): Promise<Review[]> {
    const supabase = createClient()

    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("reviewee_id", userId)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching reviews:", error)
      return []
    }

    return data || []
  },
}
