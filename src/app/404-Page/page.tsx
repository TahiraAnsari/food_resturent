import Footer from "@/components/layout/Footer";
import Header2 from "@/components/layout/Header2";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function ErrorPage(){
    return(
        <>
        <Header2 />
        <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">404 Error</h1>
                    <div className="flex space-x-1 text-[10px] items-center leading-8">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">404</span>

                    </div>
                </div>
            </div>
        <div className="bg-white h-[400px] content-center justify-items-center space-y-3 text-black">
            <h1 className="text-[55px] sm:text-[85px] text-orange-500 font-bold">404</h1>
            <p className="text-[17px] sm:text-[20px] font-bold">Oops! Look likes something going wrong</p>
           <div className="justify-items-center text-gray-400">
           <p className="text-[10px] sm:text-[11px]">Page Cannot be found! we’ll have it figured out in no time.</p>
            <p className="text-[10px] sm:text-[11px]">Menwhile, cheek out these fresh ideas:</p>
           </div>
           <Link href={"/"}> <Button variant={"default"} className="border border-orange-500 cursor-pointer my-4">Go to Home</Button></Link>
        </div>
        <Footer />
        </>
    );
}