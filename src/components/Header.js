import './../styles/Header.css';
import logo from './../assets/logo.png';

export default function Header() {
    return (
        <div className="lmj-header">
            <img className="lmj-logo" src={logo} alt="La maison jungle" />
            <h1 className="lmj-title">La maison jungle</h1>
        </div>
    );
}