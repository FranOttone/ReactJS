
import './App.css';

import React, { Component } from 'react'
import Header from './components/Header/Header'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

export default class App extends Component {
  constructor (){
      super();

      this.state={
        count: 0,
      };

  }
contadorMas= () =>{
  this.setState({count:this.state.count + 1});
};

contadorMenos= () =>{
  this.setState({count:this.state.count - 1});
};

  render() {
    return (
      <div>
        <Header />
        <ItemListConteiner titulo={'Navegá por categorías'} contenido={'Camisas y Sweaters'}/>
        <ItemListConteiner  contenido={'Pantalones'}/>
        <ItemListConteiner  contenido={'Abrigos'}/>
        <ItemListConteiner  contenido={'Remeras'}/>
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.contadorMas}>+</button>
          <button onClick={this.contadorMenos}>-</button>
          </div>
      </div>
    )
  }
}
