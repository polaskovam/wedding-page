import React from "react";
import Title from "./Title";

function About(props) {
    return (
        <div className="container about-container" id="aboutUs">
            <div className="row">
                <div className="col title">
                    <Title name={"O nás"} windowWidth={props.windowWidth} />
                </div>
            </div>
            <div className="row row-cols-2 photo-row">
                <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="about-text-1">
                        <h2 className="passion">Annie</h2>
                        <p className="montserrat">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla
                            non arcu lacinia neque
                            faucibus fringilla. Aliquam ante. Phasellus rhoncus. Fusce tellus. Duis condimentum
                            augue id magna semper rutrum. Praesent in mauris eu tortor porttitor accumsan. Integer
                            tempor. Quisque porta. Mauris dictum facilisis augue.</p>
                    </div>
                </div>
                <div className="col-12 photo col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <img src="/images/portrait-1.webp" alt="Young women"/>
                </div>
            </div>
            <div className="row photo-row">
                <div className="col-12 photo col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <img src="/images/portrait-2.jpeg" alt="Young women"/>
                </div>
                <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                    <div className="about-text-2">
                        <h2 className="passion">Marťa</h2>
                        <p className="montserrat">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla
                            non arcu lacinia neque
                            faucibus fringilla. Aliquam ante. Phasellus rhoncus. Fusce tellus. Duis condimentum
                            augue id magna semper rutrum. Praesent in mauris eu tortor porttitor accumsan. Integer
                            tempor. Quisque porta. Mauris dictum facilisis augue.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;