"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send, Pause, Play, Flag, X, Clock } from "lucide-react"
import { PremiumLock } from "@/components/premium-lock"
import { PremiumBadge } from "@/components/premium-badge"

// Mock data for the swap session
const swapSession = {
  id: 1,
  partner: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SJ",
  },
  skillOffered: "Cooking",
  skillWanted: "Guitar",
  duration: 60, // minutes
  learningGoals: "Learn basic Italian pasta recipes and sauce preparation techniques.",
}

export default function LiveSwapPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isPaused, setIsPaused] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ sender: string; text: string; time: string }[]>([
    {
      sender: "system",
      text: "Swap session started. Remember to be respectful and patient with each other.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ])
  const [timeLeft, setTimeLeft] = useState(swapSession.duration * 60) // in seconds
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Timer logic
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isPaused])

  // Format time left
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Send message
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "you",
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate partner response after a delay
      setTimeout(() => {
        const partnerResponse = {
          sender: swapSession.partner.name,
          text: "Thanks for sharing! Let me show you the next step in the process.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, partnerResponse])
      }, 3000)
    }
  }

  // End session
  const endSession = () => {
    // In a real app, this would end the session and redirect to feedback
    router.push(`/feedback/${params.id}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Live Swap Session</h2>
          <div className="flex items-center">
            <p className="text-muted-foreground">
              With {swapSession.partner.name} • {swapSession.skillWanted} for {swapSession.skillOffered}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              timeLeft < 300
                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                : "bg-primary/10 text-primary"
            }`}
          >
            <Clock className="h-4 w-4" />
            <span className="font-mono">{formatTimeLeft()}</span>
          </div>

          <Button variant="outline" size="icon" onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>

          <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600">
            <Flag className="h-4 w-4" />
          </Button>

          <Button variant="destructive" size="icon" onClick={endSession}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle>Video Call</CardTitle>
              <CardDescription>Your video session with {swapSession.partner.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 bg-black rounded-md flex items-center justify-center">
              <div className="text-white text-center">
                <p>Video call would be embedded here</p>
                <p className="text-sm text-gray-400 mt-2">Using Twilio Video or Daily.co integration</p>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-3">
              <div className="flex justify-center w-full gap-2">
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M23 7 16 12 23 17 23 7z"></path>
                    <rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect>
                  </svg>
                </Button>
                <PremiumLock
                  featureName="Session Recording"
                  description="Record your skill swap sessions for later review and reference. This feature is available to Premium members only."
                >
                  <Button variant="outline" size="icon" className="relative">
                    <PremiumBadge className="absolute -top-2 -right-2 text-[10px] px-1 py-0" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                  </Button>
                </PremiumLock>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                    <path d="M15 3v6h6"></path>
                  </svg>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle>Chat</CardTitle>
              <CardDescription>Share links and notes during your session</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
                    {msg.sender !== "you" && msg.sender !== "system" && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage
                          src={swapSession.partner.avatar || "/placeholder.svg"}
                          alt={swapSession.partner.name}
                        />
                        <AvatarFallback>{swapSession.partner.initials}</AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        msg.sender === "system"
                          ? "bg-muted text-muted-foreground text-center w-full"
                          : msg.sender === "you"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                      }`}
                    >
                      {msg.sender !== "you" && msg.sender !== "system" && (
                        <p className="font-semibold text-xs">{msg.sender}</p>
                      )}
                      <p>{msg.text}</p>
                      <p className="text-xs opacity-70 text-right mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter className="border-t pt-3">
              <div className="flex w-full gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button size="icon" onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning Goals</CardTitle>
          <CardDescription>What you want to achieve in this session</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{swapSession.learningGoals}</p>
        </CardContent>
      </Card>
    </div>
  )
}
