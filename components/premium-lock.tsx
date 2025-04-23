"use client"

import type React from "react"

import { useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

interface PremiumLockProps {
  children: React.ReactNode
  featureName: string
  description?: string
}

export function PremiumLock({ children, featureName, description }: PremiumLockProps) {
  const [showDialog, setShowDialog] = useState(false)
  const router = useRouter()

  // In a real app, this would check if the user has a premium subscription
  const isPremium = false

  if (isPremium) {
    return <>{children}</>
  }

  return (
    <>
      <div className="relative cursor-pointer group" onClick={() => setShowDialog(true)}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-md">
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="rounded-full bg-primary/10 p-2">
              <Lock className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm font-medium">Premium Feature</p>
            <Button variant="outline" size="sm" className="mt-2">
              Unlock
            </Button>
          </div>
        </div>
        <div className="opacity-50 pointer-events-none">{children}</div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unlock {featureName}</DialogTitle>
            <DialogDescription>
              {description ||
                `This is a premium feature. Upgrade to Premium to unlock ${featureName} and many other advanced features.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Maybe Later
            </Button>
            <Button onClick={() => router.push("/premium")}>View Premium Plans</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
