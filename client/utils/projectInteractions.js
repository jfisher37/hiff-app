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
  
      const url = `/api/create-project/`;
  
      const projectJson = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: cookieValue,
        },
        body: JSON.stringify(data),
      });
  
      const project = await projectJson.json();
  
      return project;
};

export const updateProject = async (newData) => {

    const url = `/api/update-project/`;

    const projectJson = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: cookieValue,
      },
      body: JSON.stringify(newData),
    });

    const project = await projectJson.json();

    return project;

};

export const deleteProject = async (id) => {

    const url = `/api/delete-project/`;

    const deleteJson = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: cookieValue,
      },
      body: JSON.stringify({ id }),
    });

    const response = await deleteJson.json();

    if (response.message === "Project deleted successfully") {
      return true;
    } else {
      alert("Error deleting project:", response.message);
      return false;
    }
};

export default getProjects;
