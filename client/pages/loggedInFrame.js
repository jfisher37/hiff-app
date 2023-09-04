import pageHandler from "../utils/pageHandler.js";
import isJen from "../utils/isJen.js";

const loggedInFrame = async () => {

    const bodyEl = document.getElementById("body");

    let jenTab = "";

    const isJenBool = await isJen();  

    if (isJenBool) {
        jenTab = `<li data-page="jen">
        <i class="fa-solid fa-plus"></i>
        <p>New Project</p>
      </li>`
    }


    // Add logged-in-body class to body, now that it's logged in;
    bodyEl.classList = "logged-in-body";

    const frameContent = `
    <header>
    <img id="org-name" src="./assets/images/logo.png"></img>
  </header>
  <main id="main">
 
  </main>
  <footer>
    <ul id="footer-list">
      <li class="page-selected" data-page="homepage">
        <i class="fa-solid fa-people-group"></i>
        <p>About Us</p>
      </li>
      <li data-page="projects">
        <i class="fa-solid fa-hand-holding-heart"></i>
        <p>Projects</p>
      </li>
      <li data-page="partners">
        <i class="fa-regular fa-handshake"></i>
        <p>Our Partners</p>
      </li>
      ${jenTab}
      <li data-page="logout">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
      <p>Logout</p>
    </li>
    </ul>
  </footer>
    `

    bodyEl.innerHTML = frameContent;

    //set up page handler
pageHandler();

  };
  
  export default loggedInFrame;