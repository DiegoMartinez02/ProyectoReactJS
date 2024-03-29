import { useContext } from 'react'
import carrito from '../../assets/cart.png'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {itemsInCart} = useContext(CartContext)
    return (
        <a href="/cart" className='cartWidgetLogo'><div className='cartWidgetLogo'>
            <img src={carrito} alt="carrito" height={"50px"} />
            <span className='cartNumber'>{itemsInCart()}</span>   
            
        </div></a>
    )
}
export default CartWidget