import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeaderHero from "./Resturant/Header-hero/page";
import AboutUs from "./Resturant/About-us/page";
import FoodCategory from "./Resturant/Food-Category/page";
import WhyChooseUs from "./Resturant/Why-ChooseUs/page";
import Client from "./Resturant/Clients/page";
import OurMenu from "./Resturant/OurMenu/page";
import MeetOurChefs from "./Resturant/MeetOurChefs/page";
import Testmonials from "./Resturant/Testimonials/page";
import Blog from "./Resturant/Blog/page";
import RestrainedCreativeProcess from "./Resturant/Restraind-Creative-Process/page";
export default function Home() {
  return (
    <>
<div className="w-screen h-screen space-y-14 px-2 sm-px2 md-px-2 lg:px-2 xl-px-2">
  <Header />
  <HeaderHero />
  <AboutUs />
  <FoodCategory />
  <WhyChooseUs />
  <Client />
  <OurMenu />
  <MeetOurChefs />
  <Testmonials />
  <RestrainedCreativeProcess />
  <Blog />
  <Footer />
</div>
    
    </>
  );
}
