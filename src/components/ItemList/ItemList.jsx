import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({productos}) => {

    return (
        <section className="list-container">
            <h2 className="list-title">Productos</h2>
            <p className="vista-previa-producto">{productos.map((item) =><ItemCard item={item}/>)}</p>
        </section>
    )
}

export default ItemList