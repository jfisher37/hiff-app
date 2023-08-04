//retrieve auth cookie:
const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sessionData="))
      ?.split("=")[1];

export const getProjects = async () => {

    const url = `/api/get-projects/`;

    const projectsJson = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: cookieValue,
      },
    });

    const projectsArr = await projectsJson.json();

    return projectsArr;

};

export const getSingleProject = async (id) => {};

export const createProject = async (
  title,
  school,
  proposal,
  solving,
  tags,
  mainImg,
  imgs
) => {
  //TODO: add video field
};

export const updateProject = async (newData) => {};

export const deleteProject = async (id) => {};

export default getProjects;
