import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsubscribe = onSnapshot(ref, (snapshot) => {
      try {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setIsLoading(false);
      } catch (err) {
        setDocuments(null)
        setError(err);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [c, _q]);

  return { documents, isLoading };
};
