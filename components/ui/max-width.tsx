import { cn } from "@/lib/utils"
export const MaxWidthWrapper = ({ children, className }:{
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <div className={cn(`w-full max-w-6xl`,className)}>
            { children }
        </div>
    )
}
