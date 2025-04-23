"use client"

interface ImagePlaceholderProps {
  width: number
  height: number
  text?: string
  className?: string
}

export function ImagePlaceholder({ width, height, text, className = "" }: ImagePlaceholderProps) {
  const aspectRatio = width / height
  const displayText = text || `${width}×${height}`

  return (
    <div
      className={`flex items-center justify-center bg-muted/50 ${className}`}
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: aspectRatio,
      }}
    >
      <div className="text-center p-4">
        <div className="text-lg font-medium">{displayText}</div>
        <div className="text-sm text-muted-foreground">Placeholder Image</div>
      </div>
    </div>
  )
}
