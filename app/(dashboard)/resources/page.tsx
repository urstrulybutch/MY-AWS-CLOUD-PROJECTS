"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { PremiumLock } from "@/components/premium-lock"
import { PremiumBadge } from "@/components/premium-badge"
import { FileText, Download, Search, Filter, BookOpen, Video, FileIcon, Music } from "lucide-react"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const freeResources = [
    {
      id: 1,
      title: "Beginner's Guide to Guitar",
      description: "Learn the basics of guitar playing with this comprehensive guide.",
      category: "music",
      type: "pdf",
      icon: FileText,
    },
    {
      id: 2,
      title: "Introduction to JavaScript",
      description: "A beginner-friendly introduction to JavaScript programming.",
      category: "programming",
      type: "pdf",
      icon: FileText,
    },
    {
      id: 3,
      title: "Basic Cooking Techniques",
      description: "Master the fundamental techniques every home cook should know.",
      category: "cooking",
      type: "video",
      icon: Video,
    },
  ]

  const premiumResources = [
    {
      id: 4,
      title: "Advanced Guitar Techniques",
      description: "Take your guitar playing to the next level with advanced techniques.",
      category: "music",
      type: "video",
      icon: Video,
    },
    {
      id: 5,
      title: "Full Stack Web Development",
      description: "Comprehensive guide to building full-stack web applications.",
      category: "programming",
      type: "course",
      icon: BookOpen,
    },
    {
      id: 6,
      title: "Professional Photography Guide",
      description: "Learn professional photography techniques from experts.",
      category: "photography",
      type: "pdf",
      icon: FileText,
    },
    {
      id: 7,
      title: "Italian Cuisine Masterclass",
      description: "Master the art of Italian cooking with this comprehensive guide.",
      category: "cooking",
      type: "course",
      icon: BookOpen,
    },
    {
      id: 8,
      title: "Spanish Conversation Practice",
      description: "Audio lessons to improve your Spanish conversation skills.",
      category: "language",
      type: "audio",
      icon: Music,
    },
    {
      id: 9,
      title: "Yoga for Beginners",
      description: "A complete guide to yoga poses and practices for beginners.",
      category: "fitness",
      type: "video",
      icon: Video,
    },
  ]

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "course":
        return <BookOpen className="h-4 w-4" />
      case "audio":
        return <Music className="h-4 w-4" />
      default:
        return <FileIcon className="h-4 w-4" />
    }
  }

  const filteredFreeResources = freeResources.filter(
    (resource) =>
      (activeTab === "all" || resource.category === activeTab) &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const filteredPremiumResources = premiumResources.filter(
    (resource) =>
      (activeTab === "all" || resource.category === activeTab) &&
      (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Resource Library</h2>
        <p className="text-muted-foreground">Access learning resources to help you master new skills</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-64 md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 sm:grid-cols-7">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="programming">Programming</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="cooking">Cooking</TabsTrigger>
          <TabsTrigger value="language">Languages</TabsTrigger>
          <TabsTrigger value="photography">Photography</TabsTrigger>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Free Resources</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredFreeResources.map((resource) => (
            <Card key={resource.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <div className="rounded-full bg-muted p-1">{getResourceTypeIcon(resource.type)}</div>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Premium Resources</h3>
            <PremiumBadge />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPremiumResources.map((resource) => (
              <PremiumLock
                key={resource.id}
                featureName="Premium Resources"
                description="Unlock our premium resource library with comprehensive guides, courses, and materials to accelerate your learning."
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <div className="rounded-full bg-muted p-1">{getResourceTypeIcon(resource.type)}</div>
                    </div>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              </PremiumLock>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
