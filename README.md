## Feature Add

SO here’s what I was after:
I wanted to add a separate gallery page to my personal website.

I built a single page with FIVE sections stacked on top of each other, and I wanted to create a cool loading animation for some cool pictures I’ve taken in the past.

The rub is that, although this is not a big project a goal of mine is to keep my file size as small as possible so I don’t want any of these images loaded directly onto my codebase.

My goal was to implement:

- code splitting for the whole page
- infinite scroll for the images
- a loading animation for each picture as it

here is the main GalleryPage starting point:

### GalleryPage.jsx

```js
import { Link } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-start px-3">
      {/* header ... */}
      <div className="w-full flex items-center py-10">
        <Link to="/" className="p-10 absolute left-0">
          <FontAwesomeIcon icon={faArrowLeft} className="text-5xl" />
        </Link>
        <h1 className="w-full uppercase text-center tracking-[5px]">Gallery</h1>
      </div>
    </div>
  );
};

export default GalleryPage;
```

I have already created a folder in the firebase storage bucket that can be accessed with a hook I named useGallery, which returns an array of objects containing the type of object and the download url from its location in storage. An example of this functionality wopuld look like this.

### useGallery.js

```js
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
        // grab a particular folder from the provided path
        const folderRef = ref(storage, path);

        // await the promised array of downloadURL
        // strings from every photo in the bucket provided
        const listResult = await listAll(folderRef);

        const images = listResult.items
          // cut the array down to the provided limit
          .slice(0, Math.min(limit, listResult.items.length))
          // adding a 'type' key and creating an object
          .map(async (item) => {
            const url = await getDownloadURL(item);
            // add the type key to the object from the folder name
            return { url, type: path.split("/")[1] };
          });

        setImageList(await Promise.all(images));
        // should be a crazy fast load, but I'm calling this a best practiev
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
```

Nothing too crazy, and most of its straight from the [firebase storage 'listAll' documentation](https://firebase.google.com/docs/storage/web/list-files#list_all_files) but one thing to note here is that I wanted to return an object with a type as well so I can specify the 'type' of object we are adding in case there are multiple kinds of folders I use to filter through on the galleryPages.

Now back to the GalleryPage. The added hook and mapped images and a little formatting looks like this looks like this:

### GalleryPage.jsx

```js
import { useGallery } from "../hooks/useGallery";

const GalleryPage2 = () => {
  const { imageList, isLoading, imgError } = useGallery("/gallery");

  return (
    <div className="min-h-screen flex flex-col items-start px-3">
      {/* header ... */}

      <div className="grid grid-cols-3 gap-3">
        {imageList?.map((photo, idx) => (
          <div key={idx} className="break-inside-avoid">
            <img src={photo.url} alt="firebase photo" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage2;
```

Now if you have all of your pictures preloaded with the same dimensions, this should already look pretty good, but my images are all different sizes. So
