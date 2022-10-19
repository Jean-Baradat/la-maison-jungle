import { plantList } from '../datas/plantList';
import './../styles/ShoppingList.css';


export default function ShoppingList() {

    const category = [];
    plantList.forEach(plant => {
        if (!category.includes(plant.category)) {
            category.push(plant.category);
        }
    });
    const salesDiv = <div className="lmj-sales">En solde</div>
    return (
        <div>
            <ul>
            {category.map((name) => {
                return (
                    <li key={name}>{ name }</li>
                );
                })}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map((plant) => {
                return (
                    <li key={plant.name  + '-' + plant.id} className="lmj-plant-item">
                        { plant.name }
                        { plant.isBestSale ? <span>🔥</span> : null }{/* ou plant.isBestSale && <span>🔥</span> */}
                        { plant.isSpecialOffer ? salesDiv : null }
                    </li>
                );
                })}
            </ul>
        </div>
    );
    
}