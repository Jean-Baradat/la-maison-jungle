import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
    const [inputValue, setInputValue] = useState("");

    function checkValue(value) {
        setInputValue(value);
    }

    function testRegExp() {
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
            alert("Cet e-mail n'est pas valide !");
        }
    }

    return (
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <label className="lmj-footer-elem">
                Laissez-nous votre mail :
                <br />
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Entrez votre email"
                    onChange={(e) => checkValue(e.target.value)}
                    onBlur={testRegExp}
                />
            </label>
        </footer>
    );
}

export default Footer;
