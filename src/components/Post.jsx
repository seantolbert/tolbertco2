import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ post }) => {
  const { title, postImage, type, excerpt, paragraphs } = post;

  return (
    <article className="relative flex flex-col gap-5 m-10 p-5 break-inside-avoid transition duration-500 hover:shadow-neu hover:scale-[1.01] rounded-2xl border-slate-300">
      <span className="absolute top-0 right-0 p-2 uppercase text-xs text-slate-600">
        Blog Post
      </span>
      <div>
        <img src={postImage} alt="" />
      </div>
      <h3 className="uppercase font-bold mb-5">{title}</h3>
      <p className="text-xs uppercase text-slate-300">{excerpt}</p>
      {/* <div className="">
        <p className="text-sm pt-5">{paragraphs[0]}</p>
      </div> */}
      <div className="w-full flex justify-end">
        <div className="group w-fit">
          <FontAwesomeIcon icon={faGlasses} />
          <span className="pl-2 uppercase tracking-[5px] text-slate-500 text-sm group-hover:text-white transition-all duration-175">
            read on
          </span>
          <div className="w-full bg-white h-1 mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-175"></div>
        </div>
      </div>
    </article>
  );
};

export default Post;
