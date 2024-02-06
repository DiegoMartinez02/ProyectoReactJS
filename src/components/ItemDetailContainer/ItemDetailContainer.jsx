import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, documentId, getDoc, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);

    getDoc(docRef).then((documentSnapshot) => {
      const document = {...documentSnapshot.data(), id: documentSnapshot.id};
      console.log(document);

      setItem(document);
    });
  }, [itemId]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
