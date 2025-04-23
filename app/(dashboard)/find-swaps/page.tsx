"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiSelect } from "@/components/multi-select"
import { Check, X, Calendar, Star, Filter } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { PremiumLock } from "@/components/premium-lock"
import { PremiumBadge } from "@/components/premium-badge"

// Mock data for potential matches
const potentialMatches = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "SJ",
    skillOffered: "Cooking",
    skillWanted: "Guitar",
    rating: 4.8,
    reviews: 12,
    availability: ["Weekday Evenings", "Weekend Afternoons"],
    bio: "Passionate home cook specializing in Italian cuisine. Looking to learn guitar basics.",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "MC",
    skillOffered: "Photography",
    skillWanted: "Spanish",
    rating: 4.5,
    reviews: 8,
    availability: ["Weekend Mornings", "Weekend Afternoons"],
    bio: "Professional photographer with 5 years of experience. Want to learn Spanish for an upcoming trip.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "EW",
    skillOffered: "Digital Marketing",
    skillWanted: "Yoga",
    rating: 4.9,
    reviews: 15,
    availability: ["Weekday Mornings", "Weekday Evenings"],
    bio: "Digital marketing specialist focusing on social media. Interested in learning yoga for stress relief.",
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "/placeholder.svg?height=80&width=80",
    initials: "DK",
    skillOffered: "Guitar",
    skillWanted: "Programming",
    rating: 4.7,
    reviews: 10,
    availability: ["Weekend Evenings", "Weekday Evenings"],
    bio: "Guitar player for 10+ years. Want to learn basic programming to build a music app.",
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
  { label: "Yoga", value: "yoga" },
  { label: "Fitness", value: "fitness" },
  { label: "Gardening", value: "gardening" },
  { label: "Woodworking", value: "woodworking" },
  { label: "Digital Marketing", value: "digital-marketing" },
  { label: "Graphic Design", value: "graphic-design" },
]

const availabilityOptions = [
  { label: "Weekday Mornings", value: "weekday-mornings" },
  { label: "Weekday Afternoons", value: "weekday-afternoons" },
  { label: "Weekday Evenings", value: "weekday-evenings" },
  { label: "Weekend Mornings", value: "weekend-mornings" },
  { label: "Weekend Afternoons", value: "weekend-afternoons" },
  { label: "Weekend Evenings", value: "weekend-evenings" },
]

export default function FindSwapsPage() {
  const [matches, setMatches] = useState(potentialMatches)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])
  const [virtualOnly, setVirtualOnly] = useState(false)

  // Filter function (in a real app, this would be server-side)
  const filterMatches = () => {
    // This is a simplified filter for demonstration
    // In a real app, this would be a server-side API call
    console.log("Filtering with:", { selectedSkills, selectedAvailability, virtualOnly })
  }

  // Accept/Decline handlers
  const handleAccept = (id: number) => {
    // In a real app, this would send a request to the server
    console.log("Accepted match:", id)
    setMatches(matches.filter((match) => match.id !== id))
  }

  const handleDecline = (id: number) => {
    // In a real app, this would send a request to the server
    console.log("Declined match:", id)
    setMatches(matches.filter((match) => match.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Find Skill Swaps</h2>
          <p className="text-muted-foreground">
            Discover people who want to learn what you know, and teach what you want to learn
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Matches</SheetTitle>
              <SheetDescription>Narrow down your search to find the perfect skill swap partner</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="skills">Skills Wanted</Label>
                <MultiSelect
                  options={skillOptions}
                  selected={selectedSkills}
                  onChange={setSelectedSkills}
                  placeholder="Select skills..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <MultiSelect
                  options={availabilityOptions}
                  selected={selectedAvailability}
                  onChange={setSelectedAvailability}
                  placeholder="Select availability..."
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="virtual"
                  checked={virtualOnly}
                  onChange={(e) => setVirtualOnly(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="virtual">Virtual sessions only</Label>
              </div>

              <PremiumLock
                featureName="Priority Matching"
                description="Get matched first with the most compatible skill swap partners."
              >
                <div className="flex items-center space-x-2 pt-2 relative">
                  <input type="checkbox" id="priority" className="h-4 w-4 rounded border-gray-300" disabled />
                  <Label htmlFor="priority" className="flex items-center gap-2">
                    Priority Matching
                    <PremiumBadge className="text-[10px] px-1 py-0" />
                  </Label>
                </div>
              </PremiumLock>

              <Button className="w-full mt-4" onClick={filterMatches}>
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Tabs defaultValue="suggestions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          <TabsTrigger value="browse">Browse All</TabsTrigger>
        </TabsList>

        <TabsContent value="suggestions" className="space-y-4 mt-4">
          {matches.map((match) => (
            <Card key={match.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 p-6 flex flex-col items-center justify-center bg-muted/30">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={match.avatar || "/placeholder.svg"} alt={match.name} />
                    <AvatarFallback>{match.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-semibold">{match.name}</h3>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span>
                      {match.rating} ({match.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Offers: {match.skillOffered}
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Wants: {match.skillWanted}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{match.bio}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Available: {match.availability.join(", ")}</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button onClick={() => handleAccept(match.id)} className="flex-1 gap-2">
                      <Check className="h-4 w-4" />
                      Accept
                    </Button>
                    <Button variant="outline" onClick={() => handleDecline(match.id)} className="flex-1 gap-2">
                      <X className="h-4 w-4" />
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="browse" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <Card key={match.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={match.avatar || "/placeholder.svg"} alt={match.name} />
                      <AvatarFallback>{match.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{match.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        <span className="text-xs">
                          {match.rating} ({match.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Offers: {match.skillOffered}
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Wants: {match.skillWanted}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{match.bio}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button onClick={() => handleAccept(match.id)} size="sm" className="flex-1">
                    Accept
                  </Button>
                  <Button variant="outline" onClick={() => handleDecline(match.id)} size="sm" className="flex-1">
                    Decline
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
