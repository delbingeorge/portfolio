// Utilities
import FaviconIcon from "../src/media/icons/favicon.png";
import Favicon from "react-favicon";

import "./App.css";
import Main from "./pages/Main";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Nav from "./pages/Nav";
import Skills from "./pages/Skills";
import Achieve from "./pages/Achieve";

function App() {
    return (
        <div className="App">
            <Favicon url={FaviconIcon}></Favicon>
            <Nav />
            <Main />
            <About />
            <Projects />
            <Achieve />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
