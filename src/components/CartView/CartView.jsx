import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartView = () => {
    const {cart} = useContext(CartContext)
    return (
        <section className="container m-auto mt-8">
            <h2>Tu compra</h2>
            <ul>
                {
                    cart.map((item) => (
                        <li className="flex">
                            <img src={item.img} alt="cart img" width="100px" />
                            <div>
                                <h3>{item.name}</h3>
                                <p>$ {item.price}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}