import React from "react";
import Item from './Item';

const ItemList = ({items}) => 
        <div className="item-list">
            {items.map(it => <Item key={it.id} id={it.id} pictureUrl={it.pictureUrl} title={it.title} description={it.description} price={it.price}/>)}
        </div>

export default ItemList;