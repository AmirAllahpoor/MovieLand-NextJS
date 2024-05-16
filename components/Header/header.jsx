import Link from "next/link";
import Image from "next/image";
import iconMovie from "@/public/favicon.ico"

const MyHeader = () => {
    return ( 
        <>
        <div className="bg-zinc-800 w-full h-20 absolute top-0 flex flex-row justify-between">
            <div className="ml-10 mt-3 flex flex-row">
                <Link href="/">
                <Image src={iconMovie} className="w-12 h-12" alt="iconMovie"/>
                </Link>
                <Link href="/">
                <h1 className="text-zinc-100 text-xl font-semibold font-serif mt-3 ml-4">Movie Land</h1>
                </Link>
            </div>
            <div className="mt-3 mr-10 flex flex-row">
                <h1 className="text-zinc-100 text-base font-semibold font-sans mt-3 mr-10 cursor-pointer">About</h1>
                <h1 className="text-zinc-100 text-base font-semibold font-sans mt-3 mr-10 cursor-pointer">Login</h1>
                <Link href="/movies">
                <h1 className="text-zinc-100 text-base font-semibold font-sans mt-3 mr-4">MovieList</h1>
                </Link>
            </div>
        </div>
        </>
     );
}
 
export default MyHeader;