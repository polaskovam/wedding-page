import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Ceremony from "./components/Ceremony";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <About/>
            <Timeline/>
            <Ceremony/>
            <Gallery/>
            <Rsvp/>
            <Footer/>
        </div>
    );
}

export default App;
