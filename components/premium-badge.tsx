import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface PremiumBadgeProps {
  className?: string
  tooltipText?: string
}

export function PremiumBadge({ className = "", tooltipText = "Premium feature" }: PremiumBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className={`bg-primary/10 text-primary px-2 py-0.5 ${className}`}>
            <Star className="mr-1 h-3 w-3" />
            Premium
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
