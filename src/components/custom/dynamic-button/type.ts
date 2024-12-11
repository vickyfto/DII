import { LucideIcon } from "lucide-react"

type ButtonSize = 'default' | 'xs' | 'sm' | 'lg'
type ButtonColor = 'default' | 'purpleToPink' | 'link' | "tealToLime" | "cyanToBlue" | "pinkToOrange"
type IconPosition = 'left' | 'right'
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface DynamicButtonProps {
    label: string
    size?: ButtonSize
    color?: ButtonColor
    icon?: LucideIcon
    iconPosition?: IconPosition
    tooltip?: string
    tooltipPosition?: TooltipPosition
    onClick?: () => void
}