import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "Containers/Hero";
import Header from "Containers/Header";
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
                        <Hero />
                        <Project />
                        <Footer/>
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App;