import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_REPOSITORIES = gql`
  query {
    viewer {
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            url
            description
            homepageUrl
            repositoryTopics(first: 3) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const useGitRepos = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const pinnedRepos = data?.viewer?.pinnedItems.nodes.map((pinnedRepo) => ({
      ...pinnedRepo,
      type: "repo",
      tech: pinnedRepo.repositoryTopics.nodes
    }));

    setRepositories(pinnedRepos);
  }, [data]);

  return { loading, error, repos: repositories || [] };
};
