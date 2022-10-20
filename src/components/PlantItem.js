import CareScale from './CareScale';
import './../styles/PlantItem.css';

export default function PlantItem({ name, cover, id, light, water }) {

    return (
        <li key={id} className="lmj-plant-item">
            <img className="lmj-plant-item-cover" src={ cover } alt={ { name } + '-' + { cover } } />
            { name }
            {/* { plant.isBestSale ? <span>🔥</span> : null }ou plant.isBestSale && <span>🔥</span> */}
            {/* { plant.isSpecialOffer ? salesDiv : null } */}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );
}