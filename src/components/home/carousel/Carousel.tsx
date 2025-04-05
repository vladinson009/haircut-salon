import CarouselButton from "./CarouselButton";
import CarouselItem from "./CarouselItem";

export default function Carousel(): React.ReactElement { 

    return ( <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <CarouselItem image="/img/carousel-1.jpg" title="We Will Keep You An Awesome Look" subtitle="123 Street, New York, USA" phone="+012 345 67890" active={true} />
                <CarouselItem image="/img/carousel-2.jpg" title="Luxury Haircut at Affordable Price" subtitle="123 Street, New York, USA" phone="+012 345 67890" active={false} />
            </div>
            <CarouselButton value="Previous" action="prev" />
            <CarouselButton value="Next" action="next" />
        </div>
    </div>)
}