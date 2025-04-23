"use client"

import { createClient } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/database.types"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"]

export const profileService = {
  /**
   * Get the current user's profile
   */
  async getCurrentProfile(): Promise<Profile | null> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

    if (error) {
      console.error("Error fetching profile:", error)
      return null
    }

    return data
  },

  /**
   * Get a profile by ID
   */
  async getProfileById(id: string): Promise<Profile | null> {
    const supabase = createClient()

    const { data, error } = await supabase.from("profiles").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching profile:", error)
      return null
    }

    return data
  },

  /**
   * Update the current user's profile
   */
  async updateProfile(profile: ProfileUpdate): Promise<Profile | null> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    const { data, error } = await supabase
      .from("profiles")
      .update({
        ...profile,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)
      .select()
      .single()

    if (error) {
      console.error("Error updating profile:", error)
      return null
    }

    return data
  },

  /**
   * Upload a profile avatar
   */
  async uploadAvatar(file: File): Promise<string | null> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    // Create a unique file name
    const fileExt = file.name.split(".").pop()
    const fileName = `${user.id}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `avatars/${fileName}`

    // Upload the file
    const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, file)

    if (uploadError) {
      console.error("Error uploading avatar:", uploadError)
      return null
    }
    console.error("Error uploading avatar:", uploadError)
    return null

    // Get the public URL
    const { data: publicURL } = supabase.storage.from("avatars").getPublicUrl(filePath)

    // Update the user's avatar_url
    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_url: publicURL.publicUrl })
      .eq("id", user.id)

    if (updateError) {
      console.error("Error updating avatar URL:", updateError)
      return null
    }

    return publicURL.publicUrl
  },
}
