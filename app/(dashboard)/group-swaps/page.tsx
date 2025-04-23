"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MultiSelect } from "@/components/multi-select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, Users, Plus, CalendarPlus2Icon as CalendarIcon2 } from "lucide-react"

// Mock data for group swaps
const upcomingGroupSwaps = [
  {
    id: 1,
    title: "Web Development Basics",
    host: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    skill: "Programming",
    participants: 4,
    maxParticipants: 6,
    date: "Tomorrow",
    time: "3:00 PM - 4:30 PM",
    isVirtual: true,
  },
  {
    id: 2,
    title: "Cooking Italian Cuisine",
    host: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    skill: "Cooking",
    participants: 3,
    maxParticipants: 5,
    date: "Friday, May 24",
    time: "5:30 PM - 7:00 PM",
    isVirtual: false,
  },
]

const availableGroupSwaps = [
  {
    id: 3,
    title: "Digital Photography Basics",
    host: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
    },
    skill: "Photography",
    participants: 2,
    maxParticipants: 8,
    date: "Saturday, May 25",
    time: "10:00 AM - 12:00 PM",
    isVirtual: true,
    description: "Learn the basics of digital photography, including composition, lighting, and camera settings.",
  },
  {
    id: 4,
    title: "Yoga for Beginners",
    host: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
    },
    skill: "Yoga",
    participants: 5,
    maxParticipants: 10,
    date: "Sunday, May 26",
    time: "9:00 AM - 10:00 AM",
    isVirtual: true,
    description: "A gentle introduction to yoga poses and breathing techniques for beginners.",
  },
  {
    id: 5,
    title: "Spanish Conversation Practice",
    host: {
      name: "Olivia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "OM",
    },
    skill: "Spanish",
    participants: 3,
    maxParticipants: 6,
    date: "Monday, May 27",
    time: "6:00 PM - 7:00 PM",
    isVirtual: true,
    description: "Practice conversational Spanish in a friendly group setting. Basic knowledge required.",
  },
]

const skillOptions = [
  { label: "Cooking", value: "cooking" },
  { label: "Programming", value: "programming" },
  { label: "Guitar", value: "guitar" },
  { label: "Piano", value: "piano" },
  { label: "Photography", value: "photography" },
  { label: "Painting", value: "painting" },
  { label: "Language - Spanish", value: "spanish" },
  { label: "Language - French", value: "french" },
  { label: "Language - German", value: "german" },
  { label: "Language - Japanese", value: "japanese" },
  { label: "Language - Mandarin", value: "mandarin" },
  { label: "Yoga", value: "yoga" },
  { label: "Fitness", value: "fitness" },
  { label: "Gardening", value: "gardening" },
  { label: "Woodworking", value: "woodworking" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "UI/UX Design", value: "ui-ux-design" },
  { label: "Data Science", value: "data-science" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Blockchain", value: "blockchain" },
  { label: "Creative Writing", value: "creative-writing" },
  { label: "Public Speaking", value: "public-speaking" },
  { label: "Meditation", value: "meditation" },
  { label: "Dance", value: "dance" },
  { label: "Drawing", value: "drawing" },
  { label: "Pottery", value: "pottery" },
  { label: "Knitting", value: "knitting" },
  { label: "Baking", value: "baking" },
  { label: "Chess", value: "chess" },
]

export default function GroupSwapsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedSkill, setSelectedSkill] = useState<string[]>([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [maxParticipants, setMaxParticipants] = useState("5")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("60")
  const [isVirtual, setIsVirtual] = useState(true)

  const handleCreateGroupSwap = () => {
    // In a real app, this would send the group swap details to the server
    console.log("Group swap details:", {
      title,
      skill: selectedSkill[0],
      date,
      time,
      duration,
      maxParticipants,
      isVirtual,
      description,
    })

    // Reset form
    setTitle("")
    setSelectedSkill([])
    setDate(undefined)
    setTime("")
    setDuration("60")
    setMaxParticipants("5")
    setIsVirtual(true)
    setDescription("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Group Swaps</h2>
          <p className="text-muted-foreground">Learn and teach in groups to maximize your skill exchange experience</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Group Swap
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create a Group Swap</DialogTitle>
              <DialogDescription>
                Host a group session to share your skills with multiple people at once.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Beginner Guitar Lessons"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <Label>Skill to Share</Label>
                <MultiSelect
                  options={skillOptions}
                  selected={selectedSkill}
                  onChange={setSelectedSkill}
                  placeholder="Select a skill..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Date</Label>
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

                <div className="grid gap-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" placeholder="e.g., 3:00 PM" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="maxParticipants">Max Participants</Label>
                  <Input
                    id="maxParticipants"
                    type="number"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="isVirtual"
                  checked={isVirtual}
                  onChange={(e) => setIsVirtual(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="isVirtual">Virtual session</Label>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what participants will learn in this session..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreateGroupSwap}>Create Group Swap</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">My Group Swaps</TabsTrigger>
          <TabsTrigger value="available">Available Groups</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 mt-4">
          {upcomingGroupSwaps.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>No Group Swaps</CardTitle>
                <CardDescription>You haven't joined any group swaps yet.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href="/group-swaps?tab=available">Find Group Swaps</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            upcomingGroupSwaps.map((swap) => (
              <Card key={swap.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{swap.title}</CardTitle>
                      <CardDescription>Hosted by {swap.host.name}</CardDescription>
                    </div>
                    <Badge variant={swap.isVirtual ? "outline" : "secondary"}>
                      {swap.isVirtual ? "Virtual" : "In Person"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Badge variant="outline" className="mr-2">
                        {swap.skill}
                      </Badge>
                      <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      <span>
                        {swap.participants}/{swap.maxParticipants} participants
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CalendarIcon2 className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{swap.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{swap.time}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Join Session</Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="available" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availableGroupSwaps.map((swap) => (
              <Card key={swap.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="line-clamp-1">{swap.title}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Avatar className="h-6 w-6 mr-2">
                          <AvatarImage src={swap.host.avatar || "/placeholder.svg"} alt={swap.host.name} />
                          <AvatarFallback>{swap.host.initials}</AvatarFallback>
                        </Avatar>
                        <CardDescription>{swap.host.name}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={swap.isVirtual ? "outline" : "secondary"} className="h-fit">
                      {swap.isVirtual ? "Virtual" : "In Person"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-2">
                    <Badge variant="outline">{swap.skill}</Badge>
                    <p className="text-sm text-muted-foreground line-clamp-2">{swap.description}</p>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-muted-foreground mr-1" />
                      <span>
                        {swap.participants}/{swap.maxParticipants} participants
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CalendarIcon2 className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{swap.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{swap.time}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
