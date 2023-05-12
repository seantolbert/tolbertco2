import { Link, useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";
import AnimatedBar from "../components/AnimatedBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BlogPage = () => {
  const { id } = useParams();
  const { document: post, error } = useDocument("works", id);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full fixed top-0">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="3x" className="p-5" />
        </Link>
      </div>

      <div className="w-4/5 md:w-3/5">
        <div>
          <img src={post.postImage} alt={`${post.title} Main Image`} />
        </div>

        <h1 className="text-3xl pb-10">{post.title}</h1>
        <h3 className="text-xl font-bold pb-5">{post.excerpt}</h3>
        <div className="flex flex-col gap-5 mb-10">
          {post.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
