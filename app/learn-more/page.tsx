import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, Calendar, Video, MessageSquare, Star, Award, Search, Users, Lock } from "lucide-react"

export default function LearnMorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Skill</span>
            <span>Shift</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">SkillShift Features</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover all the ways SkillShift can help you learn new skills and connect with others.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="core" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="core">Core Features</TabsTrigger>
                  <TabsTrigger value="premium">Premium Features</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="core" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Smart Matching</CardTitle>
                      <CardDescription>Find the perfect skill swap partners</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>AI-powered matching based on complementary skills</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Filter by skill category, level, and availability</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Browse potential matches or receive suggestions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Detailed profiles with skills and experience</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Scheduling</CardTitle>
                      <CardDescription>Easily plan and manage your skill swaps</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Built-in calendar for scheduling sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Automatic time zone conversion</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Email and push notification reminders</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Calendar integration with Google, Apple, and Outlook</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Virtual Sessions</CardTitle>
                      <CardDescription>Connect with partners from anywhere</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Built-in video calling with no downloads required</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Screen sharing for demonstrations</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>In-session chat for sharing links and resources</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Session timer to keep track of time</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Messaging</CardTitle>
                      <CardDescription>Communicate with your swap partners</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Direct messaging with swap partners</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>File and image sharing</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Message history for reference</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Email notifications for new messages</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Feedback System</CardTitle>
                      <CardDescription>Build trust and improve matches</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Rate and review your swap partners</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Provide detailed feedback on sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Safety reporting system</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Verified user badges for trusted members</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Skill Tracking</CardTitle>
                      <CardDescription>Monitor your learning progress</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Track hours spent learning and teaching</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Earn badges for completed swaps and milestones</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Set and track learning goals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Visualize your skill development over time</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="premium" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Group Swaps</CardTitle>
                      <CardDescription>Learn and teach in group settings</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Host group sessions with up to 10 participants</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Create recurring group sessions</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Advanced group video calling features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Group messaging and resource sharing</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Advanced Scheduling</CardTitle>
                      <CardDescription>More flexibility for busy people</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Set recurring sessions with partners</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Priority matching with compatible schedules</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Advanced availability settings</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Calendar blocking to prevent double-booking</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Lock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Verified Status</CardTitle>
                      <CardDescription>Enhanced trust and visibility</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Verified badge on your profile</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Priority in search results</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Background check option for added trust</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Enhanced profile customization</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Card className="w-full max-w-2xl">
                    <CardHeader>
                      <CardTitle className="text-center">Premium Membership</CardTitle>
                      <CardDescription className="text-center">
                        Unlock all premium features and enhance your skill swapping experience
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-4xl font-bold">
                          $9.99<span className="text-lg font-normal text-muted-foreground">/month</span>
                        </div>
                        <p className="text-center text-muted-foreground">Or save 20% with annual billing</p>
                        <Button size="lg" className="w-full max-w-xs">
                          Upgrade to Premium
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="community" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Community Forums</CardTitle>
                      <CardDescription>Connect with the wider SkillShift community</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4">
                        Our community forums are a place to discuss skills, share resources, and connect with other
                        members outside of direct skill swaps.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Skill-specific discussion boards</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Resource sharing and recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Community challenges and events</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Q&A with skill experts</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="flex flex-col">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Events and Workshops</CardTitle>
                      <CardDescription>Learn together in organized community events</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-sm text-muted-foreground mb-4">
                        SkillShift regularly hosts virtual and in-person events to bring the community together and
                        facilitate larger skill-sharing opportunities.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Monthly virtual workshops</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Quarterly skill-sharing festivals</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Expert-led masterclasses</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-4 w-4 mt-0.5 text-primary" />
                          <span>Community challenges with prizes</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                    <CardDescription>Our community values and expectations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        At SkillShift, we're committed to creating a safe, inclusive, and supportive environment for all
                        members. Our community is built on these core principles:
                      </p>

                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-2">
                          <h3 className="font-medium">Respect</h3>
                          <p className="text-sm text-muted-foreground">
                            Treat all members with respect and dignity, regardless of skill level, background, or
                            identity.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Patience</h3>
                          <p className="text-sm text-muted-foreground">
                            Learning takes time. Be patient with yourself and others during the skill-sharing process.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Honesty</h3>
                          <p className="text-sm text-muted-foreground">
                            Be honest about your skill level and experience. It helps create better matches and
                            expectations.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Reliability</h3>
                          <p className="text-sm text-muted-foreground">
                            Honor your commitments. Show up on time for scheduled swaps and communicate if plans change.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Constructive Feedback</h3>
                          <p className="text-sm text-muted-foreground">
                            Provide helpful, specific feedback that helps others improve their skills or teaching.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Safety First</h3>
                          <p className="text-sm text-muted-foreground">
                            Prioritize safety in all interactions. Report any concerns to our support team immediately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Skill Journey?
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of skill-swappers today and start learning something new.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Sign Up Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-primary text-primary-foreground px-1.5 py-0.5 rounded text-sm">Skill</span>
            <span className="text-sm">Shift</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 SkillShift. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 ml-auto">
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs hover:underline underline-offset-4">
              Contact
            </Link>
            <a href="mailto:swapskillslearning@gmail.com" className="text-xs hover:underline underline-offset-4">
              swapskillslearning@gmail.com
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
