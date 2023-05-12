import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(db, c, id);

    const unsub = onSnapshot(
      docRef,
      (doc) => {
        if (doc.data()) {
          setDocument({ ...doc.data(), id: doc.id });
          setError(null);
        } else {
          setError("This Post no longer exists.");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to fetch document.");
      }
    );

    return () => unsub();
  }, [c, id]);

  return { document, error };
};
