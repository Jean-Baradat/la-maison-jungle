import "./../styles/App.css";
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Cart from "./Cart";
import "./../styles/Layout.css";
import logo from "./../assets/logo.png";

export default function App() {
    const cartSave = localStorage.getItem("cart");
    const arrayCartSave = localStorage.getItem("arrayCart");
    /* 
		useState nous renvoie une paire de valeurs dans un tableau de 2 éléments, que nous récupérons dans les variables cart et updateCart dans notre exemple. Le premier élément est la valeur actuelle, et le deuxième est une fonction qui permet de la modifier.
	*/
    // sans la décomposition :
    // const cartState = useState(0)
    // const cart = cartState[0]
    // const updateCart = cartState[1]
    const [cart, updateCart] = useState(cartSave ? JSON.parse(cartSave) : []);
    const [arrayCart, setArrayCart] = useState(
        arrayCartSave ? JSON.parse(arrayCartSave) : []
    );

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("arrayCart", JSON.stringify(arrayCart));
    }, [cart, arrayCart]);

    return (
        <React.Fragment>
            <Banner>
                <img src={logo} alt="La maison jungle" className="lmj-logo" />
                <h1 className="lmj-title">La maison jungle</h1>
            </Banner>
            <div className="lmj-layout-inner">
                <Cart
                    cart={cart}
                    updateCart={updateCart}
                    arrayCart={arrayCart}
                    setArrayCart={setArrayCart}
                />
                <ShoppingList
                    cart={cart}
                    updateCart={updateCart}
                    arrayCart={arrayCart}
                    setArrayCart={setArrayCart}
                />
            </div>
            <Footer />
        </React.Fragment>
    );
}
