import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({brand}) => {
    //Lista de items
    const [items, setItems] = useState([]);

    const getItems = () => new Promise (resolve => {
            setTimeout(() => resolve(
                [
                    {id:0, title:'Pinza', description: 'Es una pinza', price: 400, pictureUrl: 'IMG/pinza.jpg'},
                    {id:1, title:'Alicate', description: 'Es una alicate', price: 350, pictureUrl: 'IMG/alicate.jpg'},
                    {id:2, title:'Martillo', description: 'Es una martillo', price: 450, pictureUrl: 'IMG/martillo.jpg'},
                    {id:3, title:'Destornillador', description: 'Es una destornillador', price: 300, pictureUrl: 'IMG/destornillador.jpg'},
                    {id:4, title:'Taladro', description: 'Es un taladro', price: 10000, pictureUrl: 'IMG/taladro.jpg'},
                    {id:5, title:'Moladora', description: 'Es una moladora', price: 12000, pictureUrl: 'IMG/moladora.jpg'}
                ]
            ), 2000);
        });

    useEffect(() => {
        getItems().then(res => setItems(res))
        .catch(res => {alert('Error al tratar de renderizar los productos')})
    }, []);

    /*
    useEffect( ()  => {
        async function getData(){
            try{
                setItems(await getItems()) 
            }catch{
                alert('Error')
            }
        }
        getData();
    } )*/

    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '5rem', color: 'var(--orange)'}}>¡Bienvenido a <strong>{brand}!</strong></h1>
            <ItemList items={items}/>
        </>
    );
}

export default ItemListContainer;