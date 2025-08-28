
import TopSection from "./home/TopSection";
import HomeAboutDw from "./home/HomeAboutDw";
import OurServices from "./home/our-services";
import WeProvideSupport from "./common/we-provide-support";
import HowWeWork from "./common/how-we-work";
import Faq from "./common/Faq";
import Testimonial from "./common/testimonial";
import OurClient from "./common/OurClient";


export default function Home() {
 
  return (
    <>
      
      <main>
          <TopSection/>
          {/* <OurClient/> */}
          <OurServices slice={4}/>
          <HomeAboutDw/>
          <WeProvideSupport/>
          <div className="bg-[#322854] clipPath pb-40 pt-10 text-[#ffffff]">
            <HowWeWork/>
          </div>
          {/* <Testimonial/> */}
          <div className="mt-5">
            <Faq/>
          </div>
      </main>
    </>
  );
}
