import { useEffect, useRef, useState } from "react";

export const useInfinite = (callback) => {
  const observer = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const handleIntersect = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !isLoading) {
        setIsLoading(true);
        callback()
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error loading more images:", error);
            setIsLoading(false);
          });
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    return () => {
      observer.current.disconnect();
    };
  }, [callback, isLoading]);

  return { observer, loadMore: () => setIsLoading(true) };
};
