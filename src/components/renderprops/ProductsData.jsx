import {useEffect, useState } from "react";
import pedirDatos from "../../utils/utils";


const ProductsData = ({children}) => {
    const [productos, setProductos] = useState ([])


    useEffect(() => {
        pedirDatos(true)
            .then((data) => {
                setProductos(data)
            })
    }, [])

    return (children(productos))
}
export default ProductsData