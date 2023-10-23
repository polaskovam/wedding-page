import React, {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Ceremony from "./components/Ceremony";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer"

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <NavBar windowWidth={windowWidth} />
            <Header/>
            <About windowWidth={windowWidth} />
            <Timeline windowWidth={windowWidth} />
            <Ceremony windowWidth={windowWidth} />
            <Gallery windowWidth={windowWidth} />
            <Rsvp windowWidth={windowWidth} />
            <Footer/>
        </div>
    );
}

export default App;
