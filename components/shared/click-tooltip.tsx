
import {
    ReactNode
} from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

export type ClickTooltipProps = {
    children: ReactNode | ReactNode[],
    tooltip: string,
    className?: string,
}

export function ClickTooltip({ children, tooltip, className }: ClickTooltipProps) {
    return (
        <Popover> 
            <PopoverTrigger aria-label={tooltip}>
                <p className={className}>
                    {children}
                </p>
            </PopoverTrigger>
            <PopoverContent>{tooltip}</PopoverContent>
        </Popover>
    )
}