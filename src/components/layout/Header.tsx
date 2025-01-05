import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto h-auto relative">
        <div className="text-orange-500 text-center font-['Helvetica'] text-lg sm:text-xl md:text-2xl pt-4">
          Food<span className="text-white leading-tight">tuck</span>
        </div>
        <div className=" w-full mt-4 flex flex-col md:flex-row justify-around items-center">
          {/* Navigation Links */}
          <div className="flex gap-4 text-sm sm:text-base text-white items-center">
            <div className="flex flex-col items-center ">
              <Link href="/"><span className="mt-1">Home</span></Link>
              <span className="w-1 h-1 bg-slate-400 rounded-full "></span>
            </div>
            <Link href="/Menu/"><span>Menu</span></Link>
            <Link href="/Blogs/blog-list/"><span>Blog</span></Link>
            <Link href="/"><span>Pages</span></Link>
            <Link href="/"><span>About</span></Link>
            <Link href="/Shop/"><span>Shop</span></Link>
            <Link href="/"><span>Contact</span></Link>
          </div>

          {/* Search and Shopping Bag */}
          <div className="flex gap-4 items-center mt-4 md:mt-0">
            <div className="flex items-center w-[200px] max-w-40 h-8 rounded-2xl border border-orange-500 px-5">
              <p className="text-xs sm:text-sm text-white flex-grow">search...</p>
              <Search className="w-4 sm:w-5 text-white cursor-pointer" />
            </div>
            <Image 
            src={"/FigmaImages/img104.png"}
            alt="Image"
            width={20}
            height={20}
            />
            <Image 
            src={"/FigmaImages/img105.png"}
            alt="Image"
            width={20}
            height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
