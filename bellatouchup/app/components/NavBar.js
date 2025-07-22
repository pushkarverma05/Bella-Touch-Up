"use client"
import React from 'react'
import Link from 'next/link'
import NavMenu from './NavMenu'

export default function NavBar() {
  return (
    <div className="bg-black py-10 px-20 relative">
                <ul className="hidden md:flex font-bold items-center gap-6 text-white tracking-wider text-5xl cursor-pointer justify-between">
                    <li>
                        <Link href="/">BELLA TOUCH UP</Link>
                    </li>
                    <ul className="flex h-full font-extralight items-center gap-6 text-white tracking-wider text-2xl cursor-pointer">
                        <li className="hover:text-purple-300">
                            <Link className="nav-link active:" href="/gallery">GALLERIES</Link>
                        </li>
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/about">ABOUT</Link>
                        </li>
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/contact">CONTACT</Link>
                        </li>
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/">HOME</Link>
                        </li>
                    </ul>
                </ul>
                {/* Mobile Header */}
                <div className="flex items-center justify-center md:hidden">
                    <div className="md:hidden flex h-full font-bold items-center gap-6 text-white tracking-wider text-5xl cursor-pointer justify-center py-10">
                        <h1>BELLA TOUCH UP</h1>
                    </div>
                </div>
                <NavMenu/>
            </div>
  )
}
