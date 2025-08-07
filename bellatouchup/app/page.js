// app/page.js or pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div
            className="h-[100vh] bg-cover bg-center animate-fadeIn"
            style={{ backgroundImage: "url('/sv.jpg')" }}
            
        >
            <div className="top-[45%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
                {/* Mobile Menu */}
                <div className="flex flex-col items-center justify-center md:hidden">
                    <div className="absolute w-full font-light text-white h-full flex flex-col items-center justify-center gap-8 text-xl">
                        <ul className="flex flex-col h-full font-light items-center gap-6 text-white tracking-wider text-2xl cursor-pointer">
                            <li className="hover:text-purple-300">
                                <Link href="/gallery">GALLERIES</Link>
                            </li>
                            <li className="hover:text-purple-300">
                                <Link href="/about">ABOUT</Link>
                            </li>
                            <li className="hover:text-purple-300">
                                <Link href="/contact">CONTACT</Link>
                            </li>
                            <li className="hover:text-purple-300">
                                <Link href="/">HOME PAGE</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Desktop Title */}
                <div className="hidden md:flex justify-center items-center text-6xl pb-5 text-white tracking-wider cursor-pointer">
                    <h1>BELLA TOUCH UP</h1>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 justify-center">
                    <div>
                        <ul className="flex h-full font-light items-center gap-6 text-white tracking-wider text-2xl cursor-pointer">
                            <li className="hover:text-purple-300">
                                <Link href="/gallery">GALLERIES</Link>
                            </li>
                            <li className="hover:text-purple-300">
                                <Link href="/about">ABOUT</Link>
                            </li>
                            <li className="hover:text-purple-300">
                                <Link href="/contact">CONTACT</Link>
                            </li>
                            <li className="hover:text-purple-300">
                                <Link href="/">HOME PAGE</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Social Links */}
            <div>
                <ul className="flex items-center justify-center gap-6 mt-[80vh] w-full invert">
                    <li>
                        <Link href="https://www.instagram.com/bella_touchup/" target="_blank">
                            <img src="/instagram.svg" alt="Instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.facebook.com/bellatouchup/" target="_blank">
                            <img src="/facebook.svg" alt="Facebook" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}