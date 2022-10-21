import Sun from './../assets/sun.svg'
import Water from './../assets/water.svg'

export default function CareScale(props) {
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType
    // il est également possible d'écrire directement dans les paramètres de la fonction : function CareScale({ scaleValue, careType }) {}
    const {scaleValue, careType} = props;

    const range = [1, 2, 3];

    const scaleType = careType === 'light' ? (
        <img src={ Sun } alt='sun-icon' /> 
    ) : (
        <img src={ Water } alt='water-icon' /> 
    );

    const scaleValueLabel = ['peu', 'modérement', 'beaucoup'];
    function alertScale() {
        alert("Cette plante requiert " + scaleValueLabel[scaleValue-1] + (careType === 'light' ? " de lumière" : " d'arrosage"));
    }

    return (
        <div onClick={ () => alertScale() }>
            {range.map((rangeElem) => {
                return (
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{ scaleType }</span> : null
                );
            })}
        </div>
    );
}