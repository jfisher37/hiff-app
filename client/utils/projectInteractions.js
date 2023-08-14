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

export const createProject = async (data
) => {
console.log("CREATING", data);
};

export const updateProject = async (newData) => {

  console.log("UPDATING", newData);

};

export const deleteProject = async (id) => {};

export default getProjects;
