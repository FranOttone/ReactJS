import React, { Component } from 'react'
import './ItemListConteiner.css'
export default function ItemListConteiner({titulo , contenido}) {
        return (
            <div>
                <h1>{titulo}</h1>
                    <div className='div1'><h2>{contenido}</h2></div> 
            </div>
        )
    
}
