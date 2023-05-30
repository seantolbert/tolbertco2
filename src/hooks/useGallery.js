import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const useGallery = (path, limit = Infinity) => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgError, setImgError] = useState(null);

  useEffect(() => {
    const fetchImageList = async () => {
      try {
        const folderRef = ref(storage, path);
        const listResult = await listAll(folderRef);
        const images = [];

        for (let i = 0; i < limit && i < listResult.items.length; i++) {
          const item = listResult.items[i];
          const url = await getDownloadURL(item);
          const imgObject = { url, type: path.split("/")[1] };
          images.push(imgObject);
        }

        setImageList(images);
        setIsLoading(false);
      } catch (err) {
        setImgError(`Error fetching image list: `, err);
        setIsLoading(false);
      }
    };

    fetchImageList();
  }, [path, limit]);

  return { imageList, isLoading, imgError };
};
