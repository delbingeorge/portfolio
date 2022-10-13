import FaviconIcon from "../src/media/icons/favicon.png";
import Favicon from "react-favicon";

import "./App.css";
import About from "./pages/About/About";
import Projects from "./pages/Project/Projects";
import Footer from "./pages/Footer/Footer";
import Skills from "./pages/Skills/Skills";
import Hero from "./pages/Hero/Hero";
import Gallery from "./pages/Gallery/Gallery";

function App() {
    return (
        <div className="App">
            <Favicon url={FaviconIcon}></Favicon>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
