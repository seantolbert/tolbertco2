// import React, { useEffect, useState } from "react";
// import auth from "../google/config";

// const GooglePhotos = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const response = await auth.request({
//           url: "https://photoslibrary.googleapis.com/v1/mediaItems",
//           params: { pageSize: 10 },
//         });
//         const { mediaItems } = response.data;
//         setPhotos(mediaItems);
//       } catch (error) {
//         console.error("Error fetching photos:", error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   return (
//     <div>
//       <h2>Google Photos</h2>
//       {photos.map((photo) => (
//         <img
//           key={photo.id}
//           src={photo.baseUrl}
//           alt={photo.filename}
//           style={{ width: "200px", height: "auto", margin: "10px" }}
//         />
//       ))}
//     </div>
//   );
// };

// export default GooglePhotos;
