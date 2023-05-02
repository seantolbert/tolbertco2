import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

export const useStorage = (path) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, path);

    async function getURL() {
      try {
        const downloadURL = await getDownloadURL(storageRef);
        setImageURL(downloadURL);
      } catch (err) {
        console.log(err);
      }
    }
    getURL();
  }, [path]);

  return imageURL;
};
