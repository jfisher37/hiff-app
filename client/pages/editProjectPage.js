import tagGenerator from "../utils/tagGenerator.js";

const editProjectPage = async (project) => {
  const mainEl = document.getElementById("main");

  const projectPicGenerator = (photosArr, videoArr) => {
    if (photosArr || videoArr) {
      const picEls = [];

      for (let i = 0; i < photosArr.length; i++) {
        const picEl = `
        <ul class="edit-project-pic-contain">
                <li class="">
                <img class="edit-project-pic-img" src="${photosArr[i]}" alt="User-uploaded photo for ${project.title}">
              </li>
              <li class="">
              <input class="edit-project-pic-input" value="${photosArr[i]}"></input>
              </li>
                </ul>
                `;


        picEls.push(picEl);
      }

      if(videoArr) {
        for (let i = 0; i < videoArr.length; i++) {
          const videoEl = `
          <ul class="edit-project-video-contain">
                  <li class="">
                  <iframe src="${videoArr[i]}" title="User-uploaded video for ${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="edit-project-video-vid"></iframe>
                </li>
                <li class="">
              <input class="edit-project-video-input" value="${videoArr[i]}"></input>
              </li>
                </ul>
                `;
          picEls.push(videoEl);
        }
      }

      const allPics = `
            <li id="edit-project-pics-contain">
            <ul id="edit-project-pics">
                ${picEls.join("")}
            </ul>
          </li>
            `;

      return allPics;
    } else {
      return;
    }
  };

  const projectPicsEl = projectPicGenerator(project.imgs, project.videos);

  const editProjectContent = `
    <div id="close-edit-project-btn-contain">
    <button id="close-edit-project-btn"><i class="fa-regular fa-circle-left"></i></button>
  </div>
  <form id="edit-project-page">
    <ul id="edit-project-info">
      <li id="edit-project-title-contain">
        <input id="edit-project-title" value="${project.title}"></input>
      </li>
      <li id="edit-project-solving-contain">
        <div id="edit-project-solving"><span class="solving-proposal">Solving: </span>
        <textarea id="edited-solving">${project.solving}</textarea>
        </div>
      </li>
      <li id="edit-project-proposal-contain">
        <p id="edit-project-proposal"><span class="solving-proposal">Proposal: </span>
        <textarea id="edited-proposal">${project.proposal}</textarea>
        </p>
      </li>
        ${projectPicsEl}
    </ul>
    <aside id="edit-project-sidebar">
      <ul id="edit-project-sidebar-content">
        <li id="edit-project-main-img-contain">
        <ul>
          <li><img id="edit-project-main-img" src="${project.mainImg}" alt="${project.title}'s primary image"></li>
          <li class="">
          <input class="edit-project-main-img-input" value="${project.mainImg}"></input>
          </li>
          </ul>
        </li>
        <li id="edit-project-school-contain">
          <input id="edit-project-school" value="${project.school}"></input>
        </li>
        <li id="edit-project-tags-contain">
          <ul id="edit-project-tags">
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-community-tag" value="community">Community</input>
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-education-tag" value="education">Education</input>
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-hunger-tag" value="hunger">Hunger</input>
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-social-justice-tag" value="social-justice">Social Justice</input>   
            </li>
            <li class="edit-project-tag-input-contain"> 
            <input type="checkbox" class="edit-project-tag-input" id="edit-center-city-tag" value="center-city">Center City</input>
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-north-philly-tag" value="north-philly">North Philly</input>  
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-northeast-philly-tag" value="northeast-philly">Northeast Philly</input>
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-south-philly-tag" value="south-philly">South Philly</input>
            </li>
            <li class="edit-project-tag-input-contain">
            <input type="checkbox" class="edit-project-tag-input" id="edit-west-philly-tag" value="west-philly">West Philly</input>
            </li>
          </ul>
        </li>
        <li id="edit-project-submit-contain">
            <button id="edit-project-submit-btn">Submit</button>    
        </li>
      </ul>
    </aside>
  </form>
  <aside id="copyright">
    <p>Copyright © 2023 The Philly Service Award</p>
  </aside>
    `;

  mainEl.innerHTML = editProjectContent;

  if (project) {
    const specificProjectPage = await import("./specificProjectPage.js").then(
      async (module) => {
        return await module.default;
      }
    );

    //select existing tags functionality:
    const tagInputs = Array.from(
      document.getElementsByClassName("edit-project-tag-input")
    );

    tagInputs.forEach((tagInput) => {
      console.log("Project tags: ", project.tags);
      if (project.tags.includes(tagInput.value)) {
        tagInput.checked = true;
      }
    });

    // close btn functionality:
    const closeBtnEl = document.getElementById("close-edit-project-btn");

    closeBtnEl.addEventListener("click", (e) => {
      e.preventDefault();

      specificProjectPage(project);
    });
  }
};

export default editProjectPage;
