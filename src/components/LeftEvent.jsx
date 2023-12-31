import React from "react";

function LeftEvent(props) {
    return (
        <div className="row event-row">
            <div className="col col-12 col-lg-6 left content">
                <div className="space">
                <h2 className="passion">{props.description}</h2>
                <h3 className="montserrat">{props.time}</h3>
                <p className="montserrat">Lorem ipsum..</p>
                </div>
            </div>
            <div className="col col-12 col-lg-6 right cake">
                <img src="/images/cake.jpg" alt="Green cake" />
            </div>
        </div>
    )
}

export default LeftEvent;