"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"
import { AvatarPlaceholder } from "./avatar-placeholder"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & { fallbackInitials?: string }
>(({ className, src, fallbackInitials, ...props }, ref) => {
  const [hasError, setHasError] = React.useState(false)

  // If src is a placeholder path, use our placeholder component
  const isPlaceholder = typeof src === "string" && src.includes("placeholder")

  if (isPlaceholder || hasError) {
    return (
      <AvatarPrimitive.Fallback className={cn("h-full w-full", className)}>
        {fallbackInitials ? (
          <AvatarPlaceholder initials={fallbackInitials} size={40} />
        ) : (
          <div className="bg-muted h-full w-full flex items-center justify-center">
            <span className="text-xs font-medium">?</span>
          </div>
        )}
      </AvatarPrimitive.Fallback>
    )
  }

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      src={src}
      onError={() => setHasError(true)}
      {...props}
    />
  )
})
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, children, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  >
    {children}
  </AvatarPrimitive.Fallback>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
