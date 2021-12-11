import React, { useState, useContext } from 'react';
import { ShopCartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import db from './../../firebase/firebase'

const BuyingForm = () => {
    const {cart, total} = useContext(ShopCartContext)
    const [userData, setUserData] = useState({})
    const [message, setMessage] = useState(false)

    const orders = collection(db, 'orders');

    const newOrder = {
        buyer: userData,
        items: cart.map(item => item),
        total: total
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(orders, newOrder)
        setMessage(true)
    }

    return(
        <div className="buying-form">
            <h2>Por favor complete el formulario para finalizar la compra</h2>
            <form action="" method="get" className="text-center justify-center" onSubmit={handleSubmit}>
                <div className="form-group col-lg-6 col-xl-6 col-md-6">
                    <label htmlFor="exampleInputEmail1">Ingrese su nombre y apellido</label>
                    <input type="text" onChange={handleChange} className="form-control" name="name" value={userData.name || ''} placeholder="Nombre y Apellido" />
                    <small id="emailHelp" className="form-text text-muted">Compo Obligatorio</small>
                </div>
                <div className="form-group  col-lg-6 col-xl-6 col-md-6">
                    <label htmlFor="exampleInputEmail1">Ingrese su mail</label>
                    <input type="email" onChange={handleChange} className="form-control" name="email" value={userData.email || ''} placeholder="ejemplo@mail.com" />
                    <small id="emailHelp" className="form-text text-muted">Campo Obligatorio</small>
                </div>
                <div className="form-group  col-lg-6 col-xl-6 col-md-6">
                    <label htmlFor="exampleInputEmail1">Ingrese su número de teléfono</label>
                    <input type="phone" onChange={handleChange} className="form-control" name="phone" value={userData.phone || ''} placeholder="11-XXXX-XXXX" />
                    <small id="emailHelp" className="form-text text-muted">Campo Obligatorio</small>
                </div>
                <button type="submit" className="btn btn-primary">Comprar</button>
            </form>

            {!message? 
                <></>
                :
                <div className='final-message'>
                    <p>Su pedido ha sido procesado. Gracias por su compra!</p>
                </div>
            }
        </div>
    )
}

export default BuyingForm;