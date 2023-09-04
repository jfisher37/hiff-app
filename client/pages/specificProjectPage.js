import tagGenerator from "../utils/tagGenerator.js";
import projectPage from "./projectPage.js";
import { isJen } from "../utils/isJen.js";

let currentPhotoIndex = 0;

const specificProjectPage = async (project) => {
  const mainEl = document.getElementById("main");

  let jensEditor = "";

  if (await isJen()) {
    jensEditor = `<span id="edit-project-btn"><i class="fa-solid fa-gear"></i></span>`;
  };

  // create tags:
  const tagsArr = tagGenerator(project.tags);

  const projectPicGenerator = (photosArr, videoArr) => {
    if (photosArr || videoArr) {
      const picEls = [];

      if(photosArr) {
      for (let i = 0; i < photosArr.length; i++) {
        const picEl = `
                <li class="specific-project-pic-contain">
                <img class="specific-project-pic" src="${photosArr[i]}" alt="User-uploaded photo for ${project.title}">
              </li>
                `;

        picEls.push(picEl);
      }
    }

    if(videoArr) {
      for (let i = 0; i < videoArr.length; i++) {
        const videoEl = `
                <li class="specific-project-video-contain">
                <iframe src="${videoArr[i]}" title="User-uploaded video for ${project.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="specific-project-video"></iframe>
              </li>
              `;
        picEls.push(videoEl);
      }
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

  const projectPicsEl = projectPicGenerator(project.imgs, project.videos);

  const specificProjectContent = `
  <div class="enlarged-photo-modal" id="enlarged-photo-modal">
  <span class="modal-close" id="modal-close">&times;</span>
  <div class="modal-content">
    <img class="enlarged-photo" id="enlarged-photo" src="" alt="Enlarged Photo">
    <a class="prev" id="prev">&#10094;</a>
    <a class="next" id="next">&#10095;</a>
  </div>
</div>
    <div id="close-specific-project-btn-contain">
    <button id="close-specific-project-btn"><i class="fa-regular fa-circle-left"></i></button>
  </div>
  <article id="specific-project-page">
    <ul id="specific-project-info">
      <li id="specific-project-title-contain">
        <h3 id="specific-project-title">${project.title}${jensEditor}</h3>
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

    // edit btn functionality:
    const editBtnEl = document.getElementById("edit-project-btn");

    if (editBtnEl) {

      const editProjectPage = await import("./editProjectPage.js").then(async (module) => {
        return await module.default;
      });

      editBtnEl.addEventListener("click", (e) => {
        e.preventDefault();
    
        editProjectPage(project)
      });
    }

    //photo enlage functionality: 
    // Inside the specificProjectPage function
const photoContainers = document.querySelectorAll(".specific-project-pic-contain");
const enlargedPhotoModal = document.getElementById("enlarged-photo-modal");
const enlargedPhoto = document.getElementById("enlarged-photo");
const modalCloseBtn = document.getElementById("modal-close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Open the modal and show the clicked image
photoContainers.forEach((container, index) => {
  const img = container.querySelector(".specific-project-pic");
  img.addEventListener("click", () => {
    currentPhotoIndex = index;
    enlargedPhoto.src = img.src;
    enlargedPhotoModal.style.display = "block";
  });
});

// Close the modal
modalCloseBtn.addEventListener("click", () => {
  enlargedPhotoModal.style.display = "none";
});

// Navigate to the previous photo
prevBtn.addEventListener("click", () => {
  currentPhotoIndex = (currentPhotoIndex - 1 + photoContainers.length) % photoContainers.length;
  enlargedPhoto.src = photoContainers[currentPhotoIndex].querySelector(".specific-project-pic").src;
});

// Navigate to the next photo
nextBtn.addEventListener("click", () => {
  currentPhotoIndex = (currentPhotoIndex + 1) % photoContainers.length;
  enlargedPhoto.src = photoContainers[currentPhotoIndex].querySelector(".specific-project-pic").src;
});

// Close modal when clicking outside the photo
window.addEventListener("click", (event) => {
  if (event.target === enlargedPhotoModal) {
    enlargedPhotoModal.style.display = "none";
  }
});
};

export default specificProjectPage;
