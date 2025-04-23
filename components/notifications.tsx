"use client"

import * as React from "react"
import { Bell, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

type NotificationType = "match" | "swap" | "message" | "system"

interface Notification {
  id: string
  type: NotificationType
  title: string
  description: string
  time: string
  read: boolean
}

// Mock notifications
const initialNotifications: Notification[] = [
  {
    id: "1",
    type: "match",
    title: "New Match Request",
    description: "Sarah Johnson wants to swap Cooking for Guitar",
    time: "Just now",
    read: false,
  },
  {
    id: "2",
    type: "swap",
    title: "Upcoming Swap Reminder",
    description: "Your swap with Michael Chen is in 1 hour",
    time: "30 minutes ago",
    read: false,
  },
  {
    id: "3",
    type: "message",
    title: "New Message",
    description: "Emma Wilson: 'Looking forward to our session tomorrow!'",
    time: "2 hours ago",
    read: true,
  },
  {
    id: "4",
    type: "system",
    title: "Profile Verified",
    description: "Your profile has been verified. You can now access all features.",
    time: "1 day ago",
    read: true,
  },
]

export function NotificationCenter() {
  const [notifications, setNotifications] = React.useState<Notification[]>(initialNotifications)
  const [open, setOpen] = React.useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const getTypeIcon = (type: NotificationType) => {
    switch (type) {
      case "match":
        return <div className="h-2 w-2 rounded-full bg-blue-500" />
      case "swap":
        return <div className="h-2 w-2 rounded-full bg-green-500" />
      case "message":
        return <div className="h-2 w-2 rounded-full bg-yellow-500" />
      case "system":
        return <div className="h-2 w-2 rounded-full bg-purple-500" />
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4 border-b">
          <h4 className="font-semibold">Notifications</h4>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        {notifications.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">No notifications</div>
        ) : (
          <ScrollArea className="h-[300px]">
            <div className="divide-y">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors",
                    !notification.read && "bg-muted/30",
                  )}
                >
                  <div className="mt-1">{getTypeIcon(notification.type)}</div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-3 w-3" />
                            <span className="sr-only">Mark as read</span>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeNotification(notification.id)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </PopoverContent>
    </Popover>
  )
}
