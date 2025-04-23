"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  Calendar,
  Award,
  Search,
  TrendingUp,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  MessageSquare,
  Video,
} from "lucide-react"
import { PremiumAnalytics } from "@/components/premium-analytics"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the dashboard
  const stats = {
    hoursTraded: 12,
    skillsLearned: 3,
    upcomingSwaps: 2,
    completedSwaps: 5,
    totalMatches: 8,
    skillProgress: 68,
  }

  const upcomingSwaps = [
    {
      id: 1,
      partner: {
        name: "Sarah Johnson",
        initials: "SJ",
      },
      skillOffered: "Guitar",
      skillWanted: "Cooking",
      date: "Tomorrow",
      time: "3:00 PM",
      isVirtual: true,
    },
    {
      id: 2,
      partner: {
        name: "Michael Chen",
        initials: "MC",
      },
      skillOffered: "Spanish",
      skillWanted: "Photography",
      date: "Friday",
      time: "5:30 PM",
      isVirtual: false,
    },
  ]

  const recentSwaps = [
    {
      id: 1,
      partner: {
        name: "Emma Wilson",
        initials: "EW",
      },
      skillOffered: "Yoga",
      skillWanted: "Digital Marketing",
      date: "Last Monday",
      rating: 5,
      feedback: "Emma was an excellent teacher! Very patient and knowledgeable.",
    },
    {
      id: 2,
      partner: {
        name: "David Kim",
        initials: "DK",
      },
      skillOffered: "Programming",
      skillWanted: "Guitar",
      date: "2 weeks ago",
      rating: 4,
      feedback: "Great session, learned a lot about JavaScript basics.",
    },
  ]

  const badges = [
    {
      name: "First Swap",
      description: "Completed your first skill swap",
      icon: Award,
      date: "Jan 15, 2025",
      color: "bg-blue-500",
    },
    {
      name: "Quick Learner",
      description: "Learned 3 different skills",
      icon: BookOpen,
      date: "Mar 22, 2025",
      color: "bg-purple-500",
    },
    {
      name: "Top Teacher",
      description: "Received 5 five-star ratings",
      icon: Star,
      date: "Apr 10, 2025",
      color: "bg-amber-500",
    },
  ]

  const recommendedMatches = [
    {
      id: 1,
      name: "Jessica Lee",
      initials: "JL",
      skillOffered: "French",
      skillWanted: "Web Design",
      matchScore: 95,
    },
    {
      id: 2,
      name: "Robert Taylor",
      initials: "RT",
      skillOffered: "Photography",
      skillWanted: "Cooking",
      matchScore: 88,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
            <p className="text-muted-foreground">Here's what's happening with your skill swaps</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/find-swaps">
                <Search className="mr-2 h-4 w-4" />
                Find New Swaps
              </Link>
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Calendar
            </Button>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Traded</CardTitle>
            <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">{stats.hoursTraded}</div>
            <div className="flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <p className="text-xs text-green-600 dark:text-green-400">+3 hours this month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Learned</CardTitle>
            <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">{stats.skillsLearned}</div>
            <div className="mt-1">
              <p className="text-xs text-purple-600 dark:text-purple-400">Guitar, Cooking, Spanish</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 border-amber-200 dark:border-amber-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Swaps</CardTitle>
            <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-700 dark:text-amber-300">{stats.upcomingSwaps}</div>
            <div className="mt-1">
              <p className="text-xs text-amber-600 dark:text-amber-400">Next: Tomorrow, 3:00 PM</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skill Progress</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-1">
              <div className="text-3xl font-bold text-green-700 dark:text-green-300">{stats.skillProgress}%</div>
              <Badge
                variant="outline"
                className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-300 dark:border-green-700"
              >
                Guitar
              </Badge>
            </div>
            <Progress
              value={stats.skillProgress}
              className="h-2 bg-green-200 dark:bg-green-800"
              indicatorClassName="bg-green-600 dark:bg-green-400"
            />
          </CardContent>
        </Card>
      </div>

      {/* Main content tabs */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Swaps</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Upcoming swaps preview */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Upcoming Swaps</CardTitle>
                  <CardDescription>Your next scheduled skill exchange sessions</CardDescription>
                </div>
                <Button variant="ghost" size="sm" asChild className="gap-1">
                  <Link href="/my-swaps">
                    View All <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {upcomingSwaps.map((swap) => (
                  <div key={swap.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage fallbackInitials={swap.partner.initials} />
                      <AvatarFallback>{swap.partner.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 flex-1">
                      <div className="font-medium">{swap.partner.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {swap.skillWanted} for {swap.skillOffered}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{swap.date}</div>
                      <div className="text-sm text-muted-foreground">{swap.time}</div>
                    </div>
                    <div className="ml-4">
                      {swap.isVirtual ? (
                        <Badge
                          variant="outline"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-300 dark:border-blue-700"
                        >
                          <Video className="h-3 w-3 mr-1" />
                          Virtual
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-700"
                        >
                          <Users className="h-3 w-3 mr-1" />
                          In Person
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="icon" className="ml-2">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent swaps and badges */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent swaps */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Swaps</CardTitle>
                    <CardDescription>Your recently completed exchanges</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/my-swaps">
                      View All <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recentSwaps.map((swap) => (
                    <div key={swap.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 border-2 border-primary/10">
                          <AvatarImage fallbackInitials={swap.partner.initials} />
                          <AvatarFallback>{swap.partner.initials}</AvatarFallback>
                        </Avatar>
                        <div className="ml-3 flex-1">
                          <div className="font-medium">{swap.partner.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {swap.skillWanted} for {swap.skillOffered}
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">{swap.date}</div>
                      </div>
                      <div className="mt-2 flex items-center">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < swap.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <div className="ml-2 text-sm text-muted-foreground">{swap.rating}.0</div>
                      </div>
                      <div className="mt-2 text-sm italic text-muted-foreground">"{swap.feedback}"</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Your Badges</CardTitle>
                    <CardDescription>Achievements you've earned</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="gap-1">
                    <Link href="/profile">
                      View All <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {badges.map((badge) => (
                    <div key={badge.name} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${badge.color} text-white`}
                      >
                        <badge.icon className="h-6 w-6" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="font-medium">{badge.name}</div>
                        <div className="text-sm text-muted-foreground">{badge.description}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">{badge.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommended matches */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Matches</CardTitle>
              <CardDescription>People who match your skill preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recommendedMatches.map((match) => (
                  <div key={match.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                      <AvatarImage fallbackInitials={match.initials} />
                      <AvatarFallback>{match.initials}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 flex-1">
                      <div className="font-medium">{match.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Offers: {match.skillOffered} • Wants: {match.skillWanted}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-300 dark:border-green-700">
                        {match.matchScore}% Match
                      </Badge>
                      <Button variant="ghost" size="sm" className="ml-2">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 p-4">
              <Button asChild className="w-full">
                <Link href="/find-swaps">
                  <Search className="mr-2 h-4 w-4" />
                  Find More Matches
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Premium analytics */}
          <PremiumAnalytics />
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          {/* Detailed upcoming swaps view */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Skill Swaps</CardTitle>
              <CardDescription>Your scheduled skill exchange sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingSwaps.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">No Upcoming Swaps</h3>
                  <p className="text-muted-foreground mt-1 mb-4">You don't have any upcoming skill swaps scheduled.</p>
                  <Button asChild>
                    <Link href="/find-swaps">Find Swaps</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {upcomingSwaps.map((swap) => (
                    <div key={swap.id} className="flex flex-col md:flex-row gap-6 p-6 rounded-lg border">
                      <div className="flex flex-col items-center md:items-start">
                        <Avatar className="h-20 w-20 border-4 border-primary/10">
                          <AvatarImage fallbackInitials={swap.partner.initials} />
                          <AvatarFallback>{swap.partner.initials}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-3 font-semibold text-lg">{swap.partner.name}</h3>
                        <div className="flex mt-2 gap-2">
                          {swap.isVirtual ? (
                            <Badge
                              variant="outline"
                              className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-300 dark:border-blue-700"
                            >
                              <Video className="h-3 w-3 mr-1" />
                              Virtual
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-700"
                            >
                              <Users className="h-3 w-3 mr-1" />
                              In Person
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">You'll Learn</div>
                            <div className="font-semibold text-lg">{swap.skillWanted}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">You'll Teach</div>
                            <div className="font-semibold text-lg">{swap.skillOffered}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">Date</div>
                            <div className="font-medium flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                              {swap.date}
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">Time</div>
                            <div className="font-medium flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              {swap.time}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          <Button className="gap-2">
                            <Video className="h-4 w-4" />
                            Join Session
                          </Button>
                          <Button variant="outline" className="gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Message
                          </Button>
                          <Button variant="outline" className="gap-2">
                            <Calendar className="h-4 w-4" />
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          {/* Badges and achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Your Achievements</CardTitle>
              <CardDescription>Badges and milestones you've earned through skill swapping</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {badges.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex flex-col items-center p-6 rounded-lg border text-center hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${badge.color} text-white mb-4`}
                    >
                      <badge.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{badge.description}</p>
                    <div className="flex items-center mt-3 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Earned on {badge.date}
                    </div>
                  </div>
                ))}

                {/* Locked badge example */}
                <div className="flex flex-col items-center p-6 rounded-lg border text-center bg-muted/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-300 text-white mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg text-muted-foreground">Master Teacher</h3>
                  <p className="text-sm text-muted-foreground mt-1">Complete 10 teaching sessions</p>
                  <div className="flex items-center mt-3 text-xs text-muted-foreground">
                    <span className="font-medium">Progress: 5/10</span>
                  </div>
                  <Progress value={50} className="h-2 w-full mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skill progress */}
          <Card>
            <CardHeader>
              <CardTitle>Skill Progress</CardTitle>
              <CardDescription>Track your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Guitar</div>
                    <div className="text-sm text-muted-foreground">68%</div>
                  </div>
                  <Progress value={68} className="h-2" />
                  <div className="text-xs text-muted-foreground">5 sessions completed • Intermediate level</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Cooking</div>
                    <div className="text-sm text-muted-foreground">42%</div>
                  </div>
                  <Progress value={42} className="h-2" />
                  <div className="text-xs text-muted-foreground">3 sessions completed • Beginner level</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="font-medium">Spanish</div>
                    <div className="text-sm text-muted-foreground">25%</div>
                  </div>
                  <Progress value={25} className="h-2" />
                  <div className="text-xs text-muted-foreground">2 sessions completed • Beginner level</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
