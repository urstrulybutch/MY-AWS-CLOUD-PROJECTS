"use client"

import { PremiumLock } from "@/components/premium-lock"
import { PremiumBadge } from "@/components/premium-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", hours: 4 },
  { name: "Feb", hours: 6 },
  { name: "Mar", hours: 8 },
  { name: "Apr", hours: 12 },
  { name: "May", hours: 10 },
  { name: "Jun", hours: 14 },
]

export function PremiumAnalytics() {
  return (
    <PremiumLock
      featureName="Progress Analytics"
      description="Get detailed analytics about your learning progress and teaching effectiveness."
    >
      <Card className="relative">
        <PremiumBadge className="absolute top-4 right-4" />
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
          <CardDescription>Track your skill development over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hours" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </PremiumLock>
  )
}
