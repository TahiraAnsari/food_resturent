import { ShoppingBag, User } from "lucide-react";

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
              <a href="/"><span className="mt-1">Home</span></a>
              <span className="w-1 h-1 bg-slate-400 rounded-full "></span>
            </div>
           <a href="/Menu/"> <span>Menu</span></a>
            <span>Blog</span>
            <span>Pages</span>
            <span>About</span>
            <a href="/Shop/"><span>Shop</span></a>
            <span>Contact</span>
          </div>

          {/* Search and Shopping Bag */}
          <div className="flex gap-4 items-center mt-4 md:mt-0">
            <ShoppingBag className="w-5 sm:w-6 text-white cursor-pointer" />
            <a href="/signup"><User className="w-5 sm:w-6 text-white cursor-pointer"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
