
import Image from "next/image";
export default function FoodCategory(){
    return(
        <>
        <div className="w-full h-auto text-center leading-10 text-white mt-16">
                    <div className="font-greatVibes">Food Category</div>
                    <div className="text-[25px] mb-3">
                        <span className="text-orange-500">Ch</span>oose Food Item
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                        <div className="w-[300px] h-[300px] sm:w-[200px] sm:h-[200px]">
                            <Image
                                src={"/FigmaImages/img101.png"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="w-[300px] h-[300px] sm:w-[200px] sm:h-[200px]">
                            <Image
                                src={"/FigmaImages/img81.png"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="w-[300px] h-[300px] sm:w-[200px] sm:h-[200px]">
                            <Image
                                src={"/FigmaImages/img100.png"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="w-[300px] h-[300px] sm:w-[200px] sm:h-[200px]">
                            <Image
                                src={"/FigmaImages/img99.png"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full rounded-lg"
                            />
                        </div>
                    </div>
                </div>
        </>
    );
}