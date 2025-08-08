import Link from 'next/link';
import NavBar from '../components/NavBar';
import  Animatelayout from '../components/AnimateLayout'
export default function AboutPage() {
    return (
        <Animatelayout>
        <div className="bg-black min-h-screen">
            <NavBar/>
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
        </Animatelayout>
    );
}