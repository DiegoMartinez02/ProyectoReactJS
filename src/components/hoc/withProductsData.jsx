import {useEffect, useState } from "react";
import pedirDatos from "../../utils/utils";
import { useParams } from "react-router-dom";


const withProductsData = (Component, categoryId) => {
    const withProductsData = () => {
        const [productos, setProductos] = useState ([])
        const {categoryId} = useParams ()


        useEffect(() => {
            pedirDatos(true)
                .then((data) => {
                    const items = categoryId
                                    ? data.filter(prod => prod.category === categoryId)
                                    : data
                    setProductos(items)
                })
        }, [categoryId])
        return <Component productos={productos}/>
    }
    return withProductsData
}

export default withProductsData