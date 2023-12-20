import Boton from "../Boton/Boton"
import { Link } from "react-router-dom"

const ItemCard = ({item}) => {

    return (
        
            <article key={item.id}>
                <img src={item.img} alt={item.name} height="200px" width="200px"/>
                <h3 className="itemName">{item.name}</h3>
                {/* <p className="itemDescription">{item.description}</p> */}
                <p className="itemPrice">${item.price}</p>
                <Link to={`/item/${item.id}`}><Boton className="botonVer">Ver</Boton></Link>
            </article>
    )
}

export default ItemCard