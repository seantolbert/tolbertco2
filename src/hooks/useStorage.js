import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, getDownloadURL } from "firebase/storage";

export const useStorage = (path) => {
  const [imageURL, setImageURL] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, path);

    async function getURL() {
      try {
        const downloadURL = await getDownloadURL(storageRef);
        setImageURL(downloadURL);
      } catch (err) {
        setError(
          err.message +
            ", Another possible cause: you have not properly formatted the image name on github. All names should be lowercase with dashes (-) instead of spaces ( ) "
        );
      }
    }
    getURL();
  }, [path, imageURL]);

  return { imageURL, error };
};
