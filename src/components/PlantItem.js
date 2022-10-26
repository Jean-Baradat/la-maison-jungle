import CareScale from "./CareScale";
import "./../styles/PlantItem.css";

export default function PlantItem({ name, cover, light, water, price }) {
    return (
        <li className="lmj-plant-item">
            <img className="lmj-plant-item-cover" src={cover} alt={name} />
            <div className="lmj-plant-item-title">
                {name} - <div style={{display: 'inline-block', color: '#31b572', fontWeight: 'bold'}}>{price}€</div>
            </div>
            {/* { plant.isBestSale ? <span>🔥</span> : null }ou plant.isBestSale && <span>🔥</span> */}
            {/* { plant.isSpecialOffer ? salesDiv : null } */}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}
