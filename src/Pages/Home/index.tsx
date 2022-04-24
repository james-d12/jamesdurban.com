import Hero from "Containers/Hero";
import Header from "Containers/Header";
import Skills from "Containers/Skills";
import Project from "Containers/Project";
import Footer from "Containers/Footer";

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Project />
                <Skills />
            </main>
            <Footer />
        </>
    )
}

export default HomePage