"use client"

import { useMemo } from "react"

interface AvatarPlaceholderProps {
  initials: string
  size?: number
  className?: string
}

export function AvatarPlaceholder({ initials, size = 40, className = "" }: AvatarPlaceholderProps) {
  // Generate a deterministic color based on the initials
  const backgroundColor = useMemo(() => {
    const colors = [
      "#f87171", // red
      "#fb923c", // orange
      "#fbbf24", // amber
      "#a3e635", // lime
      "#4ade80", // green
      "#34d399", // emerald
      "#2dd4bf", // teal
      "#22d3ee", // cyan
      "#38bdf8", // sky
      "#60a5fa", // blue
      "#818cf8", // indigo
      "#a78bfa", // violet
      "#c084fc", // purple
      "#e879f9", // fuchsia
      "#f472b6", // pink
      "#fb7185", // rose
    ]

    // Simple hash function to get a consistent color for the same initials
    let hash = 0
    for (let i = 0; i < initials.length; i++) {
      hash = initials.charCodeAt(i) + ((hash << 5) - hash)
    }

    const index = Math.abs(hash) % colors.length
    return colors[index]
  }, [initials])

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} rx={size / 2} fill={backgroundColor} />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".1em"
        dominantBaseline="middle"
        fill="white"
        fontSize={size * 0.4}
        fontFamily="system-ui, sans-serif"
        fontWeight="bold"
      >
        {initials.substring(0, 2).toUpperCase()}
      </text>
    </svg>
  )
}
