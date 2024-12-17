import { Button } from "@/components/ui/button";
import { GitCompareArrows, MessageSquareMore, PlayCircleIcon, ThumbsUp } from "lucide-react";
import Image from "next/image";
export default function RestrainedCreativeProcess(){
    return(
        <>
          <div className="w-full h-screen mt-16 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/f2.jpg)' }}>
                    <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay for better text visibility */}
                    <div className="relative h-full flex items-center justify-end px-10 sm:px-16">
                        <div className="text-white text-right space-y-4 max-w-lg">
                            <h1 className="font-greatVibes text-orange-500 text-[20px]">Restaurant Active Process</h1>
                            <h1 className="text-2xl sm:text-4xl font-bold text-center">We Document Every Food Bean Process untile it is saved</h1>
                            <p className="text-[10px] sm:text-[12px] text-center">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, minus, earum ipsa quia possimus omnis sit quos perspiciatis incidunt cumque quisquam. Libero labore soluta praesentium, et modi inventore repudiandae unde!
                            </p>
                           <div className="flex gap-10 justify-end items-center">
                            <Button variant={"default"} className="bg-transparent border border-orange-500">Read More</Button>
                           <div className="flex gap-2 items-center">
                            <PlayCircleIcon className="text-white fill-orange-500 size-10 sm:size-12 hover:fill-black cursor-pointer"/>
                            <p className="text-[13px]">Play Video</p>
                           </div>
                           </div>
                        </div>
                    </div>
                </div>
        </>
    );
}