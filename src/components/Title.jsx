import React from "react";
import CasinoIcon from "@mui/icons-material/Casino";

function Title(props) {
    return(
        <h1 className="passion">
        {props.windowWidth > 767 && (
            <CasinoIcon
                sx={{
                    width: "40px",
                    height: "40px",
                    marginRight: "30px",
                    verticalAlign: "initial",
                }}
            />
        )}
        {props.name}
        {props.windowWidth > 767 && (
            <CasinoIcon
                sx={{
                width: "40px",
                height: "40px",
                marginLeft: "30px",
                verticalAlign: "initial",
            }}
        />
        )}
        </h1>
    )
}

export default Title;