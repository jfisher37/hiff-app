const splashPage = async () => {
  //body
  const bodyEl = document.getElementById("body");

  // set to not-logged body when not logged in
  bodyEl.classList = "not-logged-body";

  bodyEl.innerHTML = `
<div id="splash">
<div id="splash-title">
<h1>The Philly Service Award</h1>
</div>
<ul id="splash-login-signup">
  <li id="splash-create-account"><button class="splash-btn">
    Create an account
  </button></li>
  <li id="splash-login"><button class="splash-btn">
    Log in
  </button></li>
  <aside id="copyright" class="not-logged-copyright copyright-splash">
  <p>Copyright © 2023 The Philly Service Award</p>
  </aside>
</ul>
</div>
`;


  //async imports of relevant modules:
  const signUpPage = await import("./signUpPage.js").then(
    async (module) => {
      return await module.default;
    }
  );
  const loginPage = await import("./loginPage.js").then(
    async (module) => {
      return await module.default;
    }
  );

  //create relevant els
  const signUpBtnLi = document.getElementById("splash-create-account");
  const signUpBtnEl = signUpBtnLi.getElementsByTagName("button")[0];
  const loginBtnLi = document.getElementById("splash-login");
  const loginBtnEl = loginBtnLi.getElementsByTagName("button")[0];
  
  signUpBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      signUpPage();
  });

  loginBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    loginPage();
});


};

export default splashPage;
