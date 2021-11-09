import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Item = ({id, pictureUrl, title, description, price}) => 
            <NavLink to={`item/${id}`}><div className="card item-card d-inline-block">
                    <img src={pictureUrl} className="card-img-top img-thumbnail" alt="Imagen del producto" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <Link to={"/"} className="btn btn-primary"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                        </svg></span> Agregar al Carrito</Link>
                    </div>
                </div>
            </NavLink>

export default Item;