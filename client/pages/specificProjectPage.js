import tagGenerator from "../utils/tagGenerator.js";
import projectPage from "./projectPage.js";

const specificProjectPage = async (project) => {
  const mainEl = document.getElementById("main");

  // create tags:
  const tagsArr = tagGenerator(project.tags);

  const projectPicGenerator = (photosArr) => {
    if (photosArr) {
      const picEls = [];

      for (let i = 0; i < photosArr.length; i++) {
        const picEl = `
                <li class="specific-project-pic-contain">
                <img class="specific-project-pic" src="${photosArr[i]}" alt="User-uploaded photo for ${project.title}">
              </li>
                `;

        picEls.push(picEl);
      }

      const allPics = `
            <li id="specific-project-pics-contain">
            <ul id="specific-project-pics">
                ${picEls.join("")}
            </ul>
          </li>
            `;

      return allPics;
    } else {
      return;
    }
  };

  const projectPicsEl = projectPicGenerator(project.imgs);

  const specificProjectContent = `
    <div id="close-specific-project-btn-contain">
    <button id="close-specific-project-btn"><i class="fa-regular fa-circle-left"></i></button>
  </div>
  <article id="specific-project-page">
    <ul id="specific-project-info">
      <li id="specific-project-title-contain">
        <h3 id="specific-project-title">${project.title}</h3>
      </li>
      <li id="specific-project-solving-contain">
        <p id="specific-project-solving"><span class="solving-proposal">Solving: </span>${
          project.solving
        }</p>
      </li>
      <li id="specific-project-proposal-contain">
        <p id="specific-project-proposal"><span class="solving-proposal">Proposal: </span>${
          project.proposal
        }
        </p>
      </li>
        ${projectPicsEl}
    </ul>
    <aside id="specific-project-sidebar">
      <ul id="specific-project-sidebar-content">
        <li id="specific-project-main-img-contain">
          <img id="specific-project-main-img" src="${
            project.mainImg
          }" alt="${project.title}'s primary image">
        </li>
        <li id="specific-project-school-contain">
          <h4 id="specific-project-school">${project.school}</h4>
        </li>
        <li id="specific-project-tags-contain">
          <ul id="specific-project-tags">
             ${tagsArr.join("")}
          </ul>
        </li>
      </ul>
    </aside>
  </article>
  <aside id="copyright">
    <p>Copyright © 2023 The Philly Service Award</p>
  </aside>
    `;

  mainEl.innerHTML = specificProjectContent;

    // close btn functionality:
    const closeBtnEl = document.getElementById("close-specific-project-btn");

    closeBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
  
      projectPage("closed")
    });
};

export default specificProjectPage;
