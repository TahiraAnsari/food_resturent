import { AlignLeftIcon, MoveLeft, MoveRightIcon } from "lucide-react";
import Image from "next/image";

export default function HeroHeader() {
    return (
        <>
            <div className="relative h-[200px] bg-cover bg-center" style={{ backgroundImage: "url('/FigmaImages/img110.png')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Our Menu</h1>
                    <div className="flex space-x-1 text-[10px] items-center">
                        <p>Home</p>
                        <Image
                            src={"/FigmaImages/img28.png"}
                            alt="Image"
                            width={10}
                            height={10}
                        />
                        <span className="text-orange-500">Menu</span>

                    </div>
                </div>
            </div>
        </>
    );
}