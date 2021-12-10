import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import db from '../../firebase/firebase';
import {collection, getDocs} from 'firebase/firestore';

const ItemListContainer = ({brand}) => {
    //Lista de items
    const [items, setItems] = useState([]);
    const [cat, setCat] = useState('todos')

    const filtering = (props) => {
        setCat(props.target.value)
    }

    useEffect(() => {
        const myItems = collection(db, 'items');

        getDocs(myItems).then(res => {
            const results = res.docs.map(doc => {
                return {...doc.data(), id: doc.id};
            });
            cat === 'todos' ?
            setItems(results) :
            setItems(results.filter(res => res.categoria === cat))
        })
    }, [cat]);
    

    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '5rem', color: 'var(--orange)'}}>¡Bienvenido a <strong>{brand}!</strong></h1>
            <br />
            <div className="row">
                <h2 className="sub-title">Lista de Herramientas</h2>
            </div>
            <div className="row">
                    <select className="cat-filter col-xl-2 col-lg-2" defaultValue={"todos"} name="catFilter" id="catFilter" onChange={filtering}>
                        <option value="todos" selected>Todas</option>
                        <option value="manual">Herramientas manuales</option>
                        <option value="electrica">Herramientas eléctricas</option>
                    </select>
            </div>
            <ItemList items={items}/>
        </>
    );
}

export default ItemListContainer;