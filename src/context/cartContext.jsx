import React, { useState } from 'react';

const ShopCartContext = React.createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)

    const adding = (item, qty) => {
        const inCart = cart.find(it => it.id === item.id)
        if (!inCart){
            setCart([...cart, {id: item.id, title: item.title, image: item.pictureUrl, precio: item.price, cantidad: qty, subTotal: (item.price*qty)}])
            setTotal(total+(item.price*qty))
            console.log(cart.image)
            setCantidad(cantidad+1)
        } else {
            const cartAux = cart.map((i) => {
                if(i.id === item.id){
                    i.cantidad+=qty;
                    i.subTotal+=(item.price*qty)
                    setTotal(total+(item.price*qty))
                }
                return i;
            })
            setCart(cartAux);
            
        }
    }

    return(
        <ShopCartContext.Provider value={{cart, total, adding}}>
            {children}
        </ShopCartContext.Provider>
    )
}

export {CartContext, ShopCartContext}