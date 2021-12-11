import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { ShopCartContext } from '../../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const {cart, total, removeItem, changeQty} = useContext(ShopCartContext)

    return(
        <div className="container">
            <div className="card shop-cart">
                <ul className="list-group">
                    <li className="list-group-item card">
                        <div className="row">
                            <h5 className="col-xl-2  col-lg-2">Imagen</h5>
                            <h5 className="col-xl-2  col-lg-2">Nombre</h5>
                            <h5 className="col-xl-2  col-lg-2">Precio Unitario</h5>
                            <h5 className="col-xl-3  col-lg-3">Cantidad</h5>
                            <h5 className="col-xl-2  col-lg-2">Subtotal</h5>
                        </div>
                    </li>
                    {cart.map(it => <CartItem key={it.id} id={it.id} title={it.title} price={it.price} subTotal={it.subTotal} pictureUrl={it.image} cantidad={it.cantidad} changeQty={changeQty} removeItem={removeItem}/>)}
                    <li className="list-group-item">
                        <p>El total de su compra es <strong>$ {total}</strong></p>
                    </li>
                </ul>
            </div>
            {cart.length === 0 ?
                <></>
                :
                <div className='finish'>
                    <Link to={"/buying"} className="btn btn-primary col-lg-1 col-xl-1 finish-btn">Finalizar compra</Link>
                </div>
            }
        </div>
    )
}

export default Cart;