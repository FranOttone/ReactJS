import React, { Component } from 'react'
import './ItemListConteiner.css'
export default class ItemListConteiner extends Component {
    render() {
        return (
            <div>
                <h1>Navegá Por Categorias</h1>
                    <div className='div1'><h2>Camisas y Sweaters</h2></div> 
                    <div className='div2'><h2>Pantalones</h2></div>
                    <div className='div3'><h2>Abrigos</h2></div>
                    <div className='div4'><h2>Remeras</h2></div>

            </div>
        )
    }
}
