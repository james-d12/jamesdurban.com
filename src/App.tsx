import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "Containers/Hero";
import Header from "Containers/Header";
import Skills from "Containers/Skills";
import Project from "Containers/Project";
import Footer from "Containers/Footer";
import NotFound from "Containers/NotFound";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='*' element={<NotFound />} />
                <Route path="/" element={
                    <>
                        <Header />
                        <main>
                            <Hero />
                            <Project />
                            <Skills/>
                        </main>
                        <Footer/>
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App;