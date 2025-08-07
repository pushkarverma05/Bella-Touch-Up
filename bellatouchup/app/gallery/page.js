'use client'
// app/gallery/page.js (for Next.js 13+ app directory)
// or pages/gallery.js (for pages directory)
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import { use } from 'react'

const images = Array.from({ length: 18 }, (_, i) => `/grid-photos/img${i + 1}.jpg`)

export default function Gallery() {
    return (
         <div className="bg-black min-h-screen overflow-hidden">
            <NavBar/>
        <motion.div
            className="bg-black min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} // adjust timing as you like
        >
       
                <div className="p-20">
                    <h1 className="flex items-center justify-center text-white font-bold tracking-wider text-5xl p-10">GALLERY</h1>
                    <p className="flex items-center justify-center text-white tracking-wider">
                        In this gallery you can see a selection of my work. I hope you enjoy.
                    </p>
                </div>
                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4 mx-20">
                    {images.map((src, i) => (
                        <div className="overflow-hidden" key={i}>
                            <Image
                                className="transition delay-10 duration-1000 ease-in hover:scale-115"
                                src={src}
                                alt=""
                                width={400}
                                height={400}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
                {/* Mobile Grid */}
                <div className="md:hidden grid grid-cols-2 gap-4 mx-8">
                    {images.map((src, i) => (
                        <div className="overflow-hidden" key={i}>
                            <Image
                                className="transition delay-10 duration-1000 ease-in hover:scale-115"
                                src={src}
                                alt=""
                                width={400}
                                height={400}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
        </motion.div>
            </div>
    )
}