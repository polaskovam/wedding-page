import React from "react";
import Title from "./Title";

function Ceremony(props) {
    return (
        <div className="container ceremony" id="ceremony">
            <div className="title">
                <Title name={"Obřad"} windowWidth={props.windowWidth} />
            </div>
            <div className="row ceremony-row">
                <div className="col col-12 col-md-6">
                    <h3 className="passion small-title">Dresscode</h3>
                </div>
                <div className="col col-12 col-md-6 montserrat">
                    <div className="ceremony-text">
                        <h5>Prosíme stylizujte své oblečení do barev: bílá, černá, pastelová</h5>
                        <h5>Obřad bude probíhat částečně na zahradě, zvolte tedy vhodnou obuv</h5>
                    </div>
                </div>
            </div>
            <div className="row ceremony-row">
                <div className="col col-12 col-md-6">
                    <h3 className="passion small-title">Místo konání</h3>
                </div>
                <div className="col col-12 col-md-6 montserrat">
                    <div className="ceremony-text-2">
                        <h5>La Donuteria</h5>
                        <h6>17. listopadu 342, Pardubice</h6>
                    </div>
                </div>
            </div>
            <div className="row iframe-row">
                <div className="col iframe">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20505.341378916757!2d15.77701255!3d50.026953899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470dcd87181a5261%3A0x3cbb63dbab1d0a7a!2sLa%20Donuteria%20Pardubice!5e0!3m2!1scs!2scz!4v1697619547249!5m2!1scs!2scz"
                        width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Ceremony;