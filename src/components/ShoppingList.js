import { plantList } from "./../datas/plantList";
import "./../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import React, { useState } from "react";
import Categories from "./Categories";

export default function ShoppingList({
    cart,
    updateCart,
    arrayCart,
    setArrayCart,
}) {
    const [selectValue, setSelectValue] = useState("Tous");

    const category = [];
    plantList.forEach((plant) => {
        if (!category.includes(plant.category)) {
            category.push(plant.category);
        }
    });

    function createObjectsCart(pName, pPrice, pId) {
        const arrayCPropName = arrayCart.map((prop) => prop.name);

        let listPName = {
            name: pName,
            price: pPrice,
            id: pId,
        };

        updateCart((cart) => [...cart, listPName.name]);
        if (!arrayCPropName.includes(listPName.name)) {
            setArrayCart((arrayCart) => [...arrayCart, listPName]);
        }
    }

    return (
        <div className="lmj-shopping-list">
            <Categories
                category={category}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
            />
            <ul className="lmj-plant-list">
                {plantList.map((plant) => {
                    return plant.category === selectValue ||
                        selectValue === "Tous" ? (
                        <div
                            key={plant.id}
                            className="lmj-plant-item-container"
                        >
                            <PlantItem
                                name={plant.name}
                                cover={plant.cover}
                                light={plant.light}
                                water={plant.water}
                                price={plant.price}
                            />
                            <button
                                className="lmj-plant-button-add"
                                onClick={() =>
                                    createObjectsCart(
                                        plant.name,
                                        plant.price,
                                        plant.id
                                    )
                                }
                            >
                                Ajouter
                            </button>
                        </div>
                    ) : null;
                })}
            </ul>
        </div>
    );
}
