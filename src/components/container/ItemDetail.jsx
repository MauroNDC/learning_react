import React, {useState, useContext} from 'react' ;
import { Link } from 'react-router-dom';
import { ShopCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';

const ItemDetail = ({id, pictureUrl, title, description, price, stock}) => {
    const [buy, setBuy] = useState(false);

    const {adding} = useContext(ShopCartContext);

    const addingItem = (cantidad) => {
        setBuy(true);
        adding({id, title, price, pictureUrl}, cantidad);
    }

    return(
    <section className="mb-5">
       <div className="card mb-3 item-detail col-xl-12 ml-0">
            <div className="row g-0 card-mod">
                <div className="col-md-5 border">
                    <img src={pictureUrl} className="img-fluid rounded-start" alt="Imagen del producto" />
                </div>
                <div className="col-md-6 card-body-mod">   
                    <div className="card-body">
                        <h4 className="card-title item-title">{title}</h4>
                        <p className="card-text item-desc">{description}</p>
                        <p><strong>$ {price}</strong></p>
                        <div>
                            {!buy? <ItemCount stock={stock} addItem={addingItem} /> : <Link to={'/cart'}>Terminar compra</Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}
export default ItemDetail;