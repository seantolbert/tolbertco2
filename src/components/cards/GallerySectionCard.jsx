const GallerySectionCard = ({ link }) => {
  return (
    <div className="w-full max-h-48 overflow-clip flex items-center">
      <img src={link.url} alt="" className="w-full " />
    </div>
  );
};

export default GallerySectionCard;
