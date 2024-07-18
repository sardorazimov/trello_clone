import { cn } from "@/lib/utils"


const ClerkLayout = ({
    children
}: {children: React.ReactNode}) => {
  return (
    <div className={cn(`h-screen w-full bg-slate-800 flex items-center justify-center`)}>
      {children}
    </div>
  )
}

export default ClerkLayout
