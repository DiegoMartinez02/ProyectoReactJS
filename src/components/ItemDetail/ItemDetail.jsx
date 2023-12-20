import Boton from "../Boton/Boton"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    if (!item) {
        return <div>Cargando...</div>
      }

    return (
        <>
            <div className="detail-container" key={item.id}>
                <img src={item.img} alt={item.name} height="500px" width="500px"/>
                <div className="detail-no-img">
                    <h3 className="itemName">{item.name}</h3>
                    <p className="itemPrice">${item.price}</p>
                    <Link to="#"><Boton className="boton-añadir-al-carrito">Añadir al carrito</Boton></Link>
                </div>
            </div>
            <div className="itemDescriptionDetail">
                <h3>Descripción:</h3>
                <p>{item.description}</p>  
            </div>

        </>
        

    )
}

export default ItemDetail