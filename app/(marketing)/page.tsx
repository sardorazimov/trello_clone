///

import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"
import Link from "next/link"
import localFont from "next/font/local"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";



const textFonts = Poppins ({
  subsets: ['latin'],
  weight:[
 "100",
 '200',
 '300',
 '400',
 '500',
 '600',
 '700',
 '800',
 '900',
  ],
});


const MarketinngPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn(`flex items-center justify-center flex-col`,
      
      )}>
        <div className="flex mb-4 items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal  className="h-6  w-6 mr-2"/>
          No 1 task Mangment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-900 mb-6">
          Taskify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 p-2 pb-4 w-fit rounded-md ">
         work forward
        </div>
      </div>
      <div className={cn(
        `text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto`,
        textFonts.className
      )}>
      Accelerate your teams work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise! Learn more.
      </div>
      <Button className="mt-6 " size={"lg"} asChild>
        <Link href={'/'}>
          Get Started
        </Link>
      </Button>
    </div>
  )
}

export default MarketinngPage
