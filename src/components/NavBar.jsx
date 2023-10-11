import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-light mx-auto">
            <div className="container-fluid justify-content-center">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item r-margin">
                            <a className="nav-link" aria-current="page" href="#">O nás</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Harmonogram</a>
                        </li>
                        <a className="navbar-brand " href="#">Annie & Marťa</a>
                        <li className="nav-item r-margin">
                            <a className="nav-link " href="#">Obřad</a>
                        </li>
                        <li className="nav-item r-margin">
                            <a className="nav-link " href="#">Galerie</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="#">RSVP</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;