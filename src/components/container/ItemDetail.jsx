import React from 'react'

const ItemDetail = ({items}) => 
    <section className="mb-5">
       <div className="card mb-3" style={{maxWidth: '1480px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={items.pictureUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{items.title}</h5>
                        <p className="card-text">{items.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </section>


export default ItemDetail;