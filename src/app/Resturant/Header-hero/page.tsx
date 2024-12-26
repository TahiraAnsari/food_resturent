import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function HeaderHero() {
    return (
        <>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-around items-center gap-4 p-5">
                        {/* Left Section */}
                        <div className="w-full md:w-[400px] h-auto relative">
                            <div className="flex gap-10">
                                {/* Vertical Icons */}
                                <div className="h-[300px] w-[15px] py-3">
                                    <div className="flex flex-col w-[2px] h-[100px] bg-white relative left-1"></div>
                                    <div>
                                        <Twitter className="w-[15px] text-white fill-white" />
                                    </div>
                                    <div>
                                        <Facebook className="w-[15px] text-white fill-white" />
                                    </div>
                                    <div>
                                        <Linkedin className="w-[15px] text-white fill-white" />
                                    </div>
                                    <div className="flex flex-col w-[2px] h-[100px] bg-white relative left-1"></div>
                                </div>

                                {/* Text Content */}
                                <div>
                                    <div className="font-bold text-[25px] leading-[50px] text-orange-500">Its Quick & Amusing!</div>
                                    <div className="text-[41px] font-serif font-semibold leading-[50px] mt-5 text-white">
                                        <span className="text-orange-500">Th</span>e Art of Speed Food Quality
                                    </div>
                                    <div className="text-[10px] text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id, voluptatibus laboriosam quam assumenda eius distinctio, quaerat unde voluptates reprehenderit aspernatur sit earum sint ipsum sapiente dolores. Eaque, sed debitis.
                                    </div>
                                    <Button variant={"default"} className="border border-white hover:border-orange-500 rounded-3xl mt-3 px-5">
                                        See Menu
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}

                        <Image
                                src={"/FigmaImages/img103.png"}
                                alt="Image"
                                width={500}
                                height={400}
                                className=""
                            />
                    </div>
        </>
    );
}