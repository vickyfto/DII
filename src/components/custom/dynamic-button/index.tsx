import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DynamicButtonProps } from "./type"

export function DynamicButton({
    label,
    size = 'sm',
    color = 'default',
    icon: Icon,
    iconPosition = 'left',
    tooltip,
    tooltipPosition = 'top',
    onClick
}: DynamicButtonProps) {
    const buttonContent = (
        <Button
            variant={color}
            size={size}
            className={`flex items-center justify-center`}
            onClick={onClick}
        >
            {Icon && iconPosition === 'left' && <Icon />}
            {label}
            {Icon && iconPosition === 'right' && <Icon />}
        </Button>
    )

    if (tooltip) {
        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        {buttonContent}
                    </TooltipTrigger>
                    <TooltipContent side={tooltipPosition}>
                        <p>{tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        )
    }

    return buttonContent
}

