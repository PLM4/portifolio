import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectList } from "../components/pages/projects/projects-list";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import type { ProjectPageData } from "../types/page-info";

const getPageData = async (): Promise<ProjectPageData> => {
  const query = `
  query ProjectsQuery{
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
        technologies {
        name
      }
    }
  }`;

  return fetchHygraphQuery(query, 0);
};

export default async function Projects() {
  const { projects } = await getPageData();

  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
    </>
  );
}
