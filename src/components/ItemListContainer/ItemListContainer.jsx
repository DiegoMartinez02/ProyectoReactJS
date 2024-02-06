import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import withProductsData from "../hoc/withProductsData";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const docsRef = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(docsRef).then((querySnapshot) => {
      const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }) );
      console.log(docs);

      setProductos(docs);
    });
  }, [categoryId]);

  return (
    <>
      <ItemList productos={productos} />
    </>
  );
};

export default withProductsData(ItemListContainer);
