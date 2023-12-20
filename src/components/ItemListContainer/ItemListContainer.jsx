// import { useEffect, useState } from "react"
// import pedirDatos from "../../utils/utils"
import ItemList from "../ItemList/ItemList"
// import useProductos from "../hooks/useProductos"
import withProductsData from "../hoc/withProductsData"
// import ProductsData from "../renderprops/ProductsData"


const ItemListContainer = ({productos}) => {

    // const {productos} = useProductos()
    
    return (
        <>
            {/* <ProductsData>
                {(productos) => (
                    <>
                        {
                            <ItemList productos={productos}/>
                        }
                    </>
                )}
            </ProductsData> */}
            <ItemList productos={productos} />
        </>
    )
}

export default withProductsData (ItemListContainer)
