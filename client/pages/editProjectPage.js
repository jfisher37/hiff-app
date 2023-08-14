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

      if (videoArr) {
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
  ${(function () {
    if (project.id) {
      return `
  <div id="close-edit-project-btn-contain">
  <button id="close-edit-project-btn"><i class="fa-regular fa-circle-left"></i></button>
</div>
  `;
    } else {
      return "";
    }
  })()}
  <form id="edit-project-page">
    <ul id="edit-project-info">
      <li id="edit-project-title-contain">
        <input id="edit-project-title" ${(function () {
          if (project.id) {
            return `
                    value="${project.title}"
                    `;
          }
        })()}" placeholder ="Put title here"></input>
      </li>
      <li id="edit-project-solving-contain">
        <div id="edit-project-solving"><span class="solving-proposal">Solving: </span>
        <textarea id="edited-solving" placeholder="Put solving text here.">${(function () {
          if (project.id) {
            return project.solving;
          } else {
            return "";
          }
        })()}</textarea>
        </div>
      </li>
      <li id="edit-project-proposal-contain">
        <p id="edit-project-proposal"><span class="solving-proposal">Proposal: </span>
        <textarea id="edited-proposal" placeholder="Put proposal text here.">${(function () {
          if (project.id) {
            return project.proposal;
          } else {
            return "";
          }
        })()}</textarea>
        </p>
      </li>
        ${(function () {
          if (project.id) {
            return projectPicsEl;
          } else {
            return "";
          }
        })()}
        <li id="edit-project-add-pics-and-vids-contain">
        <ul id="edit-project-add-pics-and-vids">
        <li id="edit-project-add-pic-contain">
        <button id="edit-project-add-pic-btn">
        <ul id="edit-project-add-pic-btn-content> 
        <li id="edit-project-add-pic-btn-icon">
        <i class="fa-solid fa-plus"></i>
        </li>
        <li id="edit-project-add-pic-btn-text">
        <p>Add Photo</p>
        </li>
        </ul></button>
        </li>
        <li id="edit-project-add-video-contain">
        <button id="edit-project-add-video-btn">
        <ul id="edit-project-add-video-btn-content>
        <li id="edit-project-add-video-btn-icon">
        <i class="fa-solid fa-plus"></i>
        </li>
        <li id="edit-project-add-video-btn-text">
        <p>Add Video</p>
        </li>
        </button>
        </li>
        </ul>
        <li id="edit-project-add-pic-video-inputs-contain">
        <ul id="edit-project-add-pic-video-inputs">
        </ul>
        </li>
    </ul>
    <aside id="edit-project-sidebar">
      <ul id="edit-project-sidebar-content">
        <li id="edit-project-main-img-contain">
        <ul>
          <li>
          ${(function () {
            if (project.id) {
              return `
          <img id="edit-project-main-img" src="${project.mainImg}" alt="${project.title}'s primary image">`;
            } else {return ""};
          })()}
  </li>
          <li class="">
          <input id="edit-project-main-img-input"  ${(function () {
            if (project.id) {
              return `
                      value="${project.mainImg}"
                      `;
            }
          })()}" placeholder="Put main image URL here"></input>
          </li>
          </ul>
        </li>
        <li id="edit-project-school-contain">
          <input id="edit-project-school" ${(function () {
            if (project.id) {
              return `
                      value="${project.school}"
                      `;
            }
          })()}" placeholder="Put school name here"></input>
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

    if (project.tags) {
      tagInputs.forEach((tagInput) => {
        console.log("Project tags: ", project.tags);
        if (project.tags.includes(tagInput.value)) {
          tagInput.checked = true;
        }
      });
    }

    //add btn functionality:
    const addPicBtnEl = document.getElementById("edit-project-add-pic-btn");
    const addVideoBtnEl = document.getElementById("edit-project-add-video-btn");
    const addPicVideoInputsEl = document.getElementById(
      "edit-project-add-pic-video-inputs"
    );

    addPicBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
      const picInput = `
        <li class="edit-project-add-pic-input-contain">
        <input class="edit-project-add-pic-input" placeholder="Add photo URL"></input>
        </li>
        `;
      addPicVideoInputsEl.insertAdjacentHTML("beforeend", picInput);
    });

    addVideoBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
      const videoInput = `
        <li class="edit-project-add-video-input-contain">
        <input class="edit-project-add-video-input" placeholder="Add video URL"></input>
        </li>
        `;
      addPicVideoInputsEl.insertAdjacentHTML("beforeend", videoInput);
    });

    //submit btn functionality:

    const submitBtnEl = document.getElementById("edit-project-submit-btn");
    const titleInputEl = document.getElementById("edit-project-title");
    const solvingInputEl = document.getElementById("edited-solving");
    const proposalInputEl = document.getElementById("edited-proposal");
    const mainImgInputEl = document.getElementsByClassName(
      "edit-project-main-img-input"
    )[0];

    // close btn functionality:
    const closeBtnEl = document.getElementById("close-edit-project-btn");

    if (closeBtnEl) {
      closeBtnEl.addEventListener("click", (e) => {
        e.preventDefault();

        specificProjectPage(project);
      });
    }
  }
};

export default editProjectPage;
