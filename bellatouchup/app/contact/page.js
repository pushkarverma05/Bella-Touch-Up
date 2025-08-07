"use client"
// app/contact/page.js
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'
export default function Contact() {
    return (
        <div className="bg-black min-h-screen">
            <NavBar/>
            <motion.div
            className="bg-black min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} // adjust timing as you like
        >
            <div className="p-20">
                <h1 className="md:hidden flex items-center justify-center text-white font-bold tracking-wider text-5xl">CONTACT</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10">
                <div className="px-10 md:py-0 min-h-[60vh] flex items-center justify-center">
                    <div className="w-full h-[500px] relative overflow-hidden">
                        <img alt="Portrait" src="/img.png" style={{objectFit: 'contain'}} className='h-full w-full object-cover'p/>
                    </div>
                </div>
                <div className="md:h-full py-20 md:pt-0"> 
                    <h1 className="hidden md:flex pt-0 items-center justify-center text-white font-bold tracking-wider text-5xl p-10">CONTACT</h1>
                    <ul className="flex items-center justify-center gap-6 w-full invert">
                        <li>
                            <Link href="https://www.instagram.com/bella_touchup/" target="_blank">
                                <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/bellatouchup/" target="_blank">
                                <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-center gap-6 w-full pt-10">
                        <ul>
                            <li className="flex gap-6 w-full">
                                <Image className="invert" src="/telephone.svg" alt="" width={24} height={24} />
                                <a href="tel:+91701448851" className="text-white hover:text-purple-300 underline">+91 701448851</a>
                            </li>
                            <li className="flex gap-6 w-full pt-2">
                                <Image className="invert" src="/geo-alt-fill.svg" alt="" width={24} height={24} />
                                <a
                                    href="https://www.google.com/maps/dir//Sector+3,+Pratap+Nagar,+Jaipur,+Rajasthan/@26.8274933,75.7484257,8423m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x396dca1f76471501:0x1a6ede8cc79fab47!2m2!1d75.8025492!2d26.8056462?entry=ttu"
                                    className="text-white hover:text-purple-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Pratap nagar Jaipur, India 302033 Rajasthan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </motion.div>
        </div>
    );
}