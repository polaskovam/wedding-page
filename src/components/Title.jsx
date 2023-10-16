import React from "react";
import CasinoIcon from "@mui/icons-material/Casino";

function Title(props) {
    return(
        <h1 className="passion"><CasinoIcon
            sx={{
                width: "40px",
                height: "40px",
                marginRight: "30px",
                verticalAlign: "initial"
            }}
        />{props.name}<CasinoIcon
            sx={{
                width: "40px",
                height: "40px",
                marginLeft: "30px",
                verticalAlign: "initial"
            }}/></h1>

    )
}

export default Title;