"use client"
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'

export default function AboutPage() {
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
                <h1 className="flex items-center justify-center text-white font-bold tracking-wider text-5xl p-10">
                    ABOUT
                </h1>
                <div className="flex justify-center items-center m-20">
                    <p className="text-white tracking-widest text-xl">
                        &quot;Step into the world of beauty with our skilled makeup artist, whose passion for makeup knows no bounds. Trained in the vibrant city of Mumbai, they bring an artistic touch to every brushstroke. From elegant bridal looks to avant-garde creations, they tailor each makeup to enhance your natural features, leaving you feeling confident and beautiful. Find us on Instagram
                        <Link className="text-pink-400" href="https://www.instagram.com/bella_touchup/" target="_blank" rel="noopener noreferrer">
                            {' '}@bella_touchup
                        </Link>
                        &quot;
                    </p>
                </div>
            </div>
        </motion.div>
        </div>
    );
}