"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, MessageSquare } from "lucide-react"

// Mock data for swaps
const upcomingSwaps = [
  {
    id: 1,
    partner: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    skillOffered: "Guitar",
    skillWanted: "Cooking",
    date: "Tomorrow",
    time: "3:00 PM - 4:00 PM",
    isVirtual: true,
  },
  {
    id: 2,
    partner: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    skillOffered: "Spanish",
    skillWanted: "Photography",
    date: "Friday, May 24",
    time: "5:30 PM - 6:30 PM",
    isVirtual: true,
  },
]

const pastSwaps = [
  {
    id: 3,
    partner: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
    },
    skillOffered: "Yoga",
    skillWanted: "Digital Marketing",
    date: "May 15, 2025",
    time: "10:00 AM - 11:00 AM",
    isVirtual: true,
    rating: 5,
    feedback: "Emma was an excellent teacher! Very patient and knowledgeable.",
  },
  {
    id: 4,
    partner: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
    },
    skillOffered: "Programming",
    skillWanted: "Guitar",
    date: "May 8, 2025",
    time: "7:00 PM - 8:00 PM",
    isVirtual: false,
    rating: 4,
    feedback: "Great session, learned a lot about JavaScript basics.",
  },
  {
    id: 5,
    partner: {
      name: "Olivia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "OM",
    },
    skillOffered: "Painting",
    skillWanted: "Fitness",
    date: "April 30, 2025",
    time: "4:00 PM - 5:00 PM",
    isVirtual: true,
    rating: 5,
    feedback: "Olivia is a fantastic teacher! I learned so much about watercolor techniques.",
  },
]

export default function MySwapsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">My Swaps</h2>
        <p className="text-muted-foreground">Manage your upcoming and past skill exchange sessions</p>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4 mt-4">
          {upcomingSwaps.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>No Upcoming Swaps</CardTitle>
                <CardDescription>You don't have any upcoming skill swaps scheduled.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href="/find-swaps">Find Swaps</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            upcomingSwaps.map((swap) => (
              <Card key={swap.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={swap.partner.avatar || "/placeholder.svg"} alt={swap.partner.name} />
                        <AvatarFallback>{swap.partner.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{swap.partner.name}</CardTitle>
                        <CardDescription>
                          {swap.skillWanted} for {swap.skillOffered}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={swap.isVirtual ? "outline" : "secondary"}>
                      {swap.isVirtual ? "Virtual" : "In Person"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{swap.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{swap.time}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </Button>
                  {swap.isVirtual && (
                    <Button size="sm" className="gap-2">
                      <Video className="h-4 w-4" />
                      Join Session
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4 mt-4">
          {pastSwaps.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>No Past Swaps</CardTitle>
                <CardDescription>You haven't completed any skill swaps yet.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href="/find-swaps">Find Swaps</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            pastSwaps.map((swap) => (
              <Card key={swap.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={swap.partner.avatar || "/placeholder.svg"} alt={swap.partner.name} />
                        <AvatarFallback>{swap.partner.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{swap.partner.name}</CardTitle>
                        <CardDescription>
                          {swap.skillWanted} for {swap.skillOffered}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={swap.isVirtual ? "outline" : "secondary"}>
                      {swap.isVirtual ? "Virtual" : "In Person"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{swap.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>{swap.time}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5  => (
                          <svg
                            key={i}
                            className={\`h-5 w-5 ${i < swap.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-sm text-muted-foreground">"{swap.feedback}"</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Message
                  </Button>
                  <Button size="sm">Swap Again</Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
