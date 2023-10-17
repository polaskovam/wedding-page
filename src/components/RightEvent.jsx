import React from "react";

function RightEvent(props) {
    return(
        <div className="row event-row">
            <div className="col right cake">
                <img src="/images/cake.jpg" alt="Green cake" />
            </div>
            <div className="col content right">
                <div className="space">
                    <h2 className="passion">{props.description}</h2>
                    <h3 className="montserrat">{props.time}</h3>
                    <p className="montserrat">Lorem ipsum..</p>
                </div>
            </div>

        </div>
    )
}

export default RightEvent;