import Boton from "../Boton/Boton"


const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    
    const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)   
    }
    const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }


    return (
        <>
        <div className="contador">
            <Boton onClick={handleRestar} className={cantidad === 1 ? "boton-cantidad-limite":"boton-cantidad"}
            disabled={cantidad===1}>-</Boton>
            <span className="cantidad">  {cantidad}  </span>
            <Boton onClick={handleSumar} className={cantidad === stock ? "boton-cantidad-limite":"boton-cantidad"}
          disabled={cantidad===stock}>+</Boton>
        </div>
        </>
    )
}

export default QuantitySelector