"use client"
import React, { useState } from 'react'
import Link from 'next/link';

export default function NavMenu() {
  const [open,setopen] = useState();
  return (
    <div className="flex items-center justify-center bg-black-100 md:hidden">
                    <div>
                        <img src="/list.svg" alt="" width={34} height={34} className="cursor-pointer invert" onClick={()=> setopen((prev)=>(!prev))}
                        />
                        {
    open && (
        <div className='fixed bg-black/80 text-white left-0 top-0 h-[100vh] w-full flex flex-col items-center justify-center gap-8 text-xl z-50'>
            <img
                className='invert size-10 absolute top-6 right-6 cursor-pointer'
                src="./x-lg.svg"
                alt=""
                onClick={() => setopen((prev) => !prev)}
            />
            <Link  className="hover:text-purple-300" href="/gallery">GALLERY</Link>
            <Link  className="hover:text-purple-300" href="/about">ABOUT</Link>
            <Link  className="hover:text-purple-300" href="/contact">CONTACT</Link>
            <Link  className="hover:text-purple-300" href="/">HOME</Link>
        </div>
    )
}
                    </div>
                </div>
  )
}