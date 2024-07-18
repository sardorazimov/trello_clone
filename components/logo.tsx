import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image src={'/logo.png'} alt='Logo ' height={35} width={35} />
        <p className='text-lg text-slate-900 pb-1 font-bold'>
            Trello
        </p>
      </div>
    </Link>
  )
}

export default Logo
