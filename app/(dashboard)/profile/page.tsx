"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MultiSelect } from "@/components/multi-select"
import { Edit, Save } from "lucide-react"
import { profileService } from "@/lib/services/profile-service"
import { reviewService } from "@/lib/services/review-service"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Database } from "@/lib/supabase/database.types"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type Review = Database["public"]["Tables"]["reviews"]["Row"]

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

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    skillsOffered: [] as string[],
    skillsWanted: [] as string[],
    availability: [] as string[],
    learningGoal: "",
  })
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      setIsLoading(true)
      try {
        const profileData = await profileService.getCurrentProfile()
        setProfile(profileData)

        if (profileData) {
          setFormData({
            username: profileData.username || "",
            bio: profileData.bio || "",
            skillsOffered: profileData.skills_offered || [],
            skillsWanted: profileData.skills_wanted || [],
            availability: profileData.availability || [],
            learningGoal: profileData.learning_goal || "",
          })

          // Load reviews
          if (profileData.id) {
            const reviewsData = await reviewService.getUserReviews(profileData.id)
            setReviews(reviewsData)
          }
        }
      } catch (error) {
        console.error("Error loading profile:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProfile()
  }, [])

  const handleSave = async () => {
    if (!profile) return

    setIsLoading(true)
    try {
      // Upload avatar if changed
      let avatarUrl = profile.avatar_url
      if (avatarFile) {
        avatarUrl = (await profileService.uploadAvatar(avatarFile)) || avatarUrl
      }

      // Update profile
      const updatedProfile = await profileService.updateProfile({
        username: formData.username,
        bio: formData.bio,
        skills_offered: formData.skillsOffered,
        skills_wanted: formData.skillsWanted,
        availability: formData.availability,
        learning_goal: formData.learningGoal,
        avatar_url: avatarUrl,
      })

      if (updatedProfile) {
        setProfile(updatedProfile)
      }

      setIsEditing(false)
    } catch (error) {
      console.error("Error saving profile:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatarFile(file)
      setAvatarPreview(URL.createObjectURL(file))
    }
  }

  if (isLoading && !profile) {
    return <div className="flex justify-center items-center h-64">Loading profile...</div>
  }

  if (!profile) {
    return <div className="flex justify-center items-center h-64">Profile not found</div>
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">My Profile</h2>
        <Button
          variant={isEditing ? "default" : "outline"}
          size="sm"
          className="gap-2"
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          disabled={isLoading}
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              {isEditing ? (
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={avatarPreview || profile.avatar_url || undefined} />
                    <AvatarFallback>{getInitials(profile.username || "User")}</AvatarFallback>
                  </Avatar>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs">Change</span>
                  </div>
                </div>
              ) : (
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.avatar_url || undefined} />
                  <AvatarFallback>{getInitials(profile.username || "User")}</AvatarFallback>
                </Avatar>
              )}

              {isEditing ? (
                <div className="mt-4 w-full">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    id="name"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="mt-1"
                  />
                </div>
              ) : (
                <CardTitle className="mt-4 text-center">{profile.username}</CardTitle>
              )}

              <div className="flex items-center mt-2">
                <span>
                  {profile.rating ? `${profile.rating.toFixed(1)} (${reviews.length} reviews)` : "No ratings yet"}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-sm font-medium">Member Since</div>
                <div className="text-sm text-muted-foreground">
                  {profile.member_since ? new Date(profile.member_since).toLocaleDateString() : "N/A"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <span className="text-2xl font-bold">{profile.swaps_completed || 0}</span>
                  <span className="text-xs text-muted-foreground">Swaps</span>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-md">
                  <span className="text-2xl font-bold">{profile.hours_traded || 0}</span>
                  <span className="text-xs text-muted-foreground">Hours</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Bio</Label>
              {isEditing ? (
                <Textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="resize-none"
                  rows={4}
                />
              ) : (
                <p className="text-sm text-muted-foreground">{profile.bio || "No bio provided"}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Skills Offered</Label>
              {isEditing ? (
                <MultiSelect
                  options={skillOptions}
                  selected={formData.skillsOffered}
                  onChange={(skills) => setFormData({ ...formData, skillsOffered: skills })}
                  placeholder="Select skills..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.skills_offered?.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-green-600 border-green-600">
                      {skill}
                    </Badge>
                  )) || <span className="text-sm text-muted-foreground">No skills offered</span>}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Skills Wanted</Label>
              {isEditing ? (
                <MultiSelect
                  options={skillOptions}
                  selected={formData.skillsWanted}
                  onChange={(skills) => setFormData({ ...formData, skillsWanted: skills })}
                  placeholder="Select skills..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.skills_wanted?.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-blue-600 border-blue-600">
                      {skill}
                    </Badge>
                  )) || <span className="text-sm text-muted-foreground">No skills wanted</span>}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Availability</Label>
              {isEditing ? (
                <MultiSelect
                  options={availabilityOptions}
                  selected={formData.availability}
                  onChange={(availability) => setFormData({ ...formData, availability })}
                  placeholder="Select availability..."
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.availability?.map((time) => (
                    <Badge key={time} variant="secondary">
                      {time}
                    </Badge>
                  )) || <span className="text-sm text-muted-foreground">No availability set</span>}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Learning Goal</Label>
              {isEditing ? (
                <Textarea
                  value={formData.learningGoal}
                  onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                  className="resize-none"
                  rows={3}
                />
              ) : (
                <p className="text-sm text-muted-foreground">{profile.learning_goal || "No learning goal set"}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reviews" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Reviews from Swap Partners</CardTitle>
              <CardDescription>What others are saying about your teaching</CardDescription>
            </CardHeader>
            <CardContent>
              {reviews.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No reviews yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div>
                            <div className="font-medium">Anonymous</div>
                            <div className="text-xs text-muted-foreground">
                              {new Date(review.created_at || "").toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < (review.rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm">{review.feedback || "No feedback provided"}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
