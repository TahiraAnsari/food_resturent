import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01Icon, ArrowDownFromLine, ArrowDownIcon, ArrowDownNarrowWideIcon, ArrowDownToDotIcon, Check, CircleArrowDownIcon, Clock1, Clock10Icon, CornerLeftUpIcon, Facebook, FacebookIcon, FolderClockIcon, GitBranchPlus, GitCommitHorizontal, GitCompareArrows, GitGraph, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideNetwork, MessageCircleMoreIcon, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiffIcon, MessageSquareDot, MessageSquareMore, Network, NetworkIcon, Pickaxe, PlayCircleIcon, Search, Share, ShoppingBag, Star, ThumbsUp, Twitch, Twitter, User, User2Icon, UserCircle, UserX, WindArrowDown } from "lucide-react";
import Image from "next/image";
export default function Client(){
    return(
        <>
        <div className=" w-full h-auto p-1 relative md:flex-col sm:flex-col mt-16">
                    {/* Wrapper for images and overlay content */}
                    <div className="relative w-full h-auto flex lg:flex-col justify-evenly items-center">
                        {/* Individual image + overlay container */}
                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f1.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/Wchef.png"}
                                    alt="Chefs"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Professional Chef</p>
                                <p className="text-white text-center font-bold text-[25px]">420</p>
                            </div>
                        </div>

                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f6.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/WBurger.png"}
                                    alt="Burger"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Items of Food</p>
                                <p className="text-white text-center font-bold text-[25px]">320</p>
                            </div>
                        </div>

                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f2.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/Wfork.png"}
                                    alt="Fork"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Years of Experienced</p>
                                <p className="text-white text-center font-bold text-[25px]">30+</p>
                            </div>
                        </div>

                        <div className="relative mb-5 lg:mb-0 content-center">
                            <Image
                                src={"/images/f5.jpg"}
                                alt="Food"
                                width={150}
                                height={150}
                                className="h-[220px] w-auto object-cover opacity-25"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-5">
                                <Image
                                    src={"/images/Wpizza.png"}
                                    alt="Pizza"
                                    width={50}
                                    height={50}
                                    className="mb-3"
                                />
                                <p className="text-white text-center font-bold text-[13px] mb-1">Happy Customer</p>
                                <p className="text-white text-center font-bold text-[25px]">220</p>
                            </div>
                        </div>

                    </div>
                </div>
        </>
    );
}