import React from 'react' 
import { Link } from 'react-router-dom'

const ItemDetail = ({pictureUrl, title, description, price}) => 
    <section className="mb-5">
       <div className="card mb-3 item-detail">
            <div className="row g-0 card-mod">
                <div className="col-md-4">
                    <img src={pictureUrl} className="img-fluid rounded-start" alt="Imagen del producto" />
                </div>
                <div className="col-md-8 card-body-mod">
                    <div className="card-body">
                        <h4 className="card-title item-title">{title}</h4>
                        <p className="card-text item-desc">{description}</p>
                        <p><strong>$ {price}</strong></p>
                        <Link to= {"/"} className="btn btn-primary"> Agregar al Carrito</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default ItemDetail;