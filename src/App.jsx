import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";

function App() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <About/>
            <Timeline/>
        </div>
    );
}

export default App;
