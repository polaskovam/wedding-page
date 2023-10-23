import React from "react";
import Title from "./Title";
import LeftEvent from "./LeftEvent";
import RightEvent from "./RightEvent";

function Timeline(props) {
    return (
        <div className="container timeline" id="timeline">
            <div className="row">
                <div className="col title">
                    <Title name={"Harmonogram"} windowWidth={props.windowWidth} />
                </div>
            </div>
            <div className="row">
                <div className="container ruler">
                    <LeftEvent time={"11:30 - 12:30"}
                                description={"Wedding guest photos"}
                    />
                    <RightEvent time={"12:00"}
                               description={"First look"}
                    />
                    <LeftEvent time={"13:30"}
                                description={"Main ceremony"}
                    />
                    <RightEvent time={"14:15"}
                               description={"Lunch"}
                    />
                    <LeftEvent time={"15:00"}
                                description={"Photos of couple"}
                    />
                    <RightEvent time={"until midnight"}
                               description={"Party"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Timeline;