import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row center text-center">
                <div className="col-lg-12 col-xl-12">
                    <div className="well well-lg contact-form ml-10">
                        <form className="form-horizontal" method="post">
                            <fieldset>
                                <h2 className="text-center header">Contáctenos</h2>

                                <div className="form-group">
                                    <div className="col-lg-8 col-xl-8">
                                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control" />
                                    </div>
                                </div><br />
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Apellido" className="form-control" />
                                    </div>
                                </div><br />

                                <div className="form-group">
                                    <div className="col-md-8">
                                        <input id="email" name="email" type="text" placeholder="Email" className="form-control" />
                                    </div>
                                </div><br />

                                <div className="form-group">
                                    <div className="col-md-8">
                                        <input id="phone" name="phone" type="text" placeholder="Teléfono" className="form-control" />
                                    </div>
                                </div><br />

                                <div className="form-group">
                                    <div className="col-md-8">
                                        <textarea className="form-control" id="message" name="Mensaje" placeholder="Escríbanos su mensaje. Responderemos dentro de las 48hs." rows="7"></textarea>
                                    </div>
                                </div><br />

                                <div className="form-group">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;