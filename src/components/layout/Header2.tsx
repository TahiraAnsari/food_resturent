import Image from "next/image";
import Link from "next/link";
export default function Header2() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto h-auto relative py-2">
       
        <div className=" w-full mt-4 flex flex-col md:flex-row justify-around items-center content-center">
          <div className="text-orange-500 font-['Helvetica'] text-lg sm:text-xl md:text-2xl">
          Food<span className="text-white leading-tight">tuck</span>
        </div>
          <div className="flex gap-4 text-sm sm:text-base text-white items-center cursor-pointer">
          <div className="flex flex-col items-center ">
              <Link href="/"><span className="mt-1">Home</span></Link>
              <span className="w-1 h-1 bg-slate-400 rounded-full "></span>
            </div>
            <Link href="/Menu"><span>Menu</span></Link>
            <Link href="/Blogs/blog-list"><span>Blog</span></Link>
            <Link href="/404-Page"><span>Pages</span></Link>
            <Link href="/About-us"><span>About</span></Link>
            <Link href="/Shop"><span>Shop</span></Link>
            <Link href="/"><span>Contact</span></Link>
          </div>

          {/* Search and Shopping Bag */}
          <div className="flex gap-4 items-center mt-4 md:mt-0">
          <div className="flex cursor-pointer gap-5">
            <Link href="/Shop/shopping-cart">
              <Image
                src={"/FigmaImages/img104.png"}
                alt="Image"
                width={20}
                height={20}

              /></Link>
            <Link href="/Log-Sign/login">
              <Image
                src={"/FigmaImages/img105.png"}
                alt="Image"
                width={20}
                height={20}
              />
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
