import React, { useState } from "react";
import Select from "react-select";

export default function SelectCatPlant({
    selectValue,
    setSelectValue,
    arrayOptions,
}) {
    const [isClearable] = useState(true);

    const customSelectStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: "3px",
            borderColor: state.isFocused
                ? "RGBA(49,181,114,0.1)"
                : "RGBA(49,181,114,0.6)",
            boxShadow: state.isFocused ? "0px 0px 1px 1px #31b572" : null,
            "&:hover": {
                borderColor: null,
            },
        }),
        menu: (base) => ({
            ...base,
            borderRadius: 0,
            marginTop: 8,
            boxShadow: "0px 0px 1px 0.5px #31b572",
        }),
        menuList: (base) => ({
            ...base,
            padding: 0,
        }),
        singleValue: (base) => ({
            ...base,
            color: "#31b572",
        }),
        option: (base, state) => ({
            ...base,
            color: "#31b572",
            backgroundColor: state.isFocused ? "RGBA(49,181,114,0.1)" : null,
            ":active": {
                backgroundColor: "RGBA(49,181,114,0.2)",
            },
        }),
    };

    return (
        <Select
            onChange={(selectedOption) =>
                setSelectValue(
                    selectedOption === null
                        ? arrayOptions[0].value
                        : selectedOption.value
                )
            }
            placeholder={"Rechercher une catégorie"}
            options={arrayOptions}
            isClearable={isClearable}
            defaultValue={arrayOptions[0]}
            className="lmj-categories-select"
            noOptionsMessage={() => "Aucun résultat"}
            value={{ label: selectValue }}
            styles={customSelectStyles}
        />
    );
}
