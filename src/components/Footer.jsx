import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return(
        <div className="footer passion">
            <h1>{year}</h1>
        </div>
    )
}

export default Footer;