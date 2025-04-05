interface CarouselItemProps {
    image: string;
    title: string;
    subtitle: string;
    phone: string;
    active: boolean;
}
export default function CarouselItem({ image, title, subtitle,phone, active }: CarouselItemProps): React.ReactElement {
    return (
        <div className={`carousel-item ${active && 'active'}`}>
                    <img className="w-100" src={image} alt="Image"/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                        <div className="mx-sm-5 px-5" style={{ maxWidth: '900px' }}>
                            <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">{title}</h1>
                            <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-map-marker-alt text-primary me-3"></i>{subtitle}</h4>
                            <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-phone-alt text-primary me-3"></i>{phone}</h4>
                        </div>
                    </div>
                </div>
    )
}