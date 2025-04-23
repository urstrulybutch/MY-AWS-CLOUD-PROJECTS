import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, Award } from "lucide-react"
import { PWAInstallPrompt } from "@/components/pwa-install-prompt"
import { HeroImage } from "@/components/hero-image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PWAInstallPrompt />
      <header className="border-b bg-black text-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="bg-green-500 text-black px-2 py-1 rounded">Skill</span>
            <span className="mr-8">Shift</span>
          </Link>
          <nav className="flex gap-6 sm:gap-8">
            <Link href="/about" className="text-sm font-medium hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-green-400 transition-colors">
              How It Works
            </Link>
            <Link href="/learn-more" className="text-sm font-medium hover:text-green-400 transition-colors">
              Learn More
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-green-400 transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-black text-white">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Swap Skills.
                    <br />
                    Not Money.
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Connect with others who want to learn what you know, and teach what you want to learn.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1.5 bg-green-500 hover:bg-green-600 text-black">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/how-it-works">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-green-500 text-green-500 hover:bg-green-500/10"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl">
                  <HeroImage />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How SkillShift Works</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform makes it easy to find skill-swapping partners and schedule sessions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Find a Match</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Tell us what you can teach and what you want to learn. We'll find your perfect swap partner.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Schedule a Swap</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Set up a time that works for both of you and connect via our built-in video platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Grow Together</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Learn new skills, earn badges, and build your profile as you complete more swaps.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/how-it-works">
                <Button variant="outline" size="lg">
                  Learn More About How It Works
                </Button>
              </Link>
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
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our community of skill-swappers today and start learning something new.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Sign Up Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-green-500 text-black px-1.5 py-0.5 rounded text-sm">Skill</span>
            <span className="text-sm">Shift</span>
          </div>
          <p className="text-xs text-gray-400">© 2025 SkillShift. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 ml-auto">
            <Link href="/terms" className="text-xs hover:text-green-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-xs hover:text-green-400 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-xs hover:text-green-400 transition-colors">
              Contact
            </Link>
            <a href="mailto:swapskillslearning@gmail.com" className="text-xs hover:text-green-400 transition-colors">
              swapskillslearning@gmail.com
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
