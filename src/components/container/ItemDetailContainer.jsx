import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import db from '../../firebase/firebase';
import {doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {itemId} = useParams();

    useEffect(() => {
        const myItem = doc(db, 'items', itemId)

        getDoc(myItem).then(res => {
            const result = { id: res.id, ...res.data() };
            setItem(result);
        });
    }, [itemId]);
    return(
            <ItemDetail key={item.id} id={item.id} pictureUrl={item.pictureUrl} title={item.title} description={item.description} price={item.price} item={item} stock={item.stock}/>
    )
}

export default ItemDetailContainer;
