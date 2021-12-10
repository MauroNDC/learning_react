import React from 'react';

const Footer = () => {
    return(
    
    <div className="footer">
        <div className="row footer-form">
            <label className='col-lg-2 col-xl-2' htmlFor="footer-form"> Suscríbase a nuestro NewsLetter  </label>
            <input type="text" name="footer-form" id="footer-form" placeholder='Ingrese su mail' className='col-lg-3 col-xl-3' />
            <input type="button" value="Enviar" className='col-lg-1 col-xl-1 btn btn-primary'/>
        </div>
    </div>
    )
}

export default Footer;