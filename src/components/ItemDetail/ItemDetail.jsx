import { useContext, useState } from "react"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import Boton from "../Boton/Boton"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
    if (!item) {
        return <div>Cargando...</div>
      }
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, isInCart} = useContext(CartContext)

    console.log(isInCart(item.id))

    const handleAñadir = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }

        // const newCart = cart.slice()
        // newCart.push(itemToCart)
      
        // setCart(newCart)
        // setCart([...cart, itemToCart])
        addToCart(itemToCart)
      }

    return (
        <>
            <div className="detail-container" key={item.id}>
                <img src={item.img} alt={item.name} height="500px" width="500px"/>
                <div className="detail-no-img">
                    <h3 className="itemName">{item.name}</h3>
                    <p className="itemPrice">${item.price}</p>
                    {
                        isInCart(item.id)
                            ? <Link to="/cart">Terminar mi compra</Link>
                            : <>
                                <QuantitySelector
                                cantidad={cantidad}
                                setCantidad={setCantidad}/>
                                <Boton onClick={handleAñadir} className="boton-añadir-al-carrito">Añadir al carrito</Boton>
                            </>
                    }
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