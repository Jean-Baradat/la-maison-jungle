import { plantList } from './../datas/plantList';
import './../styles/ShoppingList.css';
import PlantItem from './PlantItem'

export default function ShoppingList() {

    const category = [];
    plantList.forEach(plant => {
        if (!category.includes(plant.category)) {
            category.push(plant.category);
        }
    });

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
                        <PlantItem 
                            name = { plant.name }
                            cover = { plant.cover }
                            id = { plant.id }
                            light = { plant.light }
                            water = { plant.water }
                        />
                    );
                })}
            </ul>
        </div>
    );
    
}