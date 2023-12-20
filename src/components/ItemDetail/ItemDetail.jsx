import Boton from "../Boton/Boton"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    if (!item) {
        return <div>Cargando...</div>
      }

    return (
        <div key={item.id}>
            <img src={item.img} alt={item.name} height="200px" width="200px"/>
            <h3 className="itemName">{item.name}</h3>
            <p className="itemDescription">{item.description}</p>
            <p className="itemPrice">${item.price}</p>
            <Link to="#"><Boton className="botonVer">Añadir al carrito</Boton></Link>
        </div>

    )
}

export default ItemDetail