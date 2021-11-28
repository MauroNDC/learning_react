import React, { useState } from 'react';

const ShopCartContext = React.createContext([]);

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cant, setCant] = useState(0)

    const adding = (item, qty) => {
        const inCart = cart.find(it => it.id === item.id)
        setCant(cant + qty)
        if (!inCart){
            setCart([...cart, {id: item.id, title: item.title, image: item.pictureUrl, price: item.price, cantidad: qty, subTotal: (item.price*qty)}])
            setTotal(total+(item.price*qty))
        } else {
            const cartAux = cart.map((i) => {
                if(i.id === item.id){
                    i.cantidad+=qty;
                    i.subTotal+=(item.price*qty)
                    setTotal(total+(item.price*i.cantidad))
                }
                return i;
            })
            setCart(cartAux);
            
        }
    }

    const changeQty = (changeBool, cantidadArg, idArg) => {
        if(changeBool){
            const cartAuxTwo = cart.map(it => {
                if(it.id === idArg){
                    it.cantidad+=1;
                    it.subTotal+=(it.price)
                    setTotal(total+it.price)
                }
                return it;
            })
            setCart(cartAuxTwo);
        } else if(cantidadArg === 1){
            removeItem(idArg)
        } else{
            const cartAuxTwo = cart.map(it => {
                if(it.id === idArg){
                    it.cantidad-=1;
                    it.subTotal-=(it.price)
                    setTotal(total-it.price)
                }
                return it;
            })
            setCart(cartAuxTwo);
        }
    }

    const removeItem = (idArg) => {
        setCart(cart.filter(it => it.id !== idArg))
        setTotal(total-((cart.find(it => it.id === idArg).price)))
    }

    return(
        <ShopCartContext.Provider value={{cart, total, cant, adding, removeItem, changeQty}}>
            {children}
        </ShopCartContext.Provider>
    )
}

export {CartContext, ShopCartContext}