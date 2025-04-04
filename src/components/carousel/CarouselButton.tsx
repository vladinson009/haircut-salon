interface CarouselButtonProps {
    value: string;
    action: string
}
export default function CarouselButton({ value, action }: CarouselButtonProps): React.ReactElement {
    return (
          <button className={`carousel-control-${action}`} type="button" data-bs-target="#header-carousel"
                data-bs-slide={action}>
                <span className={`carousel-control-${action}-icon`} aria-hidden="true"></span>
                <span className="visually-hidden">{value}</span>
            </button>
    )
}