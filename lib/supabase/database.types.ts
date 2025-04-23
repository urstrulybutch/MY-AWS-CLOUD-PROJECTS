export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          bio: string | null
          avatar_url: string | null
          skills_offered: string[] | null
          skills_wanted: string[] | null
          availability: string[] | null
          learning_goal: string | null
          rating: number | null
          swaps_completed: number | null
          hours_traded: number | null
          member_since: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          username?: string | null
          bio?: string | null
          avatar_url?: string | null
          skills_offered?: string[] | null
          skills_wanted?: string[] | null
          availability?: string[] | null
          learning_goal?: string | null
          rating?: number | null
          swaps_completed?: number | null
          hours_traded?: number | null
          member_since?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          username?: string | null
          bio?: string | null
          avatar_url?: string | null
          skills_offered?: string[] | null
          skills_wanted?: string[] | null
          availability?: string[] | null
          learning_goal?: string | null
          rating?: number | null
          swaps_completed?: number | null
          hours_traded?: number | null
          member_since?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      swaps: {
        Row: {
          id: string
          teacher_id: string | null
          learner_id: string | null
          skill_offered: string
          skill_wanted: string
          date: string | null
          duration: number | null
          is_virtual: boolean | null
          status: string | null
          learning_goals: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          teacher_id?: string | null
          learner_id?: string | null
          skill_offered: string
          skill_wanted: string
          date?: string | null
          duration?: number | null
          is_virtual?: boolean | null
          status?: string | null
          learning_goals?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          teacher_id?: string | null
          learner_id?: string | null
          skill_offered?: string
          skill_wanted?: string
          date?: string | null
          duration?: number | null
          is_virtual?: boolean | null
          status?: string | null
          learning_goals?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          swap_id: string | null
          reviewer_id: string | null
          reviewee_id: string | null
          rating: number | null
          feedback: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          swap_id?: string | null
          reviewer_id?: string | null
          reviewee_id?: string | null
          rating?: number | null
          feedback?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          swap_id?: string | null
          reviewer_id?: string | null
          reviewee_id?: string | null
          rating?: number | null
          feedback?: string | null
          created_at?: string | null
        }
      }
      badges: {
        Row: {
          id: string
          name: string
          description: string | null
          icon: string | null
          color: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          icon?: string | null
          color?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          icon?: string | null
          color?: string | null
          created_at?: string | null
        }
      }
      user_badges: {
        Row: {
          id: string
          user_id: string | null
          badge_id: string | null
          earned_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          badge_id?: string | null
          earned_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          badge_id?: string | null
          earned_at?: string | null
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string | null
          recipient_id: string | null
          swap_id: string | null
          content: string
          read: boolean | null
          created_at: string | null
        }
        Insert: {
          id?: string
          sender_id?: string | null
          recipient_id?: string | null
          swap_id?: string | null
          content: string
          read?: boolean | null
          created_at?: string | null
        }
        Update: {
          id?: string
          sender_id?: string | null
          recipient_id?: string | null
          swap_id?: string | null
          content?: string
          read?: boolean | null
          created_at?: string | null
        }
      }
      group_swaps: {
        Row: {
          id: string
          host_id: string | null
          title: string
          skill: string
          description: string | null
          date: string | null
          duration: number | null
          is_virtual: boolean | null
          max_participants: number | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          host_id?: string | null
          title: string
          skill: string
          description?: string | null
          date?: string | null
          duration?: number | null
          is_virtual?: boolean | null
          max_participants?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          host_id?: string | null
          title?: string
          skill?: string
          description?: string | null
          date?: string | null
          duration?: number | null
          is_virtual?: boolean | null
          max_participants?: number | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      group_participants: {
        Row: {
          id: string
          group_swap_id: string | null
          user_id: string | null
          status: string | null
          joined_at: string | null
        }
        Insert: {
          id?: string
          group_swap_id?: string | null
          user_id?: string | null
          status?: string | null
          joined_at?: string | null
        }
        Update: {
          id?: string
          group_swap_id?: string | null
          user_id?: string | null
          status?: string | null
          joined_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
