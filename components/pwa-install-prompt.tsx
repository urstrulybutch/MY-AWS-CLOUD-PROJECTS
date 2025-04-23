"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isIOSDevice)

    // For non-iOS devices, use the beforeinstallprompt event
    if (!isIOSDevice) {
      const handleBeforeInstallPrompt = (e: Event) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault()
        // Stash the event so it can be triggered later
        setDeferredPrompt(e)
        // Show the install prompt
        setShowPrompt(true)
      }

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      }
    } else {
      // For iOS, check if the app is not already installed
      // This is a simplified check - in a real app, you might want to use more sophisticated detection
      const isInStandaloneMode =
        window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true
      if (!isInStandaloneMode) {
        // Show iOS-specific instructions
        setShowPrompt(true)
      }
    }
  }, [])

  const handleInstall = async () => {
    if (!isIOS && deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice
      console.log(`User response to the install prompt: ${outcome}`)
      // We've used the prompt, and can't use it again, so clear it
      setDeferredPrompt(null)
    }
    // Close the dialog
    setShowPrompt(false)
  }

  if (!showPrompt) return null

  return (
    <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install SkillShift App</DialogTitle>
          <DialogDescription>
            {isIOS ? (
              <>
                To install SkillShift on your iOS device:
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Tap the Share button in Safari</li>
                  <li>Scroll down and tap "Add to Home Screen"</li>
                  <li>Tap "Add" in the top-right corner</li>
                </ol>
              </>
            ) : (
              "Install SkillShift on your device for a better experience and offline access."
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowPrompt(false)}>
            Maybe Later
          </Button>
          {!isIOS && (
            <Button onClick={handleInstall} className="gap-2">
              <Download className="h-4 w-4" />
              Install Now
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
