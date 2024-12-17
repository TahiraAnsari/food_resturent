import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { Box, RectangleEllipsis, RectangleHorizontal, RectangleVerticalIcon } from "lucide-react";
import Image from "next/image";
export default function ShopList(){
    return(
        <>
       <Header2/>
       <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text */}
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

            <div className="bg-white w-full h-[2600px] sm:h-[1300px] justify-items-center">
                <div className="w-full sm:w-[800px] h-[800px] py-5">
                    <div className=" flex justify-between sm:gap-10 text-black">
                    <div className="flex space-x-1 sm:space-x-3">
                            <p className="text-[11px] sm:text-[15px] content-center">Sort by: </p>
                            <div className="bg-white w-[140px] sm:w-[150px] sm:h-[30px] p-1 text-gray-500 text-[11px] content-center border border-black rounded-sm flex justify-between items-center">
                                <p className="text-[8px] sm:text-[11px]">Newest</p>
                                <Image 
                                src={"/FigmaImages/downArrow.png"}
                                alt="Image"
                                width={19}
                                height={15}
                                className="w-[15px]"
                                />
                            </div>
                        </div>

                        <div className=" flex space-x-1 sm:space-x-3">
                            <p className="text-[11px] sm:text-[15px] content-center">Show: </p>
                            <div className="bg-white w-[140px] sm:w-[150px] sm:h-[30px] p-1 border-black text-gray-500 text-[11px] content-center border rounded-sm flex justify-between items-center">
                                <p className="text-[8px] sm:text-[11px]">Default</p>
                                <Image 
                                src={"/FigmaImages/downArrow.png"}
                                alt="Image"
                                width={19}
                                height={15}
                                className="w-[15px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="w-[220px] h-[2500px] sm:w-[550px] sm:h-[1100px] space-y-5">
                            <div className="flex flex-col gap-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img98.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img100.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img101.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img112.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img111.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img71.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img57.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img64.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img80.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img65.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img25.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img26.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 sm:flex-row justify-items-center content-center items-center">
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] content-center  items-center justify-items-center">
                                    <Image 
                                    src={"/FigmaImages/img74.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img99.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                                <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
                                <Image 
                                    src={"/FigmaImages/img81.png"}
                                    alt="Image"
                                    width={100}
                                    height={100}
                                    className="w-screen h-[200px]"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-[150px] h-[1000px] sm:w-[200px] sm:h-[1100px] bg-blue-300 mt-20"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}