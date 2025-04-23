"use client"

import { createClient } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/database.types"

type Swap = Database["public"]["Tables"]["swaps"]["Row"]
type SwapInsert = Database["public"]["Tables"]["swaps"]["Insert"]
type SwapUpdate = Database["public"]["Tables"]["swaps"]["Update"]

export const swapService = {
  /**
   * Get all swaps for the current user
   */
  async getUserSwaps(): Promise<Swap[]> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []

    const { data, error } = await supabase
      .from("swaps")
      .select("*")
      .or(`teacher_id.eq.${user.id},learner_id.eq.${user.id}`)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching swaps:", error)
      return []
    }

    return data || []
  },

  /**
   * Get upcoming swaps for the current user
   */
  async getUpcomingSwaps(): Promise<Swap[]> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []

    const now = new Date().toISOString()

    const { data, error } = await supabase
      .from("swaps")
      .select("*")
      .or(`teacher_id.eq.${user.id},learner_id.eq.${user.id}`)
      .gt("date", now)
      .order("date", { ascending: true })

    if (error) {
      console.error("Error fetching upcoming swaps:", error)
      return []
    }

    return data || []
  },

  /**
   * Get past swaps for the current user
   */
  async getPastSwaps(): Promise<Swap[]> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []

    const now = new Date().toISOString()

    const { data, error } = await supabase
      .from("swaps")
      .select("*")
      .or(`teacher_id.eq.${user.id},learner_id.eq.${user.id}`)
      .lt("date", now)
      .order("date", { ascending: false })

    if (error) {
      console.error("Error fetching past swaps:", error)
      return []
    }

    return data || []
  },

  /**
   * Create a new swap
   */
  async createSwap(swap: SwapInsert): Promise<Swap | null> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    // Ensure the current user is either the teacher or learner
    if (swap.teacher_id !== user.id && swap.learner_id !== user.id) {
      console.error("Current user must be either the teacher or learner")
      return null
    }

    const { data, error } = await supabase
      .from("swaps")
      .insert({
        ...swap,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating swap:", error)
      return null
    }

    return data
  },

  /**
   * Update a swap
   */
  async updateSwap(id: string, swap: SwapUpdate): Promise<Swap | null> {
    const supabase = createClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return null

    // Check if the user has permission to update this swap
    const { data: existingSwap, error: fetchError } = await supabase.from("swaps").select("*").eq("id", id).single()

    if (fetchError || !existingSwap) {
      console.error("Error fetching swap:", fetchError)
      return null
    }

    if (existingSwap.teacher_id !== user.id && existingSwap.learner_id !== user.id) {
      console.error("You do not have permission to update this swap")
      return null
    }

    const { data, error } = await supabase
      .from("swaps")
      .update({
        ...swap,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("Error updating swap:", error)
      return null
    }

    return data
  },

  /**
   * Get a swap by ID
   */
  async getSwapById(id: string): Promise<Swap | null> {
    const supabase = createClient()

    const { data, error } = await supabase.from("swaps").select("*").eq("id", id).single()

    if (error) {
      console.error("Error fetching swap:", error)
      return null
    }

    return data
  },
}
