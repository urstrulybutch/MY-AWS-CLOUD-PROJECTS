"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface PremiumUpgradeButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function PremiumUpgradeButton({ variant = "outline", size = "sm", className = "" }: PremiumUpgradeButtonProps) {
  const router = useRouter()

  // In a real app, this would check if the user has a premium subscription
  const isPremium = false

  if (isPremium) {
    return null
  }

  return (
    <Button variant={variant} size={size} className={`gap-1.5 ${className}`} onClick={() => router.push("/premium")}>
      <Star className="h-3.5 w-3.5" />
      <span>Upgrade</span>
    </Button>
  )
}
