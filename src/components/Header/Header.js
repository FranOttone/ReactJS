import React, { Component } from 'react';
import './Header.css';
import CartWidget from '../CartWidget/CartWidget'

export default class Header extends Component {
    render() {
        return (
            <nav>
                <div>
                    <a href="#" className='brand'>THËA</a>
                </div>
                <div className='divA'>
               
               <CartWidget />

                </div>
            </nav>
        )
    }
}
