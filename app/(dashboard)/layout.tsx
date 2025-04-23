"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Home, Search, Calendar, MessageSquare, User, Settings, Users, FileText } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { NotificationCenter } from "@/components/notifications"
import { SignOut } from "@/components/sign-out"
import { PWARegister } from "@/components/pwa-register"
import { PremiumUpgradeButton } from "@/components/premium-upgrade-button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Find Swaps",
      href: "/find-swaps",
      icon: Search,
    },
    {
      title: "My Swaps",
      href: "/my-swaps",
      icon: Calendar,
    },
    {
      title: "Group Swaps",
      href: "/group-swaps",
      icon: Users,
    },
    {
      title: "Messages",
      href: "/messages",
      icon: MessageSquare,
    },
    {
      title: "Resources",
      href: "/resources",
      icon: FileText,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <SidebarProvider>
      <PWARegister />
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl px-4 py-2">
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Skill</span>
              <span>Shift</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="flex items-center justify-between">
              <SignOut />
              <ModeToggle />
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <SidebarTrigger />
            <div className="w-full flex-1">
              <h1 className="font-semibold text-lg">
                {navItems.find((item) => item.href === pathname)?.title || "SkillShift"}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <PremiumUpgradeButton />
              <NotificationCenter />
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
