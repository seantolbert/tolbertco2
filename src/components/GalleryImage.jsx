const GalleryImage = ({link}) => {
  return (
    <article className="p-5 md:p-2 w-full md:w-1/2 lg:w-1/3 filter-item" id="gallery">
      <div className="w-full rounded-xl border-b border-r border-gray-600">
        <img src={link.link} alt="" className="w-full rounded-xl" />
      </div>
    </article>
  );
};

export default GalleryImage;
