import React, { useState } from 'react';

const ShopCartContext = React.createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const adding = (item, qty) => {
        if(cart.length){
            const inCart = cart.find(it => it.id === item.id)
            if (!inCart){
                setCart([...cart, {id: item.id, title: item.title, precio: item.precio, cantidad: qty, subTotal: (item.price*qty)}])
                setTotal(total+(item.precio*qty))
                setCantidad(cantidad+1)
            } else {
                const cartAux = cart.map((i) => {
                    if(i.id === item.id){
                        i.qty+=qty;
                        i.subTotal+=(item.precio*qty)
                    }
                    return i;
                })
                setCart(cartAux);
                setTotal(total+(item.precio*qty));
            }
        }
    }

    return(
        <ShopCartContext.Provider value={{cart, cantidad, total, adding}}>
            {children}
        </ShopCartContext.Provider>
    )
}

export {CartContext, ShopCartContext}