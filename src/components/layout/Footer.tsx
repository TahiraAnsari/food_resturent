import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01Icon, ArrowDownFromLine, ArrowDownIcon, ArrowDownNarrowWideIcon, ArrowDownToDotIcon, Check, CircleArrowDownIcon, Clock1, Clock10Icon, CornerLeftUpIcon, Facebook, FacebookIcon, FolderClockIcon, GitBranchPlus, GitCommitHorizontal, GitCompareArrows, GitGraph, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideNetwork, MessageCircleMoreIcon, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiffIcon, MessageSquareDot, MessageSquareMore, Network, NetworkIcon, Pickaxe, PlayCircleIcon, Search, Share, ShoppingBag, Star, ThumbsUp, Twitch, Twitter, User, User2Icon, UserCircle, UserX, WindArrowDown } from "lucide-react";
import Image from "next/image";

export default function Footer(){
    return(
        <>
         <div className="w-full px-2 sm:px-16 py-4 mt-auto">
                    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center">
                        <div className="mb-5 sm:mb-0 text-white">
                            <h1 className="text-[16px] sm:text-[20px] font-bold">
                                <span className="text-orange-500">St</span>ill You need our Support?
                            </h1>
                            <p className="text-[10px] sm:text-[12px] text-gray-400">
                                Don't wait, make a smart & logical quote here. It's pretty easy.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-full sm:w-[250px] h-[40px] bg-orange-400 rounded-md text-white flex justify-between items-center">
                                <p className="px-3 text-[10px]">Enter Your Email</p>
                                <div className="bg-white w-[80px] h-[40px] text-orange-400 rounded-sm text-[10px] flex items-center justify-center">
                                    Subscribe Now
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-orange-400 my-8" />
                    <div className="bg-black w-full p-2 flex flex-wrap gap-5 sm:flex-nowrap">
                        {/* About Us */}
                        <div className="text-white p-1 w-full sm:w-[170px] space-y-5">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">About Us</h1>
                            <p className="text-[10px] sm:text-[12px]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti rerum
                                in perspiciatis nihil accusamus aperiam nobis esse eum, nesciunt libero
                                dolorem provident facere facilis incidunt eos.
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px] flex items-center justify-center">
                                    <Clock10Icon />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-[12px] font-bold">Opening Hours</p>
                                    <p className="text-[8px] sm:text-[10px]">Mon - Sat(8:00 - 6:00)</p>
                                    <p className="text-[8px] sm:text-[10px]">Sunday - Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Useful Links */}
                        <div className="text-white p-1 w-full sm:w-[150px] space-y-4">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">Useful Links</h1>
                            <ul className="text-[10px] sm:text-[12px] space-y-2">
                                <li className="cursor-pointer hover:text-orange-400">About</li>
                                <li className="cursor-pointer hover:text-orange-400">News</li>
                                <li className="cursor-pointer hover:text-orange-400">Partners</li>
                                <li className="cursor-pointer hover:text-orange-400">Team</li>
                                <li className="cursor-pointer hover:text-orange-400">Menu</li>
                                <li className="cursor-pointer hover:text-orange-400">Contacts</li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div className="text-white p-1 w-full sm:w-[150px] space-y-4">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">Help?</h1>
                            <ul className="text-[10px] sm:text-[12px] space-y-2">
                                <li className="cursor-pointer hover:text-orange-400">FAQ</li>
                                <li className="cursor-pointer hover:text-orange-400">Terms & Conditions</li>
                                <li className="cursor-pointer hover:text-orange-400">Reporting</li>
                                <li className="cursor-pointer hover:text-orange-400">Documentation</li>
                                <li className="cursor-pointer hover:text-orange-400">Support Policy</li>
                                <li className="cursor-pointer hover:text-orange-400">Privacy</li>
                            </ul>
                        </div>

                        {/* Recent Post */}
                        <div className="text-white p-1 w-full sm:w-[170px] space-y-4">
                            <h1 className="text-[18px] sm:text-[20px] font-bold">Recent Post</h1>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px]">
                                    <Image
                                        src={"/images/f4.jpg"}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-gray-400">20 Feb 2022</p>
                                    <p className="text-[10px] sm:text-[12px] font-bold">
                                        Keep Your Business
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px]">
                                    <Image
                                        src={"/images/f7.jpg"}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-gray-400">20 Feb 2022</p>
                                    <p className="text-[10px] sm:text-[12px] font-bold">
                                        Keep Your Business
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 w-[50px] h-[50px]">
                                    <Image
                                        src={"/images/f10.jpg"}
                                        alt="Image"
                                        width={50}
                                        height={50}
                                        className="w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-[8px] sm:text-[10px] text-gray-400">20 Feb 2022</p>
                                    <p className="text-[10px] sm:text-[12px] font-bold">
                                        Keep Your Business
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen bg-gray-600 text-white py-4 flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center px-4">
                        <p className="text-[10px] sm:text-[12px]">
                            Copyright @ 2022 by Tahira. All Rights Reserved.
                        </p>
                        <div className="flex gap-3 px-5">
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <FacebookIcon className="fill-slate-600" />
                            </div>
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <InstagramIcon className="fill-slate-600" />
                            </div>
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <GithubIcon className="fill-slate-600" />
                            </div>
                            <div className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] bg-white flex items-center justify-center">
                                <LinkedinIcon className="fill-slate-600" />
                            </div>
                        </div>
                    </div>
        </>
    );
}
