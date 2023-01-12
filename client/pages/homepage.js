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
      <p id="about-us-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </article>
  <aside id="copyright">
    <p>Copyright © 2023 Organization Name</p>
  </aside>
    `

    mainEl.innerHTML = homepageContent;

    //reset scroll:
    window.scroll(0, 0);
  };
  
  export default homepage;
  