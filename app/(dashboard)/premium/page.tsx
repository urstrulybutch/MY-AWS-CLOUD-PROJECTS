"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Calendar, Video, Clock, Users, Award, FileText } from "lucide-react"
import Link from "next/link"

export default function PremiumPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = () => {
    setIsLoading(true)
    // In a real app, this would redirect to a payment processor
    setTimeout(() => {
      setIsLoading(false)
      // Simulate successful subscription
      alert("Subscription successful! You now have access to premium features.")
    }, 2000)
  }

  const premiumFeatures = [
    {
      title: "Session Recording",
      description: "Record your skill swap sessions for later review and reference",
      icon: Video,
      category: "learning",
    },
    {
      title: "Extended Sessions",
      description: "Host sessions up to 3 hours long (vs 1 hour for free users)",
      icon: Clock,
      category: "learning",
    },
    {
      title: "Advanced Calendar",
      description: "Two-way sync with Google, Apple, and Outlook calendars",
      icon: Calendar,
      category: "scheduling",
    },
    {
      title: "Priority Matching",
      description: "Get matched first with compatible skill swap partners",
      icon: Star,
      category: "networking",
    },
    {
      title: "Verified Status",
      description: "Get a verified badge on your profile for increased trust",
      icon: Check,
      category: "networking",
    },
    {
      title: "Unlimited Group Swaps",
      description: "Create and join unlimited group skill swap sessions",
      icon: Users,
      category: "community",
    },
    {
      title: "Progress Analytics",
      description: "Detailed analytics about your learning progress and teaching effectiveness",
      icon: Award,
      category: "learning",
    },
    {
      title: "Resource Library",
      description: "Access to premium learning resources, templates, and guides",
      icon: FileText,
      category: "content",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Premium Membership</h2>
        <p className="text-muted-foreground">
          Upgrade to Premium to unlock advanced features and enhance your skill swapping experience
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-card p-10 text-card-foreground shadow-sm">
        <Badge variant="outline" className="bg-primary/10 text-primary px-3 py-1">
          <Star className="mr-1 h-3.5 w-3.5" />
          Premium
        </Badge>
        <h3 className="text-3xl font-bold">Unlock Your Full Potential</h3>
        <p className="max-w-[600px] text-center text-muted-foreground">
          Take your skill swapping to the next level with premium features designed to enhance your learning and
          teaching experience.
        </p>

        <div className="mt-6 w-full max-w-md">
          <Tabs
            defaultValue="monthly"
            value={billingPeriod}
            onValueChange={(v) => setBillingPeriod(v as "monthly" | "annual")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="mt-4 text-center">
              <div className="text-4xl font-bold">
                $9.99<span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Billed monthly. Cancel anytime.</p>
            </TabsContent>
            <TabsContent value="annual" className="mt-4 text-center">
              <div className="text-4xl font-bold">
                $7.99<span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">$95.88 billed annually. Cancel anytime.</p>
              <Badge className="mt-2 bg-green-500 text-white">Save 20%</Badge>
            </TabsContent>
          </Tabs>

          <Button className="mt-6 w-full" size="lg" onClick={handleSubscribe} disabled={isLoading}>
            {isLoading ? "Processing..." : `Subscribe ${billingPeriod === "monthly" ? "Monthly" : "Annually"}`}
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            By subscribing, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-2">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8">Premium Features</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {premiumFeatures.map((feature) => (
          <Card key={feature.title} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-2">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <Card>
          <CardHeader>
            <CardTitle>What's included in the Premium membership?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Premium membership includes session recording, extended session duration, advanced calendar integration,
              priority matching, verified status, unlimited group swaps, progress analytics, and access to our premium
              resource library.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Can I cancel my subscription?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to
              Premium features until the end of your current billing period.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Is there a free trial?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We offer a 7-day free trial for new Premium subscribers. You can try all Premium features during this
              period and cancel anytime if you're not satisfied.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
