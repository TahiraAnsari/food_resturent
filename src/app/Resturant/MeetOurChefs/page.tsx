import { Button } from "@/components/ui/button";
import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01Icon, ArrowDownFromLine, ArrowDownIcon, ArrowDownNarrowWideIcon, ArrowDownToDotIcon, Check, CircleArrowDownIcon, Clock1, Clock10Icon, CornerLeftUpIcon, Facebook, FacebookIcon, FolderClockIcon, GitBranchPlus, GitCommitHorizontal, GitCompareArrows, GitGraph, GithubIcon, InstagramIcon, Linkedin, LinkedinIcon, LucideArrowDown, LucideNetwork, MessageCircleMoreIcon, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiffIcon, MessageSquareDot, MessageSquareMore, Network, NetworkIcon, Pickaxe, PlayCircleIcon, Search, Share, ShoppingBag, Star, ThumbsUp, Twitch, Twitter, User, User2Icon, UserCircle, UserX, WindArrowDown } from "lucide-react";
import Image from "next/image";
export default function MeetOurChefs(){
    return(
        <>
        <div className="w-full mt-16 px-5 py-5">
                    <div className="text-white text-center  space-y-6 leading-3">
                        {/* Title Section */}
                        <h1 className="font-greatVibes text-[20px] sm:text-[24px]">Chefs</h1>
                        <h1 className="text-[20px] sm:text-[30px]">
                            <span className="text-orange-500">Me</span>et Our Chef
                        </h1>

                        {/* Chefs Section */}
                        <div className="flex flex-col grid-cols-2 sm:flex-row gap-4 justify-center items-center ">
                            {/* Chef 1 */}
                            <div className="w-[300px] sm:w-[200px] h-[300px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef1.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">D.Estwood</p>
                                    <p className="text-[10px] sm:text-[12px]">Chief Chef</p>
                                </div>
                            </div>

                            {/* Chef 2 */}
                            <div className="w-[300px] sm:w-[200px] h-[300px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef2.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">D.Dcoriesh</p>
                                    <p className="text-[10px] sm:text-[12px]">Assistant Chef</p>
                                </div>
                            </div>

                            {/* Chef 3 */}
                            <div className="w-[300px] sm:w-[200px] h-[300px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef3.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">M.William</p>
                                    <p className="text-[10px] sm:text-[12px]">Advertising Chef</p>
                                </div>
                            </div>

                            {/* Chef 4 */}
                            <div className="w-[300px] sm:w-[200px] h-[300px] sm:h-[200px] rounded-md relative overflow-hidden shadow-lg">
                                <Image
                                    src={"/images/chef4.jpg"}
                                    alt="Chef"
                                    width={200}
                                    height={200}
                                    className="w-full h-full"
                                />
                                <div className="absolute bottom-0 w-full h-10 bg-white bg-opacity-50 text-black text-center py-1 leading-4">
                                    <p className="text-[13px] sm:text-[15px] font-bold">W.ReadFroad</p>
                                    <p className="text-[10px] sm:text-[12px]">Chef</p>
                                </div>
                            </div>
                        </div>

                        {/* Button Section */}
                        <Button className="mt-6 bg-black text-white text-[10px] sm:text-[12px] border border-orange-500 hover:bg-orange-500 hover:text-white rounded-3xl px-4 py-2">
                            See More
                        </Button>
                    </div>
                </div>
        </>
    );
}