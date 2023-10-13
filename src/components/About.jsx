import React from "react";
import CasinoIcon from "@mui/icons-material/Casino";

function About() {
    return (
        <div className="container about-container">
            <div>
                <div className="row">
                    <div className="col title">
                        <h1 className="passion"><CasinoIcon
                            sx={{
                                width: "40px",
                                height: "40px",
                                marginRight: "30px",
                                verticalAlign: "initial"
                            }}
                        />O nás<CasinoIcon
                            sx={{
                                width: "40px",
                                height: "40px",
                                marginLeft: "30px",
                                verticalAlign: "initial"
                            }}/></h1>
                    </div>
                </div>
                <div className="row row-cols-2 photo-row">
                    <div className="col">
                        <div className="about-text-1">
                            <h2 className="passion">Annie</h2>
                            <p className="montserrat">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla
                                non arcu lacinia neque
                                faucibus fringilla. Aliquam ante. Phasellus rhoncus. Fusce tellus. Duis condimentum
                                augue id magna semper rutrum. Praesent in mauris eu tortor porttitor accumsan. Integer
                                tempor. Quisque porta. Mauris dictum facilisis augue.</p>
                        </div>
                    </div>
                    <div className="col photo">
                        <img src="/images/portrait-1.webp" alt="Photo of a women"/>
                    </div>
                </div>
                <div className="row photo-row">
                    <div className="col photo">
                        <img src="/images/portrait-2.jpeg" alt="Photo of a women"/>
                    </div>
                    <div className="col">
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
        </div>
    )
}

export default About;