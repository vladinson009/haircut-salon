import About from "./about/About";
import Carousel from "./carousel/Carousel";
import Price from "./price/Price";
import Service from "./service/Service";
import Team from "../team/Team";
import Testimonial from "../testimonial/Testimonial";
import WorkingHours from "./working-hours/WorkingHours";

export default function HomePage(): React.ReactElement { 

    return (
        <>
         <Carousel />
      <About />
      <Service />
      <Price />
      <Team />
      <WorkingHours />
      <Testimonial />
        </>
    )
}