import { CartContext } from "../../context/CartContext"
import Boton from "../Boton/Boton"


const QuantitySelector = ({cantidad, setCantidad}) => {

    

    const handleSumar = () => {
      setCantidad(cantidad + 1)
    }
    const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }


    return (
        <>
        <div className="contador">
            <Boton onClick={handleRestar} className="boton-cantidad">-</Boton>
            <span className="cantidad">  {cantidad}  </span>
            <Boton onClick={handleSumar} className="boton-cantidad">+</Boton>
        </div>
        </>
    )
}

export default QuantitySelector