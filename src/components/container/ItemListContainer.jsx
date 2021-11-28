import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import db from '../../firebase/firebase';
import {collection, getDocs} from 'firebase/firestore';

const ItemListContainer = ({brand}) => {
    //Lista de items
    const [items, setItems] = useState([]);

    useEffect(() => {
        const myItems = collection(db, 'items');

        getDocs(myItems).then(res => {
            const results = res.docs.map(doc => {
                return {...doc.data(), id: doc.id};
            });
            setItems(results);
        })
    }, []);

    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '5rem', color: 'var(--orange)'}}>¡Bienvenido a <strong>{brand}!</strong></h1>
            <ItemList items={items}/>
        </>
    );
}

export default ItemListContainer;