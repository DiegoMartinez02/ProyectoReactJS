import carrito from '../../assets/cart.png'
const CartWidget = () => {
    return (
        <div className='cartWidgetLogo'>
            <img src={carrito} alt="carrito" height={"50px"} />
            <div className='cartNumber'>
                <p>5</p>
            </div>
            
        </div>
    )
}
export default CartWidget