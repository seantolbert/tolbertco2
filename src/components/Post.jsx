import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ post }) => {
  const { title, postImage, type, excerpt, paragraphs } = post;

  return (
    <article className="relative flex flex-col mb-10 p-5">
      <span className="absolute top-0 right-0 p-2 uppercase text-xs text-slate-500">
        {type}
      </span>
      <div>
        <img src={postImage} alt="" />
      </div>
      <h3 className="uppercase font-bold mb-5">{title}</h3>
      <p className="text-sm uppercase text-slate-300">{excerpt}</p>
      <div className="w-full flex items-center gap-3 py-5 justify-end">
        <FontAwesomeIcon icon={faGlasses} />
        <span className="uppercase text-sm text-slate-500 ">read on</span>
      </div>
    </article>
  );
};

export default Post;
