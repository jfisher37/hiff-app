const homepage = async () => {

    const mainEl = document.getElementById("main");

    const homepageContent = `
    <ul id="homepage-images">
    <li class="homepage-image-contain">
      <img
        class="homepage-image"
        src="./assets/images/placeholder_300x300.jpeg"
        alt="Placeholder Image"
      />
    </li>
    <li class="homepage-image-contain">
      <img
        class="homepage-image"
        src="./assets/images/placeholder_300x300.jpeg"
        alt="Placeholder Image"
      />
    </li>
    <li class="homepage-image-contain">
      <img
        class="homepage-image"
        src="./assets/images/placeholder_300x300.jpeg"
        alt="Placeholder Image"
      />
    </li>
  </ul>
  <article id="about-us">
    <h2 id="about-us-title">About Us</h2>
    <div id="about-us-text-contain">
      <p class="about-us-text">
      We are on a mission to make community service projects accessible to their visionaries. Philadelphia is brimming with young leaders with ideas for tangible change. We’re here to elevate those concepts into action. 
      </p>
      <br>
      <p class="about-us-text">
      We are partnering with area businesses to award funds to students with an appetite and plan for change. If selected, recipients will receive mentorship, project oversight, and recognition for their contributions.
      </p>
    </div>
  </article>
  <aside id="copyright">
    <p>Copyright © 2023 The Philly Service Award</p>
  </aside>
    `

    mainEl.innerHTML = homepageContent;

    //reset scroll:
    window.scroll(0, 0);
  };
  
  export default homepage;
  