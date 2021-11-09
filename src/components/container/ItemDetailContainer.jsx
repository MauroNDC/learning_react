import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {itemId} = useParams();

    useEffect(() => {
        const getItems = () =>  new Promise (resolve => {
            setTimeout(() => resolve(
                [
                    {id:'0', title:'Pinza', description: 'Es una pinza', price: 400, pictureUrl: 'IMG/pinza.jpg'},
                    {id:'1', title:'Alicate', description: 'Es una alicate', price: 350, pictureUrl: '/alicate.jpg'},
                    {id:'2', title:'Martillo', description: 'Es una martillo', price: 450, pictureUrl: '/martillo.jpg'},
                    {id:'3', title:'Destornillador', description: 'Es una destornillador', price: 300, pictureUrl: '/destornillador.jpg'},
                    {id:'4', title:'Taladro', description: 'Es un taladro', price: 10000, pictureUrl: '/taladro.jpg'},
                    {id:'5', title:'Moladora', description: 'Es una moladora', price: 12000, pictureUrl: '/moladora.jpg'}
                ]
            ), 2000);
        });

        getItems().then(res => {
            setItem(res.find(it => it.id === itemId));
            
        //.catch(res => {alert('Error al tratar de renderizar los productos')})
        });
    }, [itemId]);
    console.log(itemId);
    console.log(item);
    return(
        <ItemDetail key={item.id} id={item.id} pictureUrl={item.pictureUrl} title={item.title} description={item.description} price={item.price} />
    )
}

export default ItemDetailContainer;
