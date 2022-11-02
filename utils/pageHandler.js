const pageHandler = async () => {
  //create relevant dom els
  const pageListEl = document.getElementById("footer-list");
  const pageIconEls = Array.from(pageListEl.getElementsByTagName("li"));

  //async imports of relevant modules:
//   const homePage = await import("../pages/homepage.js").then(async (module) => {
//     return await module.default;
//   });

//   const projectsPage = await import("../pages/settingsPage.js").then(async (module) => {
//     return await module.default;
//   });

//   const partnersPage = await import("../pages/friendsPage.js").then(async (module) => {
//     return await module.default;
//   });

  //creates onClicks for footer icons
  pageIconEls.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();

      //change class of selected icon to show its selected
      pageIconEls.forEach((el) => {
        el.removeAttribute("class");
      });
      icon.setAttribute("class", "page-selected");

      //load page related to icon
    //   if (icon.dataset.page === "home") {
    //     mainPage();
    //   } else if (icon.dataset.page === "friends") {
    //     friendsPage();
    //   } else if (icon.dataset.page === "settings") {
    //     settingsPage();
    //   } else if (icon.dataset.page === "logout") {
    //     logout();
    //   }
    });
  });
};

export default pageHandler;
