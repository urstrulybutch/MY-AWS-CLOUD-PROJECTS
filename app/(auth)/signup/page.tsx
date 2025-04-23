"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MultiSelect } from "@/components/multi-select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const signupSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  skillsOffered: z.array(z.string()).min(1, {
    message: "Please select at least one skill you can offer.",
  }),
  skillsWanted: z.array(z.string()).min(1, {
    message: "Please select at least one skill you want to learn.",
  }),
  availability: z.array(z.string()).min(1, {
    message: "Please select your availability.",
  }),
  learningGoal: z.string().optional(),
})

const availabilityOptions = [
  { label: "Weekday Mornings", value: "weekday-mornings" },
  { label: "Weekday Afternoons", value: "weekday-afternoons" },
  { label: "Weekday Evenings", value: "weekday-evenings" },
  { label: "Weekend Mornings", value: "weekend-mornings" },
  { label: "Weekend Afternoons", value: "weekend-afternoons" },
  { label: "Weekend Evenings", value: "weekend-evenings" },
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

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      skillsOffered: [],
      skillsWanted: [],
      availability: [],
      learningGoal: "",
    },
  })

  function onSubmit(values: z.infer<typeof signupSchema>) {
    console.log(values)
    // In a real app, you would send this data to your backend
    // For now, we'll just redirect to the dashboard
    router.push("/dashboard")
  }

  return (
    <div>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">Enter your information to get started</p>
      </div>

      <Tabs value={step === 1 ? "account" : "profile"} className="mt-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account" onClick={() => setStep(1)} disabled={step === 1}>
            Account
          </TabsTrigger>
          <TabsTrigger value="profile" onClick={() => setStep(2)} disabled={step === 2}>
            Profile
          </TabsTrigger>
        </TabsList>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <TabsContent value="account" className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="********" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="button"
                className="w-full"
                onClick={() => {
                  form.trigger(["username", "email", "password"]).then((isValid) => {
                    if (isValid) setStep(2)
                  })
                }}
              >
                Continue
              </Button>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <FormField
                control={form.control}
                name="skillsOffered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills You Offer</FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={skillOptions}
                        selected={field.value}
                        onChange={field.onChange}
                        placeholder="Select skills..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skillsWanted"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills You Want</FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={skillOptions}
                        selected={field.value}
                        onChange={field.onChange}
                        placeholder="Select skills..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={availabilityOptions}
                        selected={field.value}
                        onChange={field.onChange}
                        placeholder="Select availability..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="learningGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Learning Goal (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What do you hope to achieve with your skill swaps?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2">
                <Button type="button" variant="outline" className="w-1/2" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" className="w-1/2">
                  Create Account
                </Button>
              </div>
            </TabsContent>
          </form>
        </Form>
      </Tabs>

      <div className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  )
}
