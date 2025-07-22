import Link from 'next/link';

export default function AboutPage() {
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
                            <Link className="nav-link active:" href="/gallery">
                                GALLERIES
                            </Link>
                        </li>
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/contact">
                                CONTACT
                            </Link>
                        </li>
                        <li className="hover:text-purple-300">
                            <Link className="nav-link" href="/">
                                HOME
                            </Link>
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
                        <img
                            src="/list.svg"
                            alt=""
                            width={34}
                            height={34}
                            className="cursor-pointer invert"
                        />
                    </div>
                </div>
            </div>
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
        </div>
    );
}