import { GitCompareArrowsIcon, MessageSquareMore, ThumbsUp } from "lucide-react";
import Image from "next/image";
export default function Blog() {
    return (
        <>
            <div className="mt-16 w-full h-auto py-8">
                <div className="px-5 sm:px-16 text-center text-white">
                    <h1 className="font-greatVibes text-[20px] sm:text-[24px]">Blog Post</h1>
                    <h1 className="text-[18px] sm:text-[30px]">
                        <span className="text-orange-500">La</span>test News & Blog
                    </h1>

                    {/* Blog Cards */}
                    <div className="flex flex-wrap justify-center gap-4 mt-5">
                        {/* Blog Card 1 */}
                        <div className="w-full max-w-[240px] h-[280px] border shadow-xl">
                            <div className="w-full h-[160px]">
                                <Image
                                    src={"/images/f3.jpg"}
                                    alt="Burger"
                                    width={100}
                                    height={100}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="px-3 py-2 text-[10px] text-start space-y-2">
                                <p className="text-orange-500">10 February 2022</p>
                                <p className="text-[14px] text-white leading-4">
                                    Pellentesque Non Efficitue Mi Aliquam Convallis Mi Quis
                                </p>
                                <div className="flex justify-between items-center text-[12px]">
                                    <p>Learn More</p>
                                    <div className="flex gap-1">
                                        <ThumbsUp className="w-[15px]" />
                                        <MessageSquareMore className="w-[15px] text-orange-500" />
                                        <GitCompareArrowsIcon className="w-[15px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog Card 2 */}
                        <div className="w-full max-w-[240px] h-[280px] border shadow-xl">
                            <div className="w-full h-[160px]">
                                <Image
                                    src={"/images/f5.jpg"}
                                    alt="Burger"
                                    width={100}
                                    height={100}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="px-3 py-2 text-[10px] text-start space-y-2">
                                <p className="text-orange-500">10 February 2022</p>
                                <p className="text-[14px] text-white leading-4">
                                    Pellentesque Non Efficitue Mi Aliquam Convallis Mi Quis
                                </p>
                                <div className="flex justify-between items-center text-[12px]">
                                    <p>Learn More</p>
                                    <div className="flex gap-1">
                                        <ThumbsUp className="w-[15px]" />
                                        <MessageSquareMore className="w-[15px] text-orange-500" />
                                        <GitCompareArrowsIcon className="w-[15px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Blog Card 3 */}
                        <div className="w-full max-w-[240px] h-[280px] border shadow-xl">
                            <div className="w-full h-[160px]">
                                <Image
                                    src={"/images/f6.jpg"}
                                    alt="Burger"
                                    width={100}
                                    height={100}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="px-3 py-2 text-[10px] text-start space-y-2">
                                <p className="text-orange-500">10 February 2022</p>
                                <p className="text-[14px] text-white leading-4">
                                    Pellentesque Non Efficitue Mi Aliquam Convallis Mi Quis
                                </p>
                                <div className="flex justify-between items-center text-[12px]">
                                    <p>Learn More</p>
                                    <div className="flex gap-1">
                                        <ThumbsUp className="w-[15px]" />
                                        <MessageSquareMore className="w-[15px] text-orange-500" />
                                        <GitCompareArrowsIcon className="w-[15px]" />
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