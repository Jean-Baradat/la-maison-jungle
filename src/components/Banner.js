import Header from './Header';
import Cart from './Cart';
import React from 'react';
import './../styles/Banner.css';

export default function Banner() {
    return (
        <React.Fragment>
            <Header />
            <Cart />
        </React.Fragment>
    );
}