import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Users, Calendar, Video, MessageSquare, Star, Award, Search } from "lucide-react"

export default function HowItWorksPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">How SkillShift Works</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to find skill-swapping partners and schedule sessions. Learn what you want
                  by teaching what you know.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="individual" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="individual">Individual Swaps</TabsTrigger>
                  <TabsTrigger value="group">Group Swaps</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="individual" className="space-y-12">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Search className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">1. Find Your Match</h2>
                    <p className="text-muted-foreground">
                      Tell us what skills you can teach and what you want to learn. Our smart matching system will find
                      people who are the perfect complement to your skill set.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Create a profile with your skills and interests
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Browse potential matches or let our AI suggest partners
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Filter by skill, availability, and location
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Finding a skill match"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">2. Schedule Your Swap</h2>
                    <p className="text-muted-foreground">
                      Once you've found a match, it's time to schedule your skill swap session. Choose a time that works
                      for both of you and decide whether to meet virtually or in person.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Use our built-in calendar to find a suitable time
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Set clear learning goals for the session
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Choose between virtual or in-person meetings
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl md:order-first">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Scheduling a swap"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Video className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">3. Conduct Your Session</h2>
                    <p className="text-muted-foreground">
                      When it's time for your swap, connect with your partner through our platform. For virtual
                      sessions, use our built-in video calling feature with screen sharing capabilities.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Join virtual sessions with one click
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Share your screen to demonstrate skills
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Use the chat feature to share links and resources
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Virtual skill swap session"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Star className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">4. Provide Feedback</h2>
                    <p className="text-muted-foreground">
                      After your session, share your experience by rating your partner and providing feedback. This
                      helps build trust in our community and improves future matches.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Rate your experience on a 5-star scale
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Provide constructive feedback
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Earn badges based on your participation
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl md:order-first">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Providing feedback"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="group" className="space-y-12">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Users className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">1. Join or Create a Group</h2>
                    <p className="text-muted-foreground">
                      Group swaps allow you to learn from or teach multiple people at once. Browse available groups or
                      create your own to share your expertise with more people.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Browse groups by skill category
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Create your own group as a host
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Set participant limits and requirements
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Group skill swap"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">2. Schedule Group Sessions</h2>
                    <p className="text-muted-foreground">
                      As a group host, you can set up recurring sessions or one-time events. Participants can RSVP to
                      sessions that fit their schedule.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Create single or recurring sessions
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Send automatic reminders to participants
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Track RSVPs and manage attendance
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl md:order-first">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Group scheduling"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">3. Collaborate and Learn</h2>
                    <p className="text-muted-foreground">
                      Group sessions offer a collaborative learning environment where participants can interact, ask
                      questions, and share insights with each other.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Participate in interactive group discussions
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Share resources with the entire group
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Learn from multiple perspectives
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Group collaboration"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 p-2 text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold">4. Build Your Community</h2>
                    <p className="text-muted-foreground">
                      Group swaps help you build a community around shared interests and skills. Regular participants
                      can form lasting connections and continue learning together.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Earn special badges for hosting groups
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Build a reputation as an expert in your field
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        Create ongoing learning communities
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl md:order-first">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Skill community"
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-start">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Skill Levels</CardTitle>
                  <CardDescription>We match users based on complementary skill levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Whether you're a beginner, intermediate, or expert, we'll find the right match for your skill level.
                    You can teach what you're good at and learn what you're interested in, regardless of your
                    experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Calendar Integration</CardTitle>
                  <CardDescription>Sync with your favorite calendar app</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    SkillShift integrates with Google Calendar, Apple Calendar, and Outlook to make scheduling easy.
                    Your swap sessions will automatically appear in your calendar with reminders so you never miss a
                    session.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Support</CardTitle>
                  <CardDescription>Get help from our team and community</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our support team is always ready to help with any questions or issues. We also have a community
                    forum where you can connect with other users, share tips, and get advice on making the most of your
                    skill swaps.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Swapping?
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
                <Link href="/learn-more">
                  <Button size="lg" variant="outline">
                    Learn More
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
