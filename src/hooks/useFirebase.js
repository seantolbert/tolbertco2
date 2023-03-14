import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

const useFirebase = (collectionName, queryOptions) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let collectionRef = collection(db, collectionName);

    if (queryOptions) {
      const { where: whereArray, orderBy: orderByArray, limit: limitNumber } =
        queryOptions;

      if (whereArray) {
        whereArray.forEach((whereCondition) => {
          const [field, operator, value] = whereCondition;
          collectionRef = query(collectionRef, where(field, operator, value));
        });
      }

      if (orderByArray) {
        orderByArray.forEach((orderByCondition) => {
          const [field, order] = orderByCondition;
          collectionRef = query(collectionRef, orderBy(field, order));
        });
      }

      if (limitNumber) {
        collectionRef = query(collectionRef, limit(limitNumber));
      }
    }

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });

    return unsubscribe;
  }, [collectionName, queryOptions]);

  const addDocument = async (documentData) => {
    await addDoc(collection(db, collectionName), documentData);
  };

  const updateDocument = async (documentId, documentData) => {
    await updateDoc(doc(db, collectionName, documentId), documentData);
  };

  const deleteDocument = async (documentId) => {
    await deleteDoc(doc(db, collectionName, documentId));
  };

  return { data, addDocument, updateDocument, deleteDocument };
};

export default useFirebase;
