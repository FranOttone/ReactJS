import React, { Component } from 'react'
import './ItemListConteiner.css'
export default function ItemListConteiner(props) {
        return (
            <div>
                <h1>{props.titulo}</h1>
                    <div className='div1'><h2>{props.contenido}</h2></div> 
            </div>
        )
    
}
