import React  from 'react'
import './ItemListConteiner.css'
import ItemCount from '../ItemCount/ItemCount'
export default function ItemListConteiner({titulo , contenido}) {

 const onAdd=(cantidad)=>{
     console.log(cantidad)
 }
    
        return (
            <div>
                <h1>{titulo}</h1>
                    <div className='div1'><h2>{contenido}</h2></div>
                    <ItemCount  stock={4}
                                initial={1}
                                onAdd={onAdd} />
            </div>
        )
    
}
