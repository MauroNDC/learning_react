import React, {useContext} from 'react';
import { ShopCartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart, total} = useContext(ShopCartContext)
    console.log(cart);
    return(
        <div className="container">
            <div className="card shop-cart">
                {cart.map(it => 
                    <div>
                        <img src={it.image} alt="" className="cart-mini-img" />
                        <p>Ha comprado {it.cantidad} de {it.title}. el subTotal es: {it.subTotal} {it.pictureUrl}</p> 
                    </div> 
                    )}
                <p>El total de su compra es <strong>$ {total}</strong></p>
            </div>
        </div>
    )
}

export default Cart;