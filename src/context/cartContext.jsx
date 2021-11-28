import React, { useState } from 'react';

const ShopCartContext = React.createContext([]);

/* Tengo un error que cuando apreto el botón de eliminar item si tengo más de 1 item no se me actualiza del todo el total.
y hay otro error en cuando toco el + y - se me guardan las cantidades, y no la cantidad que tengo en el input al apretar el botón de "agregar al carrito" */

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
            setCant(cant +1)
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
            setCant(cant -1)
            setCart(cartAuxTwo);
        }
    }

    const removeItem = (idArg) => {
        setCart(cart.filter(it => it.id !== idArg))
        setTotal(total-((cart.find(it => it.id === idArg).subTotal)))
        setCant(cant-((cart.find(it => it.id === idArg).cantidad)))
    }

    return(
        <ShopCartContext.Provider value={{cart, total, cant, adding, removeItem, changeQty}}>
            {children}
        </ShopCartContext.Provider>
    )
}

export {CartContext, ShopCartContext}