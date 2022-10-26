import "./../styles/Categories.css";
import SelectCatPlant from "./SelectCatPlant";

export default function Categories({ category, selectValue, setSelectValue }) {
    function objOption(value, label) {
        return {
            value: value,
            label: label,
        };
    }

    let arrayOptions = [{ value: "Tous", label: "Tous" }];
    for (let i = 0; i < category.length; i++) {
        arrayOptions.push(objOption(category[i], category[i]));
    }

    return (
        <div className="lmj-categories">
            <SelectCatPlant
                selectValue={selectValue}
                setSelectValue={setSelectValue}
                arrayOptions={arrayOptions}
            />
        </div>
    );
}
