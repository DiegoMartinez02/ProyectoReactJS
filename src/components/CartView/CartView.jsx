import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../Boton/Boton";
import { Link } from "react-router-dom";

export const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <section className="container m-auto mt-8">
        <>
          <h2>Tu carrito está vacío</h2>
          <p>Añade productos para terminar tu compra 😉</p>
        </>
      </section>
    );
  }
  return (
    <section className="container m-auto mt-8">
      <h2>Tu compra</h2>
      <ul>
        {cart.map((item) => (
          <>
            <li className="flex">
              <img src={item.img} alt="cart img" width="100px" />
              <div>
                <h3>{item.name}</h3>
                <p>$ {item.price}</p>
                <p>Cantidad: {item.cantidad}</p>
                <Boton
                  className="botonQuitar"
                  onClick={() => removeItem(item.id)}
                >
                  <p>Quitar</p>
                </Boton>
              </div>
            </li>
          </>
        ))}
        <h2>Precio final: ${totalCart()}</h2>
        <Boton onClick={clearCart} className="botonVer">
          <p>Vaciar carrito</p>
        </Boton>
        <Boton className="botonVer"><Link className="botonVerLink" to="/checkout"><p>Terminar compra</p></Link>
          
        </Boton>
      </ul>
    </section>
  );
};
