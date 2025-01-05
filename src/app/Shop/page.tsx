import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { ArrowRightCircle, Search, StarIcon } from "lucide-react";
import Image from "next/image";
export default function ShopList() {
    return (
        <>
            <Header2 />
            <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Our Menu</h1>
                    <div className="flex space-x-1 text-[10px] items-center">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">Shop</span>

                    </div>
                </div>
            </div>

            <div className="bg-white w-full h-[4100px] sm:h-[1700px] justify-items-center">
                <div className="w-full sm:w-[900px] h-[800px] p-2">
                    <div className=" flex justify-between sm:gap-10 text-black">
                        <div className="flex space-x-1 sm:space-x-3">
                            <p className="text-[11px] sm:text-[15px] content-center">Sort by: </p>
                            <div className="bg-white w-[140px] sm:w-[150px] sm:h-[30px] p-1 text-gray-500 text-[11px] content-center border-1 border rounded-sm flex justify-between items-center">
                                <p className="text-[8px] sm:text-[11px]">Newest</p>
                                <Image
                                    src={"/FigmaImages/downArrow.png"}
                                    alt="Image"
                                    width={15}
                                    height={15}
                                    className="w-[11px]"
                                />
                            </div>
                        </div>

                        <div className=" flex space-x-1 sm:space-x-3">
                            <p className="text-[11px] sm:text-[15px] content-center">Show: </p>
                            <div className="bg-white w-[140px] sm:w-[150px] sm:h-[30px] p-1 text-gray-500 border-1  text-[11px] content-center border rounded-sm flex justify-between items-center">
                                <p className="text-[8px] sm:text-[11px]">Default</p>
                                <Image
                                    src={"/FigmaImages/downArrow.png"}
                                    alt="Image"
                                    width={19}
                                    height={15}
                                    className="w-[11px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="w-[220px] h-[3220px] sm:w-[550px] sm:h-[1300px]">
                            <div className="flex flex-col gap-28 pb-11 sm:gap-2 my-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                    <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img98.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Fresh Lime</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$38.00</p>
                                        <span className="text-gray-400 line-through">$45.00</span>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img100.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Chocolate Muffin</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$28.00</p>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img101.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Burger</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$21.00</p>
                                        <span className="text-gray-400 line-through">$45.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-28 pb-11 sm:gap-2 mt-16 my-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img112.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">CupCake</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$15.00</p>
                                        <span className="text-gray-400 line-through">$45.00</span>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img111.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Country Burger</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$45.00</p>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img71.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Drink</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$23.00</p>
                                        <span className="text-gray-400 line-through">$45.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-28 pb-11 sm:gap-2 mt-16 my-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img57.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Pizza</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$43.00</p>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img64.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Cheese Butter</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$10.00</p>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img80.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Sandwiches</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$25.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-28 pb-11 sm:gap-2 mt-16 my-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img65.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Chicken Chup</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$12.00</p>                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img25.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Fresh Lime</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$38.00</p>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img26.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Chicken Drum Stick</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$33.00</p>
                                        <span className="text-gray-400 line-through">$45.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-28 pb-11 sm:gap-2 mt-16 my-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img74.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Russian Salad</p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$18.00</p>
                                    </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img99.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                    <p className="text-black font-bold text-[12px] mt-3 leading-3">Yummy Donut </p>
                                    <div className="flex gap-4 text-[10px]">
                                        <p className="text-orange-400 ">$20.00</p>                                    
                                        </div>
                                </div>
                                <div className="w-[200px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <a href="/Shop/shop-details">
                                    <Image
                                        src={"/FigmaImages/img81.png"}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        className="w-screen h-[200px] cursor-pointer"
                                    />
                                    </a>
                                     <p className="text-black font-bold text-[12px] mt-3 leading-3">Beef Burger</p>
                                    <div className="flex gap-4 text-[10px]">
                                    <p className="text-orange-400 ">$38.00</p>
                                    <span className="text-gray-400 line-through">$45.00</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-[150px] h-[1500px] sm:w-[200px] sm:h-[1100px] mt-11">
                            <div className="flex">
                                <div className="w-[110px] h-[30px] shadow-sm text-center content-center text-[7px] text-gray-500 border-1 border">Search Product</div>
                                <div className="bg-orange-500 w-[30px] h-[30px] shadow-sm content-center justify-items-center">
                                    <Search
                                        className="w-[15px] h-[15px]"
                                    />
                                </div>
                            </div>
                            <h1 className="text-black font-bold my-3 text-[15px]">Category</h1>
                            <div className="space-y-2">
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Sandwiches</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Burger</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Chicken Chup</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Pizza</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Drink</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Thi</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Non Veg</h1>
                                </div>
                                <div className="flex items-center gap-x-2 text-black">
                                    <div className="w-[12px] h-[12px] border-[1px] border-gray-400"></div>
                                    <h1 className="text-[10px]">Uncategorized</h1>
                                </div>
                            </div>
                            <div className="relative w-[150px] h-[190px] mt-10 bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img69.png')" }}>
                                <div className="text-[12px] p-5">
                                    <p>Perfect Taste</p>
                                    <p>Classic Restaurant</p>
                                    <p className="text-orange-400 mt-3">45.00$</p>
                                </div>
                                <div className="flex relative top-12 text-[11px] px-5 gap-x-2">
                                    <p>Shop Now</p>
                                    <ArrowRightCircle
                                        className="w-4 h-4"
                                    />
                                </div>
                            </div>
                            <div className="my-4 space-y-2">
                                <h1 className="text-black text-[14px] font-bold">Filter By Price</h1>
                                <div className="flex gap-x-[2px]">
                                    <div className="w-1 h-1 rounded-lg bg-orange-400"></div>
                                    <div className="w-[140px] h-1 rounded-lg bg-orange-400"></div>
                                    <div className="w-1 h-1 rounded-lg bg-orange-400"></div>
                                </div>
                                <div className="flex text-[9px] justify-between text-gray-400">
                                    <p>From $0 to $8000</p>
                                    <p>Filter</p>
                                </div>
                            </div>
                            <div className="text-[12px]">
                                <h1 className="text-black text-[15px] font-bold">Latest Products</h1>
                                <div className="mt-5 flex  items-center gap-x-2">
                                    <div className="w-[75px] h-[75px]">
                                        <Image
                                            src={"/FigmaImages/img68.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-black">Pizza</p>
                                        <div className="flex ">
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />


                                        </div>
                                        <p className="text-black">$35.00</p>

                                    </div>

                                </div>
                                <div className="mt-5 flex  items-center gap-x-2">
                                    <div className="w-[75px] h-[75px]">
                                        <Image
                                            src={"/FigmaImages/img68.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-black">Cupchake</p>
                                        <div className="flex ">
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />


                                        </div>
                                        <p className="text-black">$35.00</p>

                                    </div>

                                </div>
                                <div className="mt-5 flex  items-center gap-x-2">
                                    <div className="w-[75px] h-[75px]">
                                        <Image
                                            src={"/FigmaImages/img68.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-black">Cookies</p>
                                        <div className="flex ">
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />


                                        </div>
                                        <p className="text-black">$35.00</p>

                                    </div>

                                </div>
                                <div className="mt-5 flex  items-center gap-x-2">
                                    <div className="w-[75px] h-[75px]">
                                        <Image
                                            src={"/FigmaImages/img68.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="bg-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-black">Burger</p>
                                        <div className="flex ">
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} color="orange" fill="orange" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />
                                            <StarIcon width={12} className="fill-slate-300 text-gray-300" />


                                        </div>
                                        <p className="text-black">$35.00</p>

                                    </div>

                                </div>


                            </div>

                            <div>
                                <h1 className="text-black text-[15px] font-bold mt-5">Products Tags</h1>
                                <div className="my-2 text-gray-400">
                                    <ul className="flex text-[11px] gap-x-4">
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Services</li>
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Our Menu</li>
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Pizza</li>
                                    </ul>
                                </div>
                                <div className="my-2 text-gray-400">
                                    <ul className="flex text-[11px] gap-x-4">
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Cupcake</li>
                                        <li className="text-orange-400 underline cursor-pointer underline-offset-4">Burger</li>
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Cookies</li>
                                    </ul>
                                </div>
                                <div className="my-2 text-gray-400">
                                    <ul className="flex text-[11px] gap-x-4">
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Our Shop</li>
                                        <li className="hover:text-orange-400 hover:underline cursor-pointer hover:underline-offset-4">Tandoori Chicken</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="flex text-orange-400 gap-1 relative top-[3200px] sm:top-[800px] items-center">
                <Image
                    src={"/FigmaImages/img30.png"}
                    alt="Picture"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px] cursor-pointer"
                    />
                    <div className="w-[40px] h-[40px] rounded-md hover:bg-orange-400 hover:text-white cursor-pointer border-1 text-black text-center content-center">1</div>
                    <div className="w-[40px] h-[40px] rounded-md bg-orange-400 text-white text-center content-center cursor-pointer border1 hover:bg-white hover:text-black">2</div>
                    <div className="w-[40px] h-[40px] rounded-md hover:bg-orange-400 hover:text-white cursor-pointer border-1 text-black text-center content-center">3</div>
                    <Image
                    src={"/FigmaImages/img29.png"}
                    alt="Picture"
                    width={100}
                    height={100}
                    className="w-[50px] h-[50px] cursor-pointer"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}