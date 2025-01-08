import Client from "@/app/Resturant/Clients/page";
import Image from "next/image";

export default function StarterMenu() {
    return (
        <>
            <div className="w-screen h-[3650px] sm:h-[2450px] bg-white px-1">
                <div className="h-[1650px] sm:h-[930px] space-y-5">
                <div className="px-2 sm:px-2 py-5 sm:py-10  h-[750px] sm:h-[400px] sm:w-[700px] my-2">
                    <div className="flex w-[380px] sm:w-[840px] h-[330px] sm:h-[350px] content-center p-2 flex-col sm:flex-row justify-around">
                        <div className="w-[360px] h-[390px] sm:w-[290px] sm:h-[400px]">
                            <Image
                                src={"/images/bg.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="text-black w-full sm:w-[400px] px-6 py-6 my-2 sm:my-0 sm:h-[310px]">
                            <h1 className="text-[25px] mb-3 font-bold">Starter Menu</h1>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Alder Grilled Chinook Salmon</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">32$</div>
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold text-orange-500">Berries and creme tart</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">700 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">43$</div>
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Tormentoso Bush Pizza Pintoage</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Ground cumin, avocados, peeled and cubed</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">1000 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">14$</div>
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Spicy Vegan Potato Curry</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Spreadable cream cheese, crumbled blue cheese</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">35$</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-2 sm:px-2 py-5 sm:py-10 h-[860px] sm:h-[400px] w-[390px] sm:w-[850px] my-2">
                    <div className="flex w-[380px] sm:w-[840px] h-[330px] sm:h-[350px] content-cente p-2 flex-col sm:flex-row justify-around">
                        <div className="text-black w-full sm:w-[400px] px-6 py-6 sm:my-0 sm:h-[310px]">
                            <h1 className="text-[25px] font-bold mb-6">Main Course</h1>
                            <div className="flex justify-between items-center px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Optic Big Breakfast Combo Menu</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">32$</div>
                            </div>
                            <div className="flex justify-between items-center px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Cashew Chicken WIth Stir-Fry</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">700 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">43$</div>
                            </div>
                            <div className="flex justify-between items-center px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Vegetables & Green Salad</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Ground cumin, avocados, peeled and cubed</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">1000 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">14$</div>
                            </div>
                            <div className="flex justify-between items-center] px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Spicy Vegan Potato Curry</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Spreadable cream cheese, crumbled blue cheese</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">35$</div>
                            </div>

                        </div>
                        <div className="w-[360px] h-[390px] sm:w-[290px] sm:h-[400px]">
                            <Image
                                src={"/images/pasta.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>


                    </div>
                </div>
                </div>

              <Client />

                <div className="px-2 sm:px-2 py-5 sm:py-10  h-[740px] sm:h-[400px] sm:w-[700px] my-2">
                    <div className="flex w-[380px] sm:w-[840px] h-[330px] sm:h-[350px] content-center p-2 flex-col sm:flex-row justify-around">
                        <div className="w-[360px] h-[400px] sm:w-[290px] sm:h-[400px]">
                            <Image
                                src={"/images/cupcake.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="text-black w-full sm:w-[400px] px-6 py-6 my-2 sm:my-0 sm:h-[310px]">
                            <h1 className="text-[25px] mb-3 font-bold">Starter Menu</h1>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Alder Grilled Chinook Salmon</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">32$</div>
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold text-orange-500">Berries and creme tart</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">700 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">43$</div>
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Tormentoso Bush Pizza Pintoage</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Ground cumin, avocados, peeled and cubed</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">1000 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">14$</div>
                            </div>
                            <div className="flex justify-between items-center my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Spicy Vegan Potato Curry</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Spreadable cream cheese, crumbled blue cheese</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">35$</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-2 sm:px-2 py-5 sm:py-10 h-[740px] sm:h-[400px] w-[390px] sm:w-[850px] my-10">
                    <div className="flex w-[380px] sm:w-[840px] h-[330px] sm:h-[350px] content-cente p-2 flex-col sm:flex-row justify-around">
                        <div className="text-black w-full sm:w-[400px] px-6 py-6 sm:my-0 sm:h-[310px]">
                            <h1 className="text-[25px] font-bold mb-6">Main Course</h1>
                            <div className="flex justify-between items-center px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Optic Big Breakfast Combo Menu</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Toasted French bread topped with romano, cheddar</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">32$</div>
                            </div>
                            <div className="flex justify-between items-center px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Cashew Chicken WIth Stir-Fry</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Gorgonzola, ricotta, mozzarella, taleggio</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">700 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">43$</div>
                            </div>
                            <div className="flex justify-between items-center px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Vegetables & Green Salad</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Ground cumin, avocados, peeled and cubed</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">1000 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">14$</div>
                            </div>
                            <div className="flex justify-between items-center] px-2 my-3">
                                <div>
                                    <span className="text-[15px] sm:text-[15px] font-bold">Spicy Vegan Potato Curry</span>
                                    <p className="text-[8px] sm:text-[10px] text-gray-700">Spreadable cream cheese, crumbled blue cheese</p>
                                    <p className="text-[7px] sm:text-[10px] text-gray-500">560 CAL</p>
                                </div>
                                <div className="text-[14px] sm:text-[16px] text-orange-500">35$</div>
                            </div>

                        </div>
                        <div className="w-[360px] h-[390px] sm:w-[260px] sm:h-[400px]">
                            <Image
                                src={"/images/drink.jpg"}
                                alt="Food"
                                width={100}
                                height={100}
                                className="w-[360px] h-full"
                            />
                        </div>


                    </div>
                </div>

                <div className="text-black mt-28 h-[100px] sm:h-[170px] content-center justify-items-center">
                    <p className="text-[10px] text-gray-400">Partners & Clients</p>
                    <h1 className="text-[20px] font-bold">We Work with the best People</h1>
                    <div className="flex sm:flex-row gap-10 mt-5">
                        <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] content-center">
                            <Image 
                            src={"/FigmaImages/img119.png"}
                            alt="Food"
                            width={100}
                            height={100} 
                            />
                        </div>
                        <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] content-center">
                            <Image 
                            src={"/FigmaImages/img118.png"}
                            alt="Food"
                            width={100}
                            height={100} 
                            />
                        </div>
                        <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] content-center">
                            <Image 
                            src={"/FigmaImages/img117.png"}
                            alt="Food"
                            width={100}
                            height={100} 
                            />
                        </div>
                        <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] content-center">
                            <Image 
                            src={"/FigmaImages/img116.png"}
                            alt="Food"
                            width={100}
                            height={100} 
                            />
                        </div>
                        <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] content-center">
                            <Image 
                            src={"/FigmaImages/img115.png"}
                            alt="Food"
                            width={100}
                            height={100} 
                            />
                        </div>
                        <div className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] content-center">
                            <Image 
                            src={"/FigmaImages/img114.png"}
                            alt="Food"
                            width={100}
                            height={100} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}