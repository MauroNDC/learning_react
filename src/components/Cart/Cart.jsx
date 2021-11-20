import React, {useContext} from 'react';
import { ShopCartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart, stock, total} = useContext(ShopCartContext)
    console.log(cart);
    return(
        <p>Los objetos en el carrito son: {cart} y el stock es: {stock}</p>
    )
}

export default Cart;