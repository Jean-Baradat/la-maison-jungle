export default function Cart() {
    let listeDesPantesEtPrix = [
        {name:"Monstera", price:8},
        {name:"Fleurs", price:10},
        {name:"Lierre", price:15}
    ];
    let totalPrice = 0;
    for (let i = 0; i < listeDesPantesEtPrix.length; i++) {
        totalPrice = listeDesPantesEtPrix[i]["price"] + totalPrice;
    }
    return (
        <div>
            <h2>Panier</h2>
            <ul>{ listeDesPantesEtPrix.map((plante) => {
                return <li key={plante}>{ [plante.name, plante.price + "€"].join(" : ") }</li>
            }) }</ul>
            <p>Total : { totalPrice }€</p>
        </div>
    )
}