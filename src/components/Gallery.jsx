import React from "react";
import Title from "./Title";

function Gallery(props) {
    return(
        <div className="container gallery" id="gallery">
            <div className="title">
                <Title name={"Galerie"} windowWidth={props.windowWidth}/>
            </div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/gallery-photo.jpg" className="d-block w-100" alt="Wedding photo" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/gallery-photo.jpg" className="d-block w-100" alt="Wedding photo" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/gallery-photo.jpg" className="d-block w-100" alt="Wedding photo" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Gallery;