
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header/Header'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ItemListConteiner titulo={'Navegá por categorías'} contenido={'Camisas y Sweaters'}/>
        <ItemListConteiner  contenido={'Pantalones'}/>
        <ItemListConteiner  contenido={'Abrigos'}/>
        <ItemListConteiner  contenido={'Remeras'}/>
      </div>
    )
  }
}
