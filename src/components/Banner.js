import Header from './Header';
// import Cart from './Cart';
import React from 'react';
import './../styles/Banner.css';
import logo from './../assets/logo.png';

export default function Banner() {
    return (
        <React.Fragment>
            <Header> 
                <img className="lmj-logo" src={logo} alt="La maison jungle" />
                <h1 className="lmj-title">La maison jungle</h1>
            </Header>
            {/* <Cart /> */}
        </React.Fragment>
    );
}