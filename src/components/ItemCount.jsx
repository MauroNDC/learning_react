import React, {useState} from 'react';

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.stock);
    const [qty, setQty] = useState(0);

    const removeItem = () => {

    }

    const changeQty = (add) => {
        if(add){
            if(stock > 0) {
                setQty(qty +1)
                setStock(stock -1)
            }
        } else if (qty > 1) {
            setQty(qty -1)
            setStock(stock +1)
        } else {
            removeItem()
        }
    }

    return(
        <div className="flex justify-center items-center">
            <div className="item-detail_qty flex">
                <button className="btn btn-primary" onClick={() => changeQty(false)}>-</button>
                <p>{qty}</p>
                <button className="btn btn-primary" onClick={() => changeQty(true)}>+</button>
            </div>
            <br />
            <div className="detail-cart-button">
                <button className="btn btn-primary" onClick={() => props.addItem(qty)}> Agregar al Carrito</button>
            </div>
            <div>
                <p>El stock disponible es: {stock}</p>
            </div>
        </div>
    )
}

export default ItemCount;