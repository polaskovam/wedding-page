import React from "react";
import Title from "./Title";


function Rsvp() {
    return (
        <div className="container rsvp">
            <div className="title">
                <Title name={"RSVP"}/>
            </div>
            <div className="sub-title">
                <h4 className="montserrat">Prosíme o potvrzení účasti na naší svatbě</h4>
            </div>

            {/*    Start of a form*/}
            <div className="rsvp-form montserrat">
                <div className="row grid column-gap-5">
                    <div className="col col-12 col-md-6 col-sm-12 form-floating input-form">
                        <input type="text" className="form-control" id="inputName" placeholder="Jméno"
                               aria-label="First name"/>
                        <label for="inputName">Jméno</label>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12 form-floating input-form">
                        <input type="text" className="form-control" id="inputSurname" placeholder="Příjmení"
                               aria-label="Last name"/>
                        <label for="inputSurname">Příjmení</label>
                    </div>
                </div>
                <div className="row grid column-gap-5">
                    <div className="col col-12 col-md-6 col-sm-12 form-floating input-form">
                        <input type="text" className="form-control" id="inputPhone" placeholder="Telefonní číslo"
                               aria-label="Phone number"/>
                        <label for="inputPhone">Telefonní číslo</label>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12 form-floating input-form">
                        <input type="email" className="form-control" id="inputEmail" placeholder="email@email.cz"
                               aria-label="email@email.cz"/>
                        <label for="inputEmail">Email</label>
                    </div>
                </div>
                {/*Accept x deny*/}
                <div className="row">
                    <div className="col col-12 col-md-6 col-sm-12">
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="accept"/>
                            <label className="form-check-label" for="accept">
                                s radostí přijímám
                            </label>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="deny"/>
                            <label className="form-check-label" for="deny">
                                nemohu se účastnit
                            </label>
                        </div>
                    </div>
                </div>
                {/*    Food*/}
                <div className="row">
                    <div className="col col-12 col-md-12 col-sm-12 food">
                        <h5> Stravovací omezení</h5>
                        <p>Alergie, intolerance, ...</p>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12">
                        <div className="form-check form-check-inline ">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="yes"/>
                            <label className="form-check-label" for="yes">
                                mám
                            </label>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="no"/>
                            <label className="form-check-label" for="no">
                                nemám
                            </label>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12">
                        <div className="form-floating">
                        <textarea className="form-control" placeholder="Upřesněte prosím omezení"
                                  id="foodRestrictions"></textarea>
                            <label for="foodRestrictions">Upřesněte prosím omezení</label>
                        </div>
                    </div>
                </div>
                {/*    Song*/}
                <div className="row grid column-gap-5">
                    <div className="col col-12 col-md-12 col-sm-12 food">
                        <h5>Písnička, která mě dostane na parket</h5>
                    </div>

                    <div className="col col-12 col-md-6 col-sm-12 form-floating input-form">
                        <input type="text" className="form-control" id="inputSong" placeholder="Název písničky"
                               aria-label="Song name"/>
                        <label for="inputSong">Název písničky</label>
                    </div>
                    <div className="col col-12 col-md-6 col-sm-12 form-floating input-form">
                        <input type="text" className="form-control" id="inputArtist" placeholder="Zpěvák nebo skupina"
                               aria-label="Artist name"/>
                        <label for="inputArtist">Zpěvák nebo skupina</label>
                    </div>
                </div>
                <div className="row ">
                    <div className="col btn-center ">
                        <button type="button" className="btn btn-lg button">Odeslat RSVP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rsvp;