import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Key, Mail } from "lucide-react";

export default function LoginPage() {
    return (
        <>
            <Header2 />
            <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Login Page</h1>
                    <div className="flex space-x-1 text-[10px] items-center leading-8">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">Login</span>

                    </div>
                </div>
            </div>
            <div className="w-screen h-[700px] bg-white justify-items-center content-center">
                <div className="w-[400px] h-[500px]">
                    <div className="p-5 space-y-4">
                        <div className="relative flex items-center ">
                            <span className="absolute left-3 text-gray-400">
                                <Mail size={20} />
                            </span>
                            <Input
                                type="email"
                                placeholder="Email"
                                className="pl-10 h-[50px] border-gray-400"
                                required
                            />
                        </div>
                        <div className="relative flex items-center ">
                            <span className="absolute left-3 text-gray-400">
                                <Key size={20} />
                            </span>
                            <Input
                                type="password"
                                placeholder="Password"
                                className="pl-10 h-[50px] border-gray-400"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 items-center text-black justify-start px-6">
                        <Image
                            src={"/FigmaImages/Check.png"}
                            alt="picture"
                            width={15}
                            height={10}
                            className="bg-orange-500 h-[17px] w-[17px]"
                        />
                        <p>Remember me?</p>


                    </div>
                    <Button variant={"default"} className="w-[270px] h-[40px] mx-14 my-4 cursor-pointer border border-orange-500">Login</Button>
                    <Link href={"/Log-Sign/signup"}>  <p className="text-orange-500 hover:text-green-500 text-center text-[13px] cursor-pointer mb-3">Create Account</p></Link>
                    <p className="text-[10px] text-gray-400  cursor-pointer hover:text-orange-400 ml-[300px]">Forget password?</p>
                    <p className="text-gray-400 text-center text-[12px] mt-5">OR</p>
                    <div className="mx-16 my-3 space-y-2">
                        <div className="flex w-[300px] h-[50px] text-[11px] content-center text-gray-400 gap-5 items-center border shadow-sm justify-center" >
                            <Image
                                src={"/FigmaImages/img2.png"}
                                alt="picture"
                                width={30}
                                height={30}
                                className="w-[20px] h-[20px] cursor-pointer"
                            />
                            <p className="cursor-pointer hover:text-orange-500">Sign up with Google</p>
                        </div>
                        <div className="flex w-[300px] h-[50px] text-[11px] content-center text-gray-400 gap-5 items-center justify-center border shadow-sm" >
                            <Image
                                src={"/FigmaImages/img1.png"}
                                alt="picture"
                                width={30}
                                height={30}
                                className="w-[20px] h-[20px] cursor-pointer"
                            />
                            <p className="cursor-pointer hover:text-orange-500">Sign up with Google</p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
}