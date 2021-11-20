import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {itemId} = useParams();

    useEffect(() => {
        const getItems = () =>  new Promise (resolve => {
            setTimeout(() => resolve(
                [
                    {id:'0', title:'Pinza', description: 'Es una pinza', price: 400, pictureUrl: '/IMG/pinza.jpg', stock: 10},
                    {id:'1', title:'Alicate', description: 'Es una alicate', price: 350, pictureUrl: '/IMG/alicate.jpg', stock: 10},
                    {id:'2', title:'Martillo', description: 'Es una martillo', price: 450, pictureUrl: '/IMG/martillo.jpg', stock: 10},
                    {id:'3', title:'Destornillador', description: 'Es una destornillador', price: 300, pictureUrl: '/IMG/destornillador.jpg', stock: 10},
                    {id:'4', title:'Taladro', description: 'Es un taladro', price: 10000, pictureUrl: '/IMG/taladro.jpg', stock: 10},
                    {id:'5', title:'Moladora', description: 'Es una moladora', price: 12000, pictureUrl: '/IMG/moladora.jpg', stock: 10}
                ]
            ), 0);
        });

        getItems().then(res => {
            setItem(res.find(it => it.id === itemId));
            
        //.catch(res => {alert('Error al tratar de renderizar los productos')})
        });
    }, [itemId]);
    return(
        //<ShopCartContext.Provider>
            <ItemDetail key={item.id} id={item.id} pictureUrl={item.pictureUrl} title={item.title} description={item.description} price={item.price} item={item} stock={item.stock}/>
        //</ShopCartContext.Provider>
    )
}

export default ItemDetailContainer;
