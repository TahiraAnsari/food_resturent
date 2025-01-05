import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { EyeIcon, Facebook, Github, Instagram, Linkedin, LucideShare, Search, Star, Twitter } from "lucide-react";
import Image from "next/image";
export default function BlogList() {
    return (
        <>
            <Header2 />
            <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Blog List</h1>
                    <div className="flex space-x-1 text-[10px] items-center leading-8">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">Blog</span>

                    </div>
                </div>
            </div>
            <div className="w-screen h-[2110px] bg-white px-5 py-10">
                <div className="flex gap-5 justify-center">
                    <div className="w-[280px] h-[1920px] sm:h-[2000px] sm:w-[500px] px-2 py-2 space-y-10 sm:px-6">
                        <div>
                            <div className="w-[250px] h-[200px] sm:w-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img79.png')" }}>
                                <div className="w-[30px] h-[30px] bg-orange-400 text-white hover:bg-black hover:text-orange-400 cursor-pointer relative left-3 top-3 rounded-md content-center font-bold">
                                    <p className="text-center text-[9.5px] leading-[12px]">14 Feb</p>
                                </div>

                            </div>
                            <div className="flex text-gray-500 text-[10px] gap-[5px] justify-start my-2">
                                <Image
                                    src={"/FigmaImages/img33.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Feb 14, 2022 /</p>
                                <Image
                                    src={"/FigmaImages/img32.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>3 /</p>
                                <Image
                                    src={"/FigmaImages/img31.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Admin</p>
                            </div>
                            <h1 className="text-[18px] sm:text-[25px] text-center text-black mt-8 font-bold">10 Reasons To Do A Digital Detox Challenge</h1>
                            <p className="text-[9px] sm:text-[11px] mt-[17px] text-gray-500">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            <div className="flex w-[100px] h-[40px] mt-3 cursor-pointer rounded-md border hover:bg-black border-orange-400 items-center justify-center gap-2">
                                <p className="text-[11px] text-orange-400">Read More</p>
                                <LucideShare className="w-[14px] text-orange-400" />
                            </div>

                        </div>

                        <div>
                            <div className="w-[250px] h-[200px] sm:w-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img80.png')" }}>
                                <div className="w-[30px] h-[30px] bg-orange-400 text-white hover:bg-black hover:text-orange-400 cursor-pointer relative left-3 top-3 rounded-md content-center font-bold">
                                    <p className="text-center text-[9.5px] leading-[12px]">14 Feb</p>
                                </div>

                            </div>
                            <div className="flex text-gray-500 text-[10px] gap-[5px] justify-start my-2">
                                <Image
                                    src={"/FigmaImages/img33.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Feb 14, 2022 /</p>
                                <Image
                                    src={"/FigmaImages/img32.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>3 /</p>
                                <Image
                                    src={"/FigmaImages/img31.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Admin</p>
                            </div>
                            <h1 className="text-[18px] sm:text-[25px] text-center text-black mt-8 font-bold">Traditional Soft Pretzels with Sweet Beer Cheese</h1>
                            <p className="text-[9px] sm:text-[11px] mt-[17px] text-gray-500">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            <div className="flex w-[100px] h-[40px] mt-3 cursor-pointer rounded-md border hover:bg-black border-orange-400 items-center justify-center gap-2">
                                <p className="text-[11px] text-orange-400">Read More</p>
                                <LucideShare className="w-[14px] text-orange-400" />
                            </div>
                        </div>

                        <div>
                            <div className="w-[250px] h-[200px] sm:w-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img51.png')" }}>
                                <div className="w-[30px] h-[30px] bg-orange-400 text-white hover:bg-black hover:text-orange-400 cursor-pointer relative left-3 top-3 rounded-md content-center font-bold">
                                    <p className="text-center text-[9.5px] leading-[12px]">14 Feb</p>
                                </div>

                            </div>
                            <div className="flex text-gray-500 text-[10px] gap-[5px] justify-start my-2">
                                <Image
                                    src={"/FigmaImages/img33.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Feb 14, 2022 /</p>
                                <Image
                                    src={"/FigmaImages/img32.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>3 /</p>
                                <Image
                                    src={"/FigmaImages/img31.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Admin</p>
                            </div>
                            <h1 className="text-[18px] sm:text-[25px] text-center text-black mt-8 font-bold">The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
                            <p className="text-[9px] sm:text-[11px] mt-[17px] text-gray-500">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            <div className="flex w-[100px] h-[40px] mt-3 cursor-pointer rounded-md border hover:bg-black border-orange-400 items-center justify-center gap-2">
                                <p className="text-[11px] text-orange-400">Read More</p>
                                <LucideShare className="w-[14px] text-orange-400" />
                            </div>
                        </div>

                        <div>
                            <div className="w-[250px] h-[200px] sm:w-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img34.png')" }}>
                                <div className="w-[30px] h-[30px] bg-orange-400 text-white hover:bg-black hover:text-orange-400 cursor-pointer relative left-3 top-3 rounded-md content-center font-bold">
                                    <p className="text-center text-[9.5px] leading-[12px]">14 Feb</p>
                                </div>

                            </div>
                            <div className="flex text-gray-500 text-[10px] gap-[5px] justify-start my-2">
                                <Image
                                    src={"/FigmaImages/img33.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Feb 14, 2022 /</p>
                                <Image
                                    src={"/FigmaImages/img32.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>3 /</p>
                                <Image
                                    src={"/FigmaImages/img31.png"}
                                    alt="Picture"
                                    width={15}
                                    height={15}
                                />
                                <p>Admin</p>
                            </div>
                            <h1 className="text-[18px] sm:text-[25px] text-center text-black mt-8 font-bold">My Favorite Easy Black Pizza Toast Recipe</h1>
                            <p className="text-[9px] sm:text-[11px] mt-[17px] text-gray-500">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                            <div className="flex w-[100px] h-[40px] mt-3 cursor-pointer rounded-md border hover:bg-black border-orange-400 items-center justify-center gap-2">
                                <p className="text-[11px] text-orange-400">Read More</p>
                                <LucideShare className="w-[14px] text-orange-400" />
                            </div>
                        </div>


                    </div>

                    <div className="w-[197px] h-[2000px] sm:w-[250px] px-1">
                        <div className="flex justify-center">
                            <input
                                type="text"
                                placeholder="Enter Your Keyword"
                                className="px-4 py-2 sm:p-3 border bg-transparent border-gray-400 focus:outline-none text-[7px] sm:text-[10px] rounded-tl-sm rounded-bl-sm w-[200px]"
                            />
                            <div className="w-[45px] h-[29px] sm:h-[45px] rounded-tr-sm rounded-br-sm bg-orange-400 justify-items-center content-center">
                                <Search className="w-[15px] sm:w-[20px]" />
                            </div>
                        </div>
                        <div className="w-[190px] h-[235px] sm:w-[235px] rounded-sm border shadow-sm my-8 px-2">
                            <div className="justify-items-center my-5 text-black">
                                <Image
                                    src={"/FigmaImages/img46.png"}
                                    alt="Picture"
                                    width={50}
                                    height={50}
                                />
                                <h1 className="font-bold">Prince Miyako</h1>
                                <p className="text-[11px] text-gray-400">Blogger/Photographer</p>
                                <div className="flex text-[9px] gap-1 items-center text-gray-400">
                                    <Star className="w-3 text-orange-400 fill-orange-400" />
                                    <Star className="w-3 text-orange-400 fill-orange-400" />
                                    <Star className="w-3 text-orange-400 fill-orange-400" />
                                    <Star className="w-3 text-orange-400 fill-orange-400" />
                                    <Star className="w-3 text-orange-400 fill-orange-400" />
                                    <p>(1 Review)</p>
                                </div>
                                <p className="text-[9px] mt-4">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.Veritatis distinctio, odio
                                    eligendi suscipit reprehenderit atque</p>
                                <div className="flex gap-1 mt-2">
                                    <Facebook className="w-[15px] fill-gray-400 text-gray-400" />
                                    <Instagram className="w-[15px] fill-gray-400 text-gray-400" />
                                    <Linkedin className="w-[15px] fill-gray-400 text-gray-400" />
                                    <Github className="w-[15px] fill-gray-400 text-gray-400" />
                                    <Twitter className="w-[15px] fill-gray-400 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div className="w-[190px] h-[335px] sm:w-[235px] rounded-sm border shadow-sm my-8 px-2">
                            <h1 className="px-2 py-3 text-black font-bold">Recent Post</h1>
                            <div className="space-y-2">
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[100px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img50.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="text-[10px] space-y-1">
                                        <p className="text-gray-400">June 22, 2020</p>
                                        <p className="text-black">Lorem ipsum dolor sit cing
                                            elit, sed do.</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[100px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img49.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="text-[10px] space-y-1">
                                        <p className="text-gray-400">June 22, 2020</p>
                                        <p className="text-black">Lorem ipsum dolor sit cing
                                            elit, sed do.</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[100px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img48.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="text-[10px] space-y-1">
                                        <p className="text-gray-400">June 22, 2020</p>
                                        <p className="text-black">Lorem ipsum dolor sit cing
                                            elit, sed do.</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[100px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img47.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="text-[10px] space-y-1">
                                        <p className="text-gray-400">June 22, 2020</p>
                                        <p className="text-black">Lorem ipsum dolor sit cing
                                            elit, sed do.</p>
                                    </div>
                                </div>

                            </div>

                            

                        </div>
                        <div className="w-[190px] h-[399px] sm:w-[235px] rounded-sm border shadow-sm my-8 px-2">
                            <h1 className="px-2 py-3 text-black font-bold">Filter By Menu</h1>
                            <div className="space-y-2">
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[50px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img45.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="w-[100px] justify-between text-[11px] space-y-1 flex items-center">
                                        <p className="text-black  font-bold">Chicken Fry</p>
                                        <p className="text-black text-[10px]">26</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[50px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img53.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="w-[100px] justify-between text-[11px] space-y-1 flex items-center">
                                        <p className="text-black  font-bold">Burger Food</p>
                                        <p className="text-black text-[10px]">46</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[50px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img80.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="w-[100px] justify-between text-[11px] space-y-1 flex items-center">
                                        <p className="text-black  font-bold">Pizza</p>
                                        <p className="text-black text-[10px]">16</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[50px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img54.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="w-[100px] justify-between text-[11px] space-y-1 flex items-center">
                                        <p className="text-black  font-bold">Donut</p>
                                        <p className="text-black text-[10px]">10</p>
                                    </div>
                                </div>
                                <div className="w-[170px] h-[60px] sm:w-[220px] border p-1 flex gap-2">
                                    <div className="w-[50px] h-[50px]">
                                        <Image
                                            src={"/FigmaImages/img41.png"}
                                            alt="picture"
                                            width={100}
                                            height={100}
                                            className="h-[50px]"
                                        />
                                    </div>
                                    <div className="w-[100px] justify-between text-[11px] space-y-1 flex items-center">
                                        <p className="text-black  font-bold">Sandwiche</p>
                                        <p className="text-black text-[10px]">17</p>
                                    </div>
                                </div>

                            </div>

                            

                        </div>
                        <div className="w-[190px] h-[220px] sm:w-[235px] sm:h-[225px] rounded-sm border shadow-sm my-8 px-2 py-3 space-y-3">
                            <h1 className="text-black font-bold">Popular Tags</h1>
                            <div className="flex gap-2 text-black">
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Sandwich</div>
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Tikka</div>
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">BBQ</div>
                            </div>
                            <div className="flex gap-2 text-black">
                                <div className="w-[70px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Restaurant</div>
                                <div className="w-[100px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Chicken Sharma</div>
                            </div>
                            <div className="flex gap-2 text-black">
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Health</div>
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">FastFood</div>
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Food</div>
                            </div>
                            <div className="flex gap-2 text-black">
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Pizza</div>
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Burger</div>
                                <div className="w-[60px] h-[25px] sm:w-[100px] cursor-pointer hover:border-orange-400 hover:text-orange-400 px-2 border text-[10px] content-center rounded-sm text-center">Chicken</div>
                            </div>

                        </div>
                        <div className="w-[190px] h-[340px] sm:w-[235px] rounded-sm border shadow-sm my-8 px-2 py-3 space-y-3">
                        <h1 className="text-black font-bold">Photo Gallery</h1>
                        <div className="flex gap-5 justify-center ">
                            <div className="w-[80px] h-[80px]">
                                <Image 
                                src={"/FigmaImages/img37.png"}
                                alt="Picture"
                                width={100}
                                height={100}
                                className="h-[80px]"
                                />
                            </div>
                            <div className="w-[80px] h-[80px] opacity-65 justify-items-center content-center" style={{ backgroundImage: "url('/FigmaImages/img36.png')" }}>
                                <EyeIcon className="text-black"/>
                            </div>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="w-[80px] h-[80px]">
                                <Image 
                                src={"/FigmaImages/img35.png"}
                                alt="Picture"
                                width={100}
                                height={100}
                                className="h-[80px]"
                                />
                            </div>
                            <div className="w-[80px] h-[80px]">
                                <Image 
                                src={"/FigmaImages/img42.png"}
                                alt="Picture"
                                width={100}
                                height={100}
                                className="h-[80px]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="w-[80px] h-[80px]">
                                <Image 
                                src={"/FigmaImages/img43.png"}
                                alt="Picture"
                                width={100}
                                height={100}
                                className="h-[80px]"
                                />
                            </div>
                            <div className="w-[80px] h-[80px]">
                                <Image 
                                src={"/FigmaImages/img47.png"}
                                alt="Picture"
                                width={100}
                                height={100}
                                className="h-[80px]"
                                />
                            </div>
                        </div>
                        </div>
                        <div className="w-[190px] h-[100px] sm:w-[235px] rounded-sm border shadow-sm my-8 px-2 py-3 space-y-3">
                        <h1 className="text-black font-bold">Follow Us</h1>
                        <div className="flex justify-center gap-1">
                            <Instagram className="fill-black text-slate-700"/>
                            <Facebook className="fill-black text-slate-700"/>
                            <Github className="fill-black text-slate-700"/>
                            <Twitter className="fill-black text-slate-700"/>
                            <Linkedin className="fill-black text-slate-700"/>

                        </div>
                        </div>
                    </div>
                </div>

                <div className="flex text-orange-400 gap-1 justify-center items-center">
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