const GalleryCard = ({ link }) => {
  return (
    <article
      className="p-1 md:p-2 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 filter-item gallery-image"
      id="gallery"
    >
      <div className="w-full rounded-xl">
        <img src={link} alt="Gallery Image" className="w-full rounded-xl" />
      </div>
    </article>
  );
};

export default GalleryCard;
