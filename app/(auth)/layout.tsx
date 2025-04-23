import type React from "react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex bg-muted/50 items-center justify-center p-8">
        <div className="max-w-md">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Skill</span>
            <span>Shift</span>
          </Link>
          <h1 className="text-3xl font-bold mb-6">Swap Skills. Not Money.</h1>
          <p className="text-muted-foreground">
            Join our community of skill-swappers and start learning something new today. Connect with others who want to
            learn what you know, and teach what you want to learn.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="md:hidden flex items-center gap-2 font-bold text-xl mb-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Skill</span>
              <span>Shift</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
