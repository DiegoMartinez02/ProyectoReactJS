
const ItemListContainer = ({greeting}) => {
    return (
        <section className="list-container">
            <h2 className="list-title">Productos</h2>
            <p>{greeting}</p>
        </section>
    )
}

export default ItemListContainer