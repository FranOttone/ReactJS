import React, { Component } from 'react';
import './Header.css';

export default class header extends Component {
    render() {
        return (
            <nav>
                <div>
                    <a href="#" className='brand'>THËA</a>
                </div>
                <div className='divA'>
                <a href="#">Top</a>
                <a href="#">Bottom</a>
                <a href="#">Accesorios</a>
                </div>
            </nav>
        )
    }
}
