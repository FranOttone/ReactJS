import React  from 'react'
import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList'
export default function ItemListConteiner({titulo , contenido}) {

 
    
        return (
            <div>
                <h1>{titulo}</h1>
                    <div className='div1'><h2>{contenido}</h2></div>
                    <ItemList /> 
            </div>
        )
    
}
