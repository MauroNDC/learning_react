import React from 'react';

const CartItem = ({id, title, price, subTotal, pictureUrl, cantidad, changeQty, removeItem}) => {

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-xl-2 col-lg-2">
                    <img src={pictureUrl} alt="" className="cart-mini-img" />
                </div>
                <h6 className="col-xl-2  col-lg-2">{title}</h6>
                <p className="col-xl-2  col-lg-2">{price}</p>
                <div className="col-xl-3  col-lg-3 row">
                    <span className="col-xl-4 col-lg-4" onClick={() => changeQty(false, cantidad, id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}} width="16" height="16" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </span>
                    <p className="col-xl-4 col-lg-4">{cantidad}</p>
                    <span className="col-xl-4 col-lg-4" onClick={() => changeQty(true, cantidad, id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{cursor: 'pointer'}} width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </span>
                </div>
                <p className="col-xl-2  col-lg-2">{subTotal}</p>
                <span className="col-xl-1 col-lg-1" onClick={() => removeItem(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{cursor: 'pointer'}} className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </span>
            </div>
        </li>
    )
}

export default CartItem;