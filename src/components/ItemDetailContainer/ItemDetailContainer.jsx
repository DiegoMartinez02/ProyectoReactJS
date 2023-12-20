import { useEffect, useState } from "react"
import pedirDatos from "../../utils/utils"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    console.log(item)

    useEffect(() =>{
        pedirDatos(true)
            .then(data => {
                setItem(data.find(prod => prod.id === Number(itemId)))
            })
    }, [])

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer