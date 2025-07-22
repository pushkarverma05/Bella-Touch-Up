// app/gallery/page.js (for Next.js 13+ app directory)
// or pages/gallery.js (for pages directory)

import Image from 'next/image'
import Link from 'next/link'

const images = Array.from({ length: 18 }, (_, i) => `/grid-photos/img${i + 1}.jpg`)

export default function Gallery() {
    return (
        <div className="bg-black min-h-screen">
            <div className="bg-black py-10 px-20">
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
                <div className="flex items-center justify-center md:hidden">
                    <div>
                        <Image src="/list.svg" alt="" width={34} height={34} className="cursor-pointer invert" />
                    </div>
                </div>
            </div>
            <div>
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
            </div>
        </div>
    )
}