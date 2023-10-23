import React, {useEffect, useState} from "react";

function NavBar(props) {
    return (
        <nav className="navbar bg-dark navbar-expand-lg mx-auto" data-bs-theme="dark">
            <div className="container-fluid justify-content-center">
                {props.windowWidth <= 991 && (
                    <span className="navbar-brand main-brand passion">Annie <span
                        className="main-span">&</span> Marťa</span>
                )}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-underline montserrat">
                        <li className="nav-item r-margin">
                            <a className="nav-link" aria-current="page" href="#aboutUs">O nás</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#timeline">Harmonogram</a>
                        </li>
                        {props.windowWidth > 991 && (
                            <span className="navbar-brand main-brand passion">Annie <span
                                className="main-span">&</span> Marťa</span>
                        )}
                        <li className="nav-item r-margin">
                            <a className="nav-link" href="#ceremony">Obřad</a>
                        </li>
                        <li className="nav-item r-margin">
                            <a className="nav-link" href="#gallery">Galerie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#rsvp">RSVP</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;