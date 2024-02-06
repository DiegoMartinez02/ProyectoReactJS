import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const CheckOut = () => {
  const { totalCart, cart, clearCart } = useContext(CartContext);
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fecha: new Date(),
    };
    const orderRefs = collection(db, "orders");
    addDoc(orderRefs, orden).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };
  if (orderId) {
    return (
      <div>
        <h3>Gracias por tu compra</h3>
        <p>El código de tu orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div className="container m-auto mt-10">
      <h2>Finaliza tu compra</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mt-4"
      >
        <input
          className="border p-2"
          type="text"
          placeholder="Primer nombre"
          onChange={handleInputChange}
          value={values.nombre}
          name="nombre"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Primer apellido"
          onChange={handleInputChange}
          value={values.apellido}
          name="apellido"
        />
        <input
          className="border p-2"
          type="text"
          placeholder="Dirección"
          onChange={handleInputChange}
          value={values.direccion}
          name="direccion"
        />
        <input
          className="border p-2"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={values.email}
          name="email"
        />
        <button type="submit" className="botonQuitar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
