// app/contact/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
    return (
        <div className="bg-black min-h-screen">
            <div className="bg-black py-10 px-20">
                {/* Desktop Navbar */}
                <ul className="hidden md:flex font-bold items-center gap-6 text-white tracking-wider text-5xl cursor-pointer justify-between">
                    <li>
                        <Link href="/">BELLA TOUCH UP</Link>
                    </li>
                    <ul className="flex h-full font-extralight items-center gap-6 text-white tracking-wider text-2xl cursor-pointer">
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/gallery">GALLERIES</Link>
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
                {/* Mobile Navbar */}
                <div className="flex items-center justify-center md:hidden">
                    <div className="md:hidden flex h-full font-bold items-center gap-6 text-white tracking-wider text-5xl cursor-pointer justify-center py-10">
                        <h1>BELLA TOUCH UP</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center md:hidden">
                    <div>
                        <Image src="/list.svg" alt="" width={34} height={34} className="cursor-pointer invert" />
                    </div>
                </div>
            </div>
            <div className="p-20">
                <h1 className="md:hidden flex items-center justify-center text-white font-bold tracking-wider text-5xl">CONTACT</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10">
                <div className="px-6 md:py-0 min-h-[60vh] flex items-center justify-center">
                    <div className="w-full h-[600px] flex items-center justify-center overflow-hidden">
                        <Image alt="Portrait" src="/img.png" width={400} height={600} style={{objectFit: 'contain'}} priority />
                    </div>
                </div>
                <div className="md:h-full pt-10 md:pt-0">
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
        </div>
    );
}