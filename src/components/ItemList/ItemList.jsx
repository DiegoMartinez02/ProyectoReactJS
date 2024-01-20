import ItemCard from "../ItemCard/ItemCard"
import { navBarLinks } from "../NavBar/NavBar"


const ItemList = ({productos}) => {

    const currentPath = window.location.pathname
    const currentLabel = navBarLinks.find((link) => link.href === currentPath)?.label || 'Productos'

    return (
        <section className="list-container">
            <h2 className="list-title">{currentLabel}</h2>
            <p className="vista-previa-producto">{productos.map((item) =><ItemCard item={item}/>)}</p>
        </section>
    )
}

export default ItemList