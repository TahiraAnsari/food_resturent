import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export default function AboutUs(){
    return(
    <>
     <div className="w-full h-auto flex flex-wrap justify-center items-center gap-4 mt-16">
                    {/* Text Section */}
                    <div className="w-full md:w-[400px] h-auto p-2">
                        <h1 className="font-greatVibes text-orange-500">About Us</h1>
                        <h1 className="text-white text-[35px] leading-9 my-4">
                            <span className="text-orange-500">We</span> Create the best foody product
                        </h1>
                        <p className="text-white text-[10px] mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste, quae sunt voluptates maiores blanditiis! Fuga at sunt, fugit officia quae placeat, repellat numquam aliquid provident necessitatibus, est rerum perferendis.
                        </p>
                        <div className="flex gap-2 items-center">
                            <Check className="w-[10px] text-white" />
                            <p className="text-[10px] text-white">Lacus nisi, et ac dapibus sit eu in consequat.</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Check className="w-[10px] text-white" />
                            <p className="text-[10px] text-white">
                                Quisque diam pellentesque bibendum non dui volupat fringilla.
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Check className="w-[10px] text-white" />
                            <p className="text-[10px] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <Button variant={"default"} className="rounded-3xl mt-2">
                            Read More
                        </Button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-[400px] h-auto">
                        <div className="w-full h-[150px] mb-2">
                            <Image
                                src={"/images/f3.jpg"}
                                alt="Food"
                                width={400}
                                height={150}
                                className="w-full h-[150px] object-cover"
                            />
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap gap-2">
                            <div className="w-full md:w-1/2 h-[150px]">
                                <Image
                                    src={"/images/f1.jpg"}
                                    alt="Food"
                                    width={225}
                                    height={150}
                                    className="w-full h-[150px] object-cover"
                                />
                            </div>
                            <div className="w-full md:w-1/2 h-[150px]">
                                <Image
                                    src={"/images/f2.jpg"}
                                    alt="Food"
                                    width={225}
                                    height={150}
                                    className="w-full h-[150px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

    </>
        );
}