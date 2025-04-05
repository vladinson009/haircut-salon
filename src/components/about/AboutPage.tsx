import Team from "../team/Team";
import About from "./About";
import PageHeader from "./page-header/PageHeader";

export default function AboutPage(): React.ReactElement { 

    return (
        <>
            <PageHeader />
            <About />
            <Team />

        </>
    )
}