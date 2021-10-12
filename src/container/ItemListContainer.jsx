import React from 'react';

const ItemListContainer = (props) => {
    return (
       <h1 style={{textAlign: 'center', marginTop: '5rem', color: 'var(--orange)'}}>¡Bienvenido a <strong>{props.brand}!</strong></h1>
    );
};

export default ItemListContainer;