"use client"

import { useId } from "react"

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

export function PlaceholderImage({ width, height, text, className = "" }: PlaceholderImageProps) {
  const id = useId()
  const aspectRatio = width / height
  const displayText = text || `${width}×${height}`

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby={`placeholder-${id}`}
    >
      <title id={`placeholder-${id}`}>Placeholder image</title>
      <rect width={width} height={height} fill="hsl(var(--muted))" />
      <defs>
        <linearGradient id={`gradient-${id}`} x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--primary))" stopOpacity="0.1" offset="0%" />
          <stop stopColor="hsl(var(--primary))" stopOpacity="0.2" offset="100%" />
        </linearGradient>
      </defs>
      <rect width={width} height={height} fill={`url(#gradient-${id})`} />
      <g
        fill="hsl(var(--foreground))"
        opacity="0.5"
        style={{
          fontSize: Math.min(width, height) * 0.15,
          fontFamily: "system-ui, sans-serif",
          fontWeight: "bold",
          dominantBaseline: "middle",
          textAnchor: "middle",
        }}
      >
        <text x="50%" y="50%">
          {displayText}
        </text>
      </g>
    </svg>
  )
}
