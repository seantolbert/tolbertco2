import { useState, useEffect } from "react";
import { storage } from "../firebase/config"; // getStorage
import { ref, listAll, getDownloadURL } from "firebase/storage";

// the 'Infinity' is to make it an optional argument
export const useGallery = (path, limit = Infinity) => {
  const [imageList, setImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imgError, setImgError] = useState(null);

  useEffect(() => {
    const fetchImageList = async () => {
      try {
        const folderRef = ref(storage, path);
        const listResult = await listAll(folderRef);
        const images = listResult.items
          .slice(0, Math.min(limit, listResult.items.length))
          .map(async (item) => {
            const url = await getDownloadURL(item);
            return { url, type: path.split("/")[1] };
          });

        setImageList(await Promise.all(images));
        setIsLoading(false);
      } catch (err) {
        setImgError(`Error fetching image list: ${err}`);
        setIsLoading(false);
      }
    };

    fetchImageList();
  }, [path, limit]);

  return { imageList, isLoading, imgError };
};
