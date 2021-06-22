import React, {useState} from 'react'
import './ItemListConteiner.css'
import ItemCount from '../ItemCount/ItemCount'
export default function ItemListConteiner({titulo , contenido}) {


        return (
            <div>
                <h1>{titulo}</h1>
                    <div className='div1'><h2>{contenido}</h2></div>
                    <ItemCount  stock={5}
                                initial={1}
                                 />
            </div>
        )
    
}
