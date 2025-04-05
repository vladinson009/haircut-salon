import Testimonial from "../testimonial/Testimonial";
import PageHeader from "./page-header/PageHeader";
import Service from "./Service";

export default function ServicePage(): React.ReactElement { 
    return (
        <>
            <PageHeader />
            <Service />
            <Testimonial/>
        </>
    )
}