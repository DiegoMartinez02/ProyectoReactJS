import { useEffect, useState } from "react"
import pedirDatos from "../../utils/utils"



const useProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos(true)
            .then((data) => {
                setProductos(data)
            })
    }, [])

    return {
        productos
    }
}

export default useProductos