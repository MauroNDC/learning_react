import React from 'react'

const ItemDetail = ({pictureUrl, title, description, price}) => 
    <section className="mb-5">
       <div className="card mb-3" style={{maxWidth: '1480px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={pictureUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><strong>${price}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default ItemDetail;