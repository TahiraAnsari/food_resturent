import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { CheckSquareIcon, Star, TrashIcon } from "lucide-react";
import Image from "next/image";
export default function ShoppingCart(){
    return(
        <>
        <Header2 />
        <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Shopping Cart</h1>
                    <div className="flex space-x-1 text-[10px] items-center leading-8">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">Shoping cart</span>

                    </div>
                </div>
            </div>
            <div className="w-screen h-[890px] bg-white">
                <div>
                   <div className="w-screen h-[50px] flex justify-between px-5 items-center text-black text-[11px] font-bold">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                   </div>
                   <div className="w-screen h-[50px] sm:h-[100px] my-2 flex justify-between px-2 items-center text-black text-[11px] border shadow-md mt-2">
                    <div className="flex gap-1">
                        <div className="w-[40px] h-[40px]">
                            <Image 
                            src={"/FigmaImages/img42.png"}
                            alt="picture"
                            width={100}
                            height={100}
                            />
                        </div>
                        <div>
                        <p className="">Burger</p>
                       <div className="flex gap-[1px]">
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       </div>
                        </div>
                        
                    </div>
                    <p className="ml-8 sm:ml-32">$35.00</p>
                    <div className="ml-[65px] sm:ml-48 w-[40px] border border-gray-300 text-center rounded-md">1 +</div>
                    <p className="ml-[75px] sm:ml-48">$221.00</p>
                    <div className="ml-[75px] sm:ml-52 w-[20px] h-[20px]">
                        <TrashIcon className="w-[15px] hover:text-orange-400 cursor-pointer"/>
                    </div>
                   </div>
                   <div className="w-screen h-[50px]  my-2 flex justify-between px-1 items-center text-black text-[11px] border shadow-md mt-5">
                    <div className="flex gap-1">
                        <div className="w-[40px] h-[40px]">
                            <Image 
                            src={"/FigmaImages/img92.png"}
                            alt="picture"
                            width={100}
                            height={100}
                            />
                        </div>
                        <div>
                        <p className="">Fresh Lime</p>
                       <div className="flex gap-[1px]">
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       </div>
                        </div>
                        
                    </div>
                    <p className="ml-8 sm:ml-40">$25.00</p>
                    <div className="ml-[65px] sm:ml-48 w-[40px] border border-gray-300 text-center rounded-md">1 +</div>
                    <p className="ml-[75px] sm:ml-48">$521.00</p>
                    <div className="ml-[75px] sm:ml-52 w-[20px] h-[20px]">
                        <TrashIcon className="w-[15px] text-orange-500 fill-orange-400 hover:text-orange-400 hover:fill-white cursor-pointer"/>
                    </div>
                   </div>

                   <div className="w-screen h-[50px]  my-2 flex justify-between px-1 items-center text-black text-[11px] border shadow-md mt-5">
                    <div className="flex gap-1">
                        <div className="w-[40px] h-[40px]">
                            <Image 
                            src={"/FigmaImages/img54.png"}
                            alt="picture"
                            width={100}
                            height={100}
                            />
                        </div>
                        <div>
                        <p className="">Donut</p>
                       <div className="flex gap-[1px]">
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       </div>
                        </div>
                        
                    </div>
                    <p className="ml-8 sm:ml-40">$51.00</p>
                    <div className="ml-[65px] sm:ml-48 w-[40px] border border-gray-300 text-center rounded-md">1 +</div>
                    <p className="ml-[75px] sm:ml-48">$421.00</p>
                    <div className="ml-[75px] sm:ml-52 w-[20px] h-[20px]">
                        <TrashIcon className="w-[15px] hover:text-orange-400 cursor-pointer"/>
                    </div>
                   </div>

                   <div className="w-screen h-[50px] my-2 flex justify-between px-1 items-center text-black text-[11px] border shadow-md mt-5">
                    <div className="flex gap-1">
                        <div className="w-[40px] h-[40px]">
                            <Image 
                            src={"/FigmaImages/img56.png"}
                            alt="picture"
                            width={100}
                            height={100}
                            />
                        </div>
                        <div>
                        <p className="text-[9px]">Chocolate Muffin</p>
                       <div className="flex gap-[1px]">
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       </div>
                        </div>
                        
                    </div>
                    <p className="ml-5 sm:ml-[145px]">$45.00</p>
                    <div className="ml-[65px] sm:ml-48 w-[40px] border border-gray-300 text-center rounded-md">1 +</div>
                    <p className="ml-[75px] sm:ml-48">$521.00</p>
                    <div className="ml-[75px] sm:ml-[210px] w-[20px] h-[20px]">
                        <TrashIcon className="w-[15px] hover:text-orange-400 cursor-pointer"/>
                    </div>
                   </div>

                   <div className="w-screen h-[50px]  my-2 flex justify-between px-1 items-center text-black text-[11px] border shadow-md mt-5">
                    <div className="flex gap-1">
                        <div className="w-[40px] h-[40px]">
                            <Image 
                            src={"/FigmaImages/img25.png"}
                            alt="picture"
                            width={100}
                            height={100}
                            />
                        </div>
                        <div>
                        <p className="">Cheese Butter</p>
                       <div className="flex gap-[1px]">
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-orange-400 fill-orange-400"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       <Star  className="w-[10px] text-gray-300 fill-gray-300"/>
                       </div>
                        </div>
                        
                    </div>
                    <p className="ml-5 sm:ml-36">$15.00</p>
                    <div className="ml-[65px] sm:ml-48 w-[40px] border border-gray-300 text-center rounded-md">1 +</div>
                    <p className="ml-[75px] sm:ml-48">$325.00</p>
                    <div className="ml-[75px] sm:ml-52 w-[20px] h-[20px]">
                        <TrashIcon className="w-[15px] hover:text-orange-400 cursor-pointer"/>
                    </div>
                   </div>

                </div>
                <div className="w-screen h-[300px]  my-[90px] p-5 flex gap-4 sm:space-x-64">
                    <div className="w-[250px] h-[250px]  px-2 text-[8px] space-y-5 text-black">
                        <h1 className="text-[18px] sm:text-[25px] font-bold">Coupon Code</h1>
                        <div className="w-[220px] h-[150px] sm:w-[400px] border px-2 py-3 space-y-3 sm:space-y-6 shadow-sm rounded-sm">
                        <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quis recusandae vel deleniti alias corrupti eius repudiandae nesciunt ipsa necessitatibus, ex molestias numquam placeat optio consequatur enim asperiores! Rerum, facere.</p>
                        <div className="flex">
                        <input 
                         type="text" 
                         placeholder="Enter Here code" 
                         className="px-4 py-2 sm:p-3 border bg-transparent border-gray-400 focus:outline-none text-[7px] sm:text-[10px] rounded-tl-sm rounded-bl-sm sm:w-[320px]"
                        />
                        <button className="w-[35px] h-[28px] sm:w-[55px] sm:h-[40px] bg-orange-400 text-[7px] sm:text-[10px] rounded-tr-sm rounded-br-sm text-white hover:bg-black hover:text-orange-400">Apply</button>
                        </div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[250px]  px-2 space-y-6 text-black">
                        <h1 className="font-bold text-[18px] sm:text-[20px]">Total Bill</h1>
                        <div>
                        <div className="w-[220px] h-[79px] sm:w-[400px] border px-2 py-3 space-y-3 shadow-sm rounded-tr-sm rounded-tl-sm">
                            <p className="text-[13px] sm:text-[14px] font-bold">Cart Subtotal</p>
                            <p className="text-[8px] text-gray-400">Shipping Charge</p>
                        </div>
                        <div className="w-[220px] h-[50px] sm:w-[400px] border px-2 shadow-sm rounded-bl-sm rounded-br-sm content-center">
                            <p className="text-[13px] sm:text-[14px] font-bold ">Total Amount</p>
                        </div>
                        <div className="flex gap-2 w-[220px] h-[40px] sm:w-[400px] bg-orange-400 my-3 text-white text-[11px] content-center items-center justify-center">
                            <p>Proceed to Checkout</p>
                            <CheckSquareIcon className="w-3"/>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}