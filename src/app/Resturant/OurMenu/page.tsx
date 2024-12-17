import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01Icon, ArrowDownFromLine, ArrowDownIcon, ArrowDownNarrowWideIcon, ArrowDownToDotIcon, Check, CircleArrowDownIcon, Clock1, Clock10Icon, CornerLeftUpIcon, Facebook, FacebookIcon, FolderClockIcon, GitBranchPlus, GitCommitHorizontal, GitCompareArrows, GitGraph, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideNetwork, MessageCircleMoreIcon, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiffIcon, MessageSquareDot, MessageSquareMore, Network, NetworkIcon, Pickaxe, PlayCircleIcon, Search, Share, ShoppingBag, Star, ThumbsUp, Twitch, Twitter, User, User2Icon, UserCircle, UserX, WindArrowDown } from "lucide-react";
import Image from "next/image";
export default function OurMenu() {
    return (
        <>
            <div className=" w-full px-4 md:px-16 py-14 flex flex-col items-center justify-center mt-16">
                {/* Header Section */}
                <p className="font-greatVibes text-orange-500 text-center text-[20px]">Choose & pick</p>
                <p className="text-center text-white text-[30px] font-bold mb-5">
                    <span className="text-orange-500">Fr</span>om Our Menu
                </p>

                {/* Menu Categories */}
                <div className="flex justify-items-center-center gap-5 sm:gap-20 text-white text-[14px] w-full">
                    <p className="cursor-pointer text-orange-500">Breakfast</p>
                    <p className="cursor-pointer">Lunch</p>
                    <p className="cursor-pointer">Dinner</p>
                    <p className="cursor-pointer">Drink</p>
                    <p className="cursor-pointer">Snack</p>
                    <p className="cursor-pointer">Soups</p>
                </div>

                {/* Menu Content */}
                <div className="w-full h-full flex flex-col sm:flex-row md:flex-row xl:flex-row gap-2 my-8 items-center">
                    {/* Large Image */}
                    <div className="w-full h-full md:w-[200px] ">
                        <Image
                            src="/images/burger1.jpg"
                            alt="Food"
                            layout="responsive"
                            width={280}
                            height={300}
                        />
                    </div>

                    {/* Menu Items */}
                    <div className="w-full flex flex-wrap gap-1">
                        <div className="flex flex-wrap sm:flex-row gap-3">
                            <div className="flex gap-1">
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex  items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f6.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f5.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row gap-3">
                            <div className="flex gap-1">
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex  items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f7.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f8.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row gap-3">
                            <div className="flex gap-1">
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex  items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f9.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f10.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row gap-3">
                            <div className="flex gap-1">
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex  items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f1.jpg`}
                                            alt={`Food 11`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[300px] h-[60px] px-2 flex items-center gap-3">
                                    <div className="w-[70px] h-[50px]">
                                        <Image
                                            src={`/images/f12.jpg`}
                                            alt={`Food 1`}
                                            width={50}
                                            height={50}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-[13px] font-bold">Food Item 1</p>
                                        <p className="text-gray-400 text-[7px]">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <p className="text-orange-500 text-[10px]">$12.55</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}