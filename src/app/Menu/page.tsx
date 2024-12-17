import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeroHeader from "./HeroHeader";
import Header2 from "@/components/layout/Header2";
import StarterMenu from "./Starter-Menu/page";

export default function Menu() {
    return (
        <>
            <div className="w-screen h-screen">
                <Header2 />
                <HeroHeader />
                <StarterMenu />
                <Footer />
            </div>

        </>
    );
}