"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Star, ThumbsUp, Search, Calendar } from "lucide-react"

// Mock data for the completed swap
const completedSwap = {
  id: 1,
  partner: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SJ",
  },
  skillOffered: "Cooking",
  skillWanted: "Guitar",
  date: "May 20, 2025",
  time: "3:00 PM - 4:00 PM",
}

export default function FeedbackPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [wasSafe, setWasSafe] = useState(false)
  const [wasUseful, setWasUseful] = useState(false)

  const handleSubmit = () => {
    // In a real app, this would send the feedback to the server
    console.log("Feedback:", { rating, feedback, wasSafe, wasUseful })
    router.push("/dashboard")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Session Feedback</h2>
        <p className="text-muted-foreground">Share your experience with your swap partner</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={completedSwap.partner.avatar || "/placeholder.svg"} alt={completedSwap.partner.name} />
              <AvatarFallback>{completedSwap.partner.initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>How was your session with {completedSwap.partner.name}?</CardTitle>
              <CardDescription>
                {completedSwap.skillWanted} for {completedSwap.skillOffered} • {completedSwap.date}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Rate your experience (1-5 stars)</Label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" className="focus:outline-none" onClick={() => setRating(star)}>
                  <Star className={`h-8 w-8 ${rating >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="feedback">Share your feedback (optional)</Label>
            <Textarea
              id="feedback"
              placeholder="What went well? What could be improved?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="resize-none"
              rows={4}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="safe" checked={wasSafe} onCheckedChange={(checked) => setWasSafe(checked as boolean)} />
              <Label htmlFor="safe" className="flex items-center">
                <ThumbsUp className="mr-2 h-4 w-4 text-green-500" />
                The session felt safe and respectful
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="useful"
                checked={wasUseful}
                onCheckedChange={(checked) => setWasUseful(checked as boolean)}
              />
              <Label htmlFor="useful" className="flex items-center">
                <ThumbsUp className="mr-2 h-4 w-4 text-green-500" />I learned something useful during this session
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/dashboard")}>
            Skip
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" className="gap-2" onClick={() => router.push(`/find-swaps`)}>
              <Search className="h-4 w-4" />
              Find New Match
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => router.push(`/swap-setup/${completedSwap.id}`)}>
              <Calendar className="h-4 w-4" />
              Swap Again
            </Button>
            <Button onClick={handleSubmit}>Submit Feedback</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
