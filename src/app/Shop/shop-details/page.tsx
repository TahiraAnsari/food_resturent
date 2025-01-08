import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { FacebookIcon, GitCompare, GithubIcon, Heart, LinkedinIcon, MoveLeftIcon, MoveRightIcon, ShoppingBagIcon, Star, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";

export default function ShopDetails() {
    return (
        <>
            <Header2 />
            <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Shop Details</h1>
                    <div className="flex space-x-1 text-[10px] items-center leading-8">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">Shop details</span>

                    </div>
                </div>
            </div>
            <div className="w-screen bg-white h-[1800px] sm:h-[1300px] px-6 py-16 space-y-10 text-black">
                <div className="flex flex-col sm:flex-row gap-10">
                    <div className="flex gap-3">
                        <div className="space-y-3">
                            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                                <Image
                                    src={"/FigmaImages/img62.png"}
                                    alt="Picture"
                                    width={100}
                                    height={100}
                                    className="bg-cover bg-center h-full"
                                />
                            </div>
                            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                                <Image
                                    src={"/FigmaImages/img61.png"}
                                    alt="Picture"
                                    width={100}
                                    height={100}
                                    className="bg-cover bg-center h-full"
                                />
                            </div>
                            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                                <Image
                                    src={"/FigmaImages/img60.png"}
                                    alt="Picture"
                                    width={100}
                                    height={100}
                                    className="bg-cover bg-center h-full"
                                />
                            </div>
                            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
                                <Image
                                    src={"/FigmaImages/img59.png"}
                                    alt="Picture"
                                    width={100}
                                    height={100}
                                    className="bg-cover bg-center h-full"
                                />
                            </div>
                        </div>
                        <div className="w-[400px] h-[354px] sm:h-[439px]">
                            <Image
                                src={"/FigmaImages/img63.png"}
                                alt="Picture"
                                width={100}
                                height={100}
                                className="bg-cover bg-center h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="w-[450px] h-[500px] sm:h-[439px] p-2 ">
                        <div className="flex justify-between">
                            <div className="w-[65px] h-[25px] rounded-sm bg-orange-400 text-white text-center text-[11px] content-center">In stock</div>
                            <div className="flex gap-4 text-[10px] text-gray-400">
                                <div className="flex gap-1 items-center">
                                    <MoveLeftIcon className="w-[11px]" />
                                    <p>Prev</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <p>Next</p>
                                    <MoveRightIcon className="w-[11px]" />
                                </div>

                            </div>

                        </div>
                        <div className="">
                            <h1 className="text-[35px] mt-5 font-bold">Yummy Chicken Chup</h1>
                            <p className="mt-5 text-[11px] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                        </div>
                        <hr className="mt-3" />
                        <h1 className="mt-5 text-[25px] font-bold">54.00$</h1>
                        <div className="flex">
                            <div className="flex gap-1">
                                <Star className="w-[12px] text-orange-400 fill-orange-400" />
                                <Star className="w-[12px] text-orange-400 fill-orange-400" />
                                <Star className="w-[12px] text-orange-400 fill-orange-400" />
                                <Star className="w-[12px] text-orange-400 fill-orange-400" />
                                <Star className="w-[12px] text-orange-400 fill-orange-400" />
                            </div>
                            <p className="text-[10px] content-center mx-2 text-gray-400">|</p>
                            <p className="text-[11px] content-center  text-gray-400">5.0 Rating</p>
                            <p className="text-[10px] content-center mx-2 text-gray-400">|</p>
                            <p className="text-[11px] content-center  text-gray-400">22 Review</p>
                        </div>
                        <p className="text-[13px] my-3">Dictum/cursus/Risus</p>
                        <div className="flex gap-5">
                            <div className="flex">
                                <div className="w-[55px] h-[40px] border-[1px] border-gray-400 content-center text-center text-[20px] hover:text-orange-400 cursor-pointer">-</div>
                                <div className="w-[55px] h-[40px] border-[1px] border-gray-400 content-center text-center text-[18px] font-bold">1</div>
                                <div className="w-[55px] h-[40px] border-[1px] border-gray-400 content-center text-center text-[20px] hover:text-orange-400 cursor-pointer">+</div>
                            </div>
                            <div className="w-[120px] p-2 h-[40px] bg-orange-400 flex text-white text-[13px] gap-2 items-center justify-center rounded-sm hover:bg-black  cursor-pointer">
                                <ShoppingBagIcon className="w-[15px]" />
                                <p>Add to cart</p>
                            </div>

                        </div>
                        <hr className="my-3" />
                        <div className="flex gap-4 text-[13px]">
                            <div className="flex gap-1 text-gray-500 items-center">
                                <Heart className="w-[15px]" />
                                <p>Add to Wishlist</p>
                            </div>
                            <div className="flex gap-1 text-gray-500 items-center">
                                <GitCompare className="w-[15px]" />
                                <p>Compare</p>
                            </div>
                        </div>
                        <div className="flex text-[13px] text-gray-500 gap-1">
                            <p>Category:</p>
                            <p>Pizza</p>
                        </div>
                        <div className="flex text-[13px] text-gray-500 gap-1">
                            <p>Tag:</p>
                            <p>Our Shop</p>
                        </div>
                        <div className="flex text-[13px] gap-1 content-center items-center text-gray-500">
                            <p>Share:</p>
                            <div className="flex w-[120px] gap-2">
                                <FacebookIcon className="fill-gray-500" />
                                <YoutubeIcon className="fill-gray-500" />
                                <LinkedinIcon className="fill-gray-500" />
                                <GithubIcon className="fill-gray-500" />
                                <TwitterIcon className="fill-gray-500" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-full h-[500px] px-5 py-[30px] sm:h-[350px]">
                    <div className="flex gap-2 text-black">
                        <div className="w-[100px] h-[35px] bg-orange-400 text-white text-[13px] gap-2 text-center content-center rounded-sm hover:bg-black  cursor-pointer">
                            <p>Description</p>
                        </div>
                        <div className="w-[120px] p-2 h-[40px] text-[13px] gap-2 text-center content-center rounded-sm hover:text-orange-400  cursor-pointer">
                            <p>Reviews (24)</p>
                        </div>
                    </div>
                   <p className="text-[11px] my-5 text-gray-500">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
                   <p className="text-[11px] my-5 text-gray-500">Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
                   <h1>Key Benefits</h1>
                   <ul className="list-disc pl-5 text-[11px] text-gray-500 mt-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                    <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
                    <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                    <li>Mauris eget diam magna, in blandit turpis.</li>
                   
                   </ul>
                </div>

                <div className="text-black">
                    <div className="flex justify-between items-center">
                    <h1 className="font-bold text-[19px] my-4">Similar Products</h1>
                    <div className="flex gap-1">
                    <div className="w-[30px] h-[30px] rounded-3xl content-center justify-items-center hover:bg-orange-300 cursor-pointer">
                        <MoveLeftIcon className="w-[12px] text-black hover:text-white"/>
                    </div>
                        <div className="w-[30px] h-[30px] rounded-3xl bg-orange-400 content-center justify-items-center cursor-pointer hover:bg-white">
                            <MoveRightIcon className="w-[12px] text-white hover:text-black"/>
                        </div>
                    </div>
                    </div>
                    <div className="flex gap-5 justify-center ">
                        <div className="w-[100px] h-[100px] sm:w-[220px] sm:h-[200px]">
                            <Image 
                            src={"/FigmaImages/img58.png"}
                            alt="Picture"
                            width={100}
                            height={100}
                            className="w-full h-full"
                            />
                            <p className="text-[10px] sm:text-[15px] font-bold mt-3 leading-3">Fresh Lime</p>
                            <div className="flex gap-3 text-[10px] sm:text-[12px]">
                            <p className="text-orange-400">$38.00</p>
                            <p className="line-through text-gray-500">$45.00</p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[100px] sm:w-[220px] sm:h-[200px]">
                        <Image 
                            src={"/FigmaImages/img57.png"}
                            alt="Picture"
                            width={100}
                            height={100}
                            className="w-full h-full"
                            />
                            <p className="text-[10px] sm:text-[15px] font-bold mt-3 leading-3">Chocolate Muffin</p>
                            <div className="flex gap-3 text-[10px] sm:text-[12px]">
                            <p className="text-orange-400">$28.00</p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[100px] sm:w-[220px] sm:h-[200px]">
                        <Image 
                            src={"/FigmaImages/img81.png"}
                            alt="Picture"
                            width={100}
                            height={100}
                            className="w-full h-full"
                            />
                            <p className="text-[10px] sm:text-[15px] font-bold mt-3 leading-3">Burger</p>
                            <div className="flex gap-3 text-[10px] sm:text-[12px]">
                            <p className="text-orange-400">$21.00</p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[100px] sm:w-[220px] sm:h-[200px]">
                        <Image 
                            src={"/FigmaImages/img80.png"}
                            alt="Picture"
                            width={100}
                            height={100}
                            className="w-full h-full"
                            />
                            <p className="text-[11px] sm:text-[15px] font-bold mt-3 leading-3">Cheese Pizza</p>
                            <div className="flex gap-3 text-[11px] sm:text-[12px]">
                            <p className="text-orange-400">$38.00</p>
                            <p className="line-through text-gray-500">$45.00</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    );
} 