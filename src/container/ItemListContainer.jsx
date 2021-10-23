import React from 'react';
import ItemList from '../components/ItemList';

const ItemListContainer = (props) => {
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '5rem', color: 'var(--orange)'}}>¡Bienvenido a <strong>{props.brand}!</strong></h1>
            );
            <ItemList/>
        </>);
};

export default ItemListContainer;