import React, {useEffect, useState} from "react";
import Title from "./Title";


function Rsvp(props) {
    const [form, setForm] = useState({
        name: "",
        surname: "",
        tel: "",
        email: "",
        attending: "",
        allergy: "",
        addAllergy: "",
        song: "",
        artist: ""
    })
    const [inputState, setInputState] = useState(false);

    useEffect(() => {
        console.log(form);
    }, [form]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    return (
        <div className="container rsvp" id="rsvp" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col title">
                    <Title name={"RSVP"} windowWidth={props.windowWidth} />
                </div>
            </div>
            <div className="form-container">
                <div className="sub-title">
                    <h4 className="montserrat">Prosíme o potvrzení účasti na naší svatbě</h4>
                </div>

                {/*    Start of a form*/}
                <div className="rsvp-form montserrat">
                    <div className="row grid column-gap-5">
                        <div className="col col-12 form-floating input-form">
                            <input type="text" name="name" value={form.name} onChange={handleChange}
                                   className="form-control" id="inputName" placeholder="Jméno"
                                   aria-label="First name"/>
                            <label htmlFor="inputName">Jméno</label>
                        </div>
                        <div className="col col-12 form-floating input-form">
                            <input type="text" name="surname" value={form.surname} onChange={handleChange}
                                   className="form-control" id="inputSurname" placeholder="Příjmení"
                                   aria-label="Last name"/>
                            <label htmlFor="inputSurname">Příjmení</label>
                        </div>
                    </div>
                    <div className="row grid column-gap-5">
                        <div className="col col-12 form-floating input-form">
                            <input type="text" name="tel" value={form.tel} onChange={handleChange}
                                   className="form-control"
                                   id="inputPhone" placeholder="Telefonní číslo"
                                   aria-label="Phone number"/>
                            <label htmlFor="inputPhone">Telefonní číslo</label>
                        </div>
                        <div className="col col-12 form-floating input-form">
                            <input type="email" name="email" value={form.email} onChange={handleChange}
                                   className="form-control" id="inputEmail" placeholder="email@email.cz"
                                   aria-label="email@email.cz"/>
                            <label htmlFor="inputEmail">Email</label>
                        </div>
                    </div>
                    {/*Accept x deny*/}
                    <div className="row grid column-gap-5">
                        <div className="col col-12 radio">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="yes"
                                       checked={form.attending === "yes"} onChange={handleChange} name="attending"
                                       id="accept"/>
                                <label className="form-check-label" htmlFor="accept">
                                    s radostí přijímám
                                </label>
                            </div>
                        </div>
                        <div className="col col-12 radio">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="no"
                                       checked={form.attending === "no"} onChange={handleChange} name="attending"
                                       id="deny"/>
                                <label className="form-check-label" htmlFor="deny">
                                    nemohu se účastnit
                                </label>
                            </div>
                        </div>
                    </div>
                    {/*    Food*/}
                    <div className="row grid column-gap-5">
                        <div className="col col-12 food">
                            <h5> Stravovací omezení</h5>
                            <p>Alergie, intolerance, ...</p>
                        </div>
                        <div className="col col-12 radio">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="yes"
                                       checked={form.allergy === "yes"} onChange={handleChange} name="allergy"
                                       id="yes" onClick={() => {
                                    setInputState(true)
                                }}/>
                                <label className="form-check-label" htmlFor="yes">
                                    mám
                                </label>
                            </div>
                        </div>
                        <div className="col col-12 radio">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="no" checked={form.allergy === "no"}
                                       onChange={handleChange} name="allergy"
                                       id="no" onClick={() => {
                                    setInputState(false)
                                }}/>
                                <label className="form-check-label" htmlFor="no">
                                    nemám
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row grid column-gap-5">
                        <div className="col col-12">
                            {inputState && (
                                <div className="form-floating">
                                    <textarea className="form-control" name="addAllergy" value={form.addAllergy}
                                              onChange={handleChange} placeholder="Upřesněte prosím omezení"
                                              id="foodRestrictions"></textarea>
                                    <label htmlFor="foodRestrictions">Upřesněte prosím omezení</label>
                                </div>
                            )}
                        </div>

                    </div>
                    {/*    Song*/}
                    <div className="row grid column-gap-5">
                        <div className="col col-12 food">
                            <h5>Písnička, která mě dostane na parket</h5>
                        </div>
                        <div className="col col-12 form-floating input-form">
                            <input type="text" name="song" value={form.song} onChange={handleChange}
                                   className="form-control" id="inputSong" placeholder="Název písničky"
                                   aria-label="Song name"/>
                            <label htmlFor="inputSong">Název písničky</label>
                        </div>
                        <div className="col col-12 form-floating input-form">
                            <input type="text" name="artist" value={form.artist} onChange={handleChange}
                                   className="form-control" id="inputArtist" placeholder="Zpěvák nebo skupina"
                                   aria-label="Artist name"/>
                            <label htmlFor="inputArtist">Zpěvák nebo skupina</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col btn-center">
                            <button type="button" className="btn btn-lg button">Odeslat RSVP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rsvp;