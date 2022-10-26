import "./../styles/Cart.css";
import { useState, useEffect } from "react";

export default function Cart({ cart, updateCart, arrayCart, setArrayCart }) {
    const [isOpen, setIsOpen] = useState(true);

    let totalCartPrice = 0;
    arrayCart
        .map(
            (prop) =>
                prop.price * cart.filter((name) => name === prop.name).length
        )
        .forEach((element) => {
            totalCartPrice += element;
        });

    function resetAll() {
        setArrayCart([]);
        updateCart([]);
    }

    /* HOOK useEffect */
    useEffect(() => {
        document.title = "LMJ: " + totalCartPrice + "€ d'achats";
    }, [totalCartPrice]);

    return isOpen ? (
        <div className="lmj-cart">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            {cart.length !== 0 ? (
                arrayCart.map((prop) => (
                    <li
                        style={{ listStyleType: "none", fontSize: "14px" }}
                        key={prop.id}
                    >
                        {prop.name} : {prop.price}€ (
                        {cart.filter((name) => name === prop.name).length})
                    </li>
                ))
            ) : (
                <li style={{ listStyleType: "none", fontSize: "14px" }}>
                    Le panier est vide
                </li>
            )}

            <h3>Total : {totalCartPrice}€</h3>
            <button onClick={resetAll} className="lmj-btn-reset-cart">Réinitialiser</button>
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button
                className="lmj-cart-toggle-button"
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    );
}
