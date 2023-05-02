import { useCollection } from "../hooks/useCollection";

export const worksData = () => {
  const { documents: projects } = useCollection("projects");
  const { documents: certs } = useCollection("certs");
  const { documents: posts } = useCollection("blog");

  const arr = projects + certs + posts;

//   console.log(projects);
//   console.log(certs);
//   console.log(posts);

  console.log(arr);
};
