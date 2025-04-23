"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, Video, MapPin, Check } from "lucide-react"
import { PremiumLock } from "@/components/premium-lock"
import { PremiumBadge } from "@/components/premium-badge"

// Mock data for the swap partner
const swapPartner = {
  id: 1,
  name: "Sarah Johnson",
  avatar: "/placeholder.svg?height=80&width=80",
  initials: "SJ",
  skillOffered: "Cooking",
  skillWanted: "Guitar",
  rating: 4.8,
  reviews: 12,
  availability: ["Weekday Evenings", "Weekend Afternoons"],
}

export default function SwapSetupPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [meetingType, setMeetingType] = useState("virtual")
  const [learningGoals, setLearningGoals] = useState("")
  const [duration, setDuration] = useState<string>("60")

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ]

  const handleSubmit = () => {
    // In a real app, this would send the swap details to the server
    console.log("Swap details:", { date, time, meetingType, learningGoals })
    router.push("/my-swaps")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Set Up Your Swap</h2>
        <p className="text-muted-foreground">Schedule a time and set learning goals for your skill exchange</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Swap Partner</CardTitle>
            <CardDescription>You'll be exchanging skills with this person</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={swapPartner.avatar || "/placeholder.svg"} alt={swapPartner.name} />
                <AvatarFallback>{swapPartner.initials}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{swapPartner.name}</h3>
                <div className="flex items-center justify-center mt-1">
                  <svg
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1">
                    {swapPartner.rating} ({swapPartner.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Offers: {swapPartner.skillOffered}
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  Wants: {swapPartner.skillWanted}
                </Badge>
              </div>

              <div className="text-sm text-muted-foreground text-center">
                <p>Available: {swapPartner.availability.join(", ")}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Swap</CardTitle>
            <CardDescription>Pick a date and time that works for both of you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Select Time</Label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={time === slot ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setTime(slot)}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Meeting Type</Label>
              <RadioGroup value={meetingType} onValueChange={setMeetingType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="virtual" id="virtual" />
                  <Label htmlFor="virtual" className="flex items-center">
                    <Video className="mr-2 h-4 w-4" />
                    Virtual (Video Call)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="in-person" id="in-person" />
                  <Label htmlFor="in-person" className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    In Person
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Session Duration</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={duration === "60" ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setDuration("60")}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  60 minutes
                </Button>
                <PremiumLock
                  featureName="Extended Sessions"
                  description="Premium members can schedule longer sessions up to 3 hours."
                >
                  <Button variant={duration === "120" ? "default" : "outline"} className="justify-start relative">
                    <PremiumBadge className="absolute -top-2 -right-2 text-[10px] px-1 py-0" />
                    <Clock className="mr-2 h-4 w-4" />
                    120 minutes
                  </Button>
                </PremiumLock>
                <PremiumLock
                  featureName="Extended Sessions"
                  description="Premium members can schedule longer sessions up to 3 hours."
                >
                  <Button variant={duration === "180" ? "default" : "outline"} className="justify-start relative">
                    <PremiumBadge className="absolute -top-2 -right-2 text-[10px] px-1 py-0" />
                    <Clock className="mr-2 h-4 w-4" />
                    180 minutes
                  </Button>
                </PremiumLock>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="learning-goals">Learning Goals (Optional)</Label>
              <Textarea
                id="learning-goals"
                placeholder="What do you hope to learn or achieve in this session?"
                value={learningGoals}
                onChange={(e) => setLearningGoals(e.target.value)}
                className="resize-none"
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full gap-2" disabled={!date || !time}>
              <Check className="h-4 w-4" />
              Confirm Swap
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
