import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01Icon, ArrowDownFromLine, ArrowDownIcon, ArrowDownNarrowWideIcon, ArrowDownToDotIcon, Check, CircleArrowDownIcon, Clock1, Clock10Icon, CornerLeftUpIcon, Facebook, FacebookIcon, FolderClockIcon, GitBranchPlus, GitCommitHorizontal, GitCompareArrows, GitGraph, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideNetwork, MessageCircleMoreIcon, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiffIcon, MessageSquareDot, MessageSquareMore, Network, NetworkIcon, Pickaxe, PlayCircleIcon, Search, Share, ShoppingBag, Star, ThumbsUp, Twitch, Twitter, User, User2Icon, UserCircle, UserX, WindArrowDown } from "lucide-react";
import Image from "next/image";
export default function WhyChooseUs(){
    return(
        <>
        <div className="flex flex-col sm:flex-row gap-5 px-5 py-5 mt-16 ">
                    {/* Image Grid */}
                    <div className="flex flex-col gap-2 lg:w-1/2">
                        <div className="flex gap-2">
                            <div className="w-1/2 h-[200px]">
                                <Image
                                    src={"/images/f4.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="w-1/2 h-[200px]">
                                <Image
                                    src={"/images/f11.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-[150px] rounded-lg relative top-[50px]"
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-1/3 h-[200px]">
                                <Image
                                    src={"/images/f10.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="w-1/3 h-[200px]">
                                <Image
                                    src={"/images/f9.jpg"}
                                    alt="Food"
                                    width={100}
                                    height={100}
                                    className="w-full h-[150px] rounded-lg"
                                />
                            </div>
                            <div className="w-1/3 flex flex-col gap-2">
                                <div className="h-[95px]">
                                    <Image
                                        src={"/images/f8.jpg"}
                                        alt="Food"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-lg"
                                    />
                                </div>
                                <div className="h-[95px]">
                                    <Image
                                        src={"/images/f6.jpg"}
                                        alt="Food"
                                        width={100}
                                        height={100}
                                        className="w-full h-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-white lg:w-1/2">
                        <h1 className="text-start text-[20px] font-greatVibes text-orange-500">
                            Why Choose Us
                        </h1>
                        <h1 className="text-start font-bold text-[25px]">
                            <span className="text-orange-500">Ex</span>tra Ordinary Tasted and Experienced
                        </h1>
                        <p className="text-start text-[10px] leading-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quisquam
                            odit, quam, nemo, laboriosam dolorum tempora optio vel vitae obcaecati
                            consequatur qui perspiciatis odio excepturi nam alias aliquid iste
                            numquam?
                        </p>
                        <div className="flex gap-3">
                            <div>
                                <div className="bg-orange-500 rounded-md w-[80px] h-[80px] mt-5 justify-items-center content-center cursor-pointer">
                                    <Image
                                        src={"/images/Wburger.png"}
                                        alt="Burger"
                                        width={40}
                                        height={50}
                                        className="mb-3" />
                                </div>
                                <p className="text-[10px] leading-6 text-white text-center">Fast Food</p>
                            </div>
                            <div>
                                <div className="bg-orange-500 rounded-md w-[80px] h-[80px] mt-5 justify-items-center content-center cursor-pointer">
                                    <Image
                                        src={"/images/Wcookie.png"}
                                        alt="Cookie"
                                        width={40}
                                        height={50}
                                        className="mb-3" />
                                </div>
                                <p className="text-[10px] leading-6 text-white text-center">Lunch</p>
                            </div>
                            <div>
                                <div className="bg-orange-500 rounded-md w-[80px] h-[80px] mt-5 justify-items-center content-center cursor-pointer">
                                    <Image
                                        src={"/images/Wdrink.png"}
                                        alt="Drink"
                                        width={40}
                                        height={50}
                                        className="mb-3" />
                                </div>
                                <p className="text-[10px] leading-6 text-white text-center">Dinner</p>
                            </div>
                        </div>
                        <div className="bg-orange-500 w-[250px] h-[60px] mt-3 cursor-pointer">
                            <div className="bg-white w-[230px] h-[60px] relative left-5 px-5 flex items-center justify-around">
                                <h1 className="text-[27px] text-orange-500 font-bold">30+</h1>
                                <div className="leading-4 text-start">
                                    <p className="text-[12px] text-gray-500">Years of</p>
                                    <p className="text-[14px] font-bold text-black">Experienced</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}