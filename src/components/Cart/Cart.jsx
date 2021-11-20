import React, {useContext} from 'react';
import { ShopCartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart, cantidad, total} = useContext(ShopCartContext)
    console.log(cart);
    return(
        <div>
            {cart.map(it => <p>Ha comprado {it.cantidad} de {it.title}. el subTotal es: {it.subTotal}</p>)}
            <p>El total de su compra es <strong>$ {total}</strong></p>
        </div>
    )
}

export default Cart;