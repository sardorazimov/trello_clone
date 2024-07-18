import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  px-4 border-t shadow-sm  bg-slate-100">
    <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
      <Logo />
      <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
         <Button size={'sm'} variant={'ghost'}>
          Privacy Policy
         </Button>
         <Button size={'sm'}>
           Get Trello for <span>Free</span>
         </Button>
      </div>
    </div>
 </div>
  )
}

export default Footer
