import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
export default function AboutUs() {
    return (
        <>
            <Header2 />
            <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">About Us</h1>
                    <div className="flex space-x-1 text-[10px] items-center leading-8">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">About</span>

                    </div>
                </div>
            </div>
            <div className="w-screen h-[3500px] bg-white">
                <div className="text-black space-y-3 flex flex-col sm:flex-row sm:items-center pt-12">
                    <div className="flex gap-5 w-[500px] h-[550px] p-2">
                        <div className="w-[220px] h-[400px]">
                            <Image
                                src={"/FigmaImages/img79.png"}
                                alt="picture"
                                width={300}
                                height={100}
                                className="bg-cover bg-center h-[370px] sm:h-[400px]  rounded-sm"
                            />
                        </div>
                        <div>
                            <div className="w-[200px] h-[200px] mt-10">
                                <Image
                                    src={"/FigmaImages/img26.png"}
                                    alt="picture"
                                    width={300}
                                    height={100}
                                    className="bg-cover bg-center h-[170px] sm:h-[200px]  rounded-sm"
                                />
                            </div>
                            <div className="w-[200px] h-[270px] sm:mt-3">
                                <Image
                                    src={"/FigmaImages/img58.png"}
                                    alt="picture"
                                    width={300}
                                    height={100}
                                    className="bg-cover bg-center h-[240px] sm:h-[280px] rounded-sm"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="h-[300px] space-y-4 px-5 sm:px-12 pt-5">
                        <h1 className="text-[#FF9F0D] font-greatVibes text-[18px] sm:text-[20px]">About us <span>____</span></h1>
                        <h1 className="text-[35px] sm:text-[45px] leading-[50px] font-bold">Food is an important
                            part Of a balanced Diet</h1>
                        <p className="text-gray-500 text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        <div className="flex gap-5">
                            <Button variant={"default"} className="bg-[#FF9F0D] w-[150px]">Show more</Button>
                            <div className="flex gap-2 items-center">
                                <Image
                                    src={"/FigmaImages/img70.png"}
                                    alt="picture"
                                    width={35}
                                    height={20}
                                />
                                <p className="font-bold">Watch video</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-black space-y-5 mt-14 sm:mt-28">
                    <h1 className="text-center text-[30px] sm:text-[40px] font-bold">Why Choose us</h1>
                    <p className="text-center text-[11px] sm:text-[13px] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.</p>
                    <div className="w-screen h-[150px] sm:h-[250px] bg-center bg-cover" style={{ backgroundImage: "url('/FigmaImages/bg.png')" }}></div>
                    <div className="w-screen h-[250px] flex justify-evenly items-center">
                        <div className="w-[130px] h-[140px] sm:w-[300px] sm:h-[230px] bg-white justify-items-center text-center space-y-1">
                            <Image
                                src={"/FigmaImages/img19.png"}
                                alt="picture"
                                width={50}
                                height={50}
                                className="sm:w-[90px]"
                            />
                            <h1 className="text-[15px] sm:text-[20px] font-bold">Best Chef</h1>
                            <p className="text-[6px] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                        <div className="w-[130px] h-[140px] sm:w-[300px] sm:h-[230px] bg-white justify-items-center text-center space-y-1">
                            <Image
                                src={"/FigmaImages/img18.png"}
                                alt="picture"
                                width={50}
                                height={50}
                                className="sm:w-[90px]"
                            />
                            <h1 className="text-[15px] sm:text-[20px] font-bold">120 Item food</h1>
                            <p className="text-[6px] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                        <div className="w-[150px] h-[140px] sm:w-[300px] sm:h-[230px] bg-white justify-items-center text-center space-y-1">
                            <Image
                                src={"/FigmaImages/img17.png"}
                                alt="picture"
                                width={50}
                                height={50}
                                className="sm:w-[90px]"
                            />
                            <h1 className="text-[15px] sm:text-[20px] font-bold">Clean Enviornment</h1>
                            <p className="text-[6px] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-screen h-[200px] sm:h-[250px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img25.png')" }}>

                    <div className="absolute inset-0 bg-[#FF9F0D] opacity-60"></div>

                    <div className="relative z-10 text-white flex-col justify-items-center h-full p-5 sm:pt-10">
                        <h1 className="text-[17px] sm:text-[25px] font-bold">Team Member</h1>
                        <div className="text-center text-[9px] sm:text-[11px] ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p> Varius sed pharetra dictum neque massa congue</p>
                            <div className="w-screen h-[180px] sm:h-[250px] relative top-14 flex gap-5 sm:gap-10 justify-center items-center">
                                <div className="sm:w-[200px] sm:h-[250px]">
                                    <div className="w-[100px] sm:w-[200px] sm:h-[200px] h-[140px] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/FigmaImages/img16.png')" }}></div>
                                    <p className="text-black text-[10px] sm:text-[13px] font-bold mt-2">Mark Henry</p>
                                    <p className="text-black">Owner</p>
                                </div>
                                <div className="sm:w-[200px] sm:h-[250px]">
                                    <div className="w-[100px] h-[140px] sm:w-[200px] sm:h-[200px] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/FigmaImages/img16.png')" }}></div>
                                    <p className="text-black text-[10px] sm:text-[13px] font-bold mt-2">Lucky Helen</p>
                                    <p className="text-black">Chef</p>
                                </div>
                                <div className="sm:w-[200px] sm:h-[250px]">
                                    <div className="w-[100px] h-[140px] sm:w-[200px] sm:h-[200px] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/FigmaImages/img16.png')" }}></div>
                                    <p className="text-black text-[10px] sm:text-[13px] font-bold mt-2">Moon Henry</p>
                                    <p className="text-black">Founder</p>
                                </div>
                                <div className="sm:w-[200px] sm:h-[250px]">
                                    <div className="w-[100px] h-[140px] sm:w-[200px] sm:h-[200px] bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/FigmaImages/img16.png')" }}></div>
                                    <p className="text-black text-[10px] sm:text-[13px] font-bold mt-2">Tom Monrow</p>
                                    <p className="text-black">Specialist</p>
                                </div>
                                <div>

                                </div>


                            </div>
                        </div>

                    </div>
                    <div>
                    </div>
                </div>
                <div className="mt-44 w-full px-5 sm:px-16 py-5 sm:py-24 text-white">
                    <h1 className="text-[#FF9F0D] font-greatVibes text-[20px] sm:text-[24px]">Testimonials</h1>
                    <h1 className="text-[25px] sm:text-[40px] font-bold text-black my-2 sm:my-6">What our client are saying</h1>

                    <div className="flex justify-center items-center mt-32">
                        <div className="relative w-full max-w-sm sm:max-w-md h-auto bg-white rounded-sm shadow-md p-6">

                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                <Image
                                    src="/FigmaImages/img83.png"
                                    alt="Profile"
                                    width={100}
                                    height={100}
                                    className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full shadow-md"
                                />
                            </div>

                            <div className="text-center mt-12 sm:mt-14">
                                <h1 className="text-[#FF9F0D] text-[50px] sm:text-[80px] leading-[50px] sm:leading-[80px]">,,</h1>
                                <p className="text-gray-500 text-[10px] sm:text-[12px] mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at dicta possimus cum libero magni ducimus unde impedit qui. Ratione deleniti dicta voluptatem modi quos veniam facilis quae fugit ipsum?
                                </p>
                                <div className="flex justify-center items-center mt-2 mb-2">
                                    <Star className="fill-[#FF9F0D] w-4 sm:w-9" />
                                    <Star className="fill-[#FF9F0D] w-4 sm:w-9" />
                                    <Star className="fill-[#FF9F0D] w-4 sm:w-9" />
                                    <Star className="fill-[#FF9F0D] w-4 sm:w-9" />
                                    <Star className="fill-gray-500 w-4 sm:w-9" />
                                </div>
                                <h1 className="text-black font-bold text-[16px] sm:text-[20px]">Alamin Hasan</h1>
                                <p className="text-gray-500 text-[8px] sm:text-[10px]">Food Specialist</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-1 mt-5">
                        <div className="bg-[#FF9F0D] w-2 h-2 rounded-2xl"></div>
                        <div className="bg-[#FF9F0D] w-2 h-2 rounded-2xl opacity-65"></div>
                        <div className="bg-[#FF9F0D] w-2 h-2 rounded-2xl opacity-65"></div>
                        <div className="bg-[#FF9F0D] w-2 h-2 rounded-2xl opacity-65"></div>
                    </div>
                </div>
                <div className="relative w-[100px] h-[100px]">
                </div>
               <div className="relative w-screen  justify-items-center">
               <Image
                src={"/FigmaImages/plant.png"}
                alt="picture"
                width={100}
                height={100}
                className=" object-cover"
                />
                <div className="absolute inset-0 items-center justify-center text-black space-y-5">
                    <div className="text-center">
                    <p className="text-[30px] sm:text-[36px] font-bold">Our Food Menu</p>
                    <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-[10px] text-gray-400">Varius sed pharetra dictum neque massa congue</p>
                    </div>
                    <div className="w-screen h-[1111px] sm:h-[650px] p-3 justify-items-center">
                        <div className="flex justify-center gap-8">
                            <p className="text-[13px] sm:text-[16px] cursor-pointer  text-[#FF9F0D] underline underline-offset-8">Breakfast</p>
                            <p className="text-[13px] sm:text-[16px] cursor-pointer text-gray-400 hover:underline hover:underline-offset-8 hover:text-[#FF9F0D]">Lunch</p>
                            <p className="text-[13px] sm:text-[16px] cursor-pointer text-gray-400 hover:underline hover:underline-offset-8 hover:text-[#FF9F0D]">Dinner</p>
                            <p className="text-[13px] sm:text-[16px] cursor-pointer text-gray-400 hover:underline hover:underline-offset-8 hover:text-[#FF9F0D]">Dessert</p>
                            <p className="text-[13px] sm:text-[16px] cursor-pointer text-gray-400 hover:underline hover:underline-offset-8 hover:text-[#FF9F0D]">Drink</p>
                            <p className="text-[13px] sm:text-[16px] cursor-pointer text-gray-400 hover:underline hover:underline-offset-8 hover:text-[#FF9F0D]">Snack</p>
                        </div>
                        <div className="my-16 flex flex-col sm:flex-row sm:justify-center gap-28 sm:gap-28 items-center">
                            <div className="w-[400px] sm:w-[500px] h-[450px] p-3 space-y-10">
                                <div className="space-y-1">
                                    <p className="text-[20px] text-[#FF9F0D] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                            </div>
                            <div className="w-[400px] sm:w-[500px] h-[450px] p-3 space-y-10">
                            <div className="flex gap-5">
                                <p className="text-[20px] font-bold text-[#FF9F0D]">32$</p>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[20px] font-bold text-[#FF9F0D]">32$</p>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[20px] font-bold text-[#FF9F0D]">32$</p>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <p className="text-[20px] font-bold text-[#FF9F0D]">32$</p>
                                <div className="space-y-1">
                                    <p className="text-[20px] font-bold">Alder Grilled Chinook Salmon</p>
                                    <p className="text-[11px] text-gray-400">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[11px] text-gray-400">560 CAL</p>
                                </div>
                            </div>
                                
                            </div>
                            
                        </div>
                        <Button variant={"default"} className="w-[200px] h-[50px]">View menu</Button>
                    </div>
                </div>

               </div>

            </div>

            <Footer />

        </>
    );
}