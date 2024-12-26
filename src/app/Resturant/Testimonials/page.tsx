import { Star } from "lucide-react";
import Image from "next/image";

export default function Testmonials(){
    return(
        <>
          <div className="mt-10 w-full px-5 sm:px-16 py-5 text-white">
                    <h1 className="text-orange-500 font-greatVibes text-[20px] sm:text-[24px]">Testimonials</h1>
                    <h1 className="text-[18px] sm:text-[23px] font-bold">What our client are saying</h1>

                    {/* Card Section */}
                    <div className="flex justify-center items-center mt-14">
                        <div className="relative w-full max-w-sm sm:max-w-md h-auto bg-white rounded-lg shadow-lg p-6">
                            {/* Image - Partially inside and outside */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                               <Image 
                                src="/images/person.jpg"
                                alt="Profile"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full shadow-md"
                               />
                            </div>

                            {/* Card Content */}
                            <div className="text-center mt-12 sm:mt-14">
                                <h1 className="text-orange-500 text-[50px] sm:text-[80px] leading-[50px] sm:leading-[80px]">,,</h1>
                                <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at dicta possimus cum libero magni ducimus unde impedit qui. Ratione deleniti dicta voluptatem modi quos veniam facilis quae fugit ipsum?
                                </p>
                                <div className="flex justify-center items-center mt-2 mb-2">
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-yellow-400 w-4 sm:w-7" />
                                    <Star className="fill-gray-500 w-4 sm:w-7" />
                                </div>
                                <h1 className="text-black font-bold text-[16px] sm:text-[20px]">Alamin Hasan</h1>
                                <p className="text-gray-500 text-[8px] sm:text-[10px]">Food Specialist</p>
                            </div>
                        </div>
                    </div>

                    {/* Dots for Navigation */}
                    <div className="flex justify-center items-center gap-1 mt-5">
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl"></div>
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl opacity-65"></div>
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl opacity-65"></div>
                        <div className="bg-orange-500 w-2 h-2 rounded-2xl opacity-65"></div>
                    </div>
                </div>
        </>
    );
}