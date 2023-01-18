const loginPage = async () => {
  //body
  const bodyEl = document.getElementById("body");

  //setting content to relevant info
  bodyEl.innerHTML = `
    <div id="login-page">
      <div id="login-title">
      <h1>Login</h1>
      </div>
      <form id="login-form">
      <ul id="login-inputs">
        <li id="login-username">
          <label for="username">Username:</label>
          <input class="login-input" name="username">
        </li>
        <li id="login-password">
          <label for="password">Password:</label>
          <input name="password" type="password" minlength="8" class="login-input">
        </li>
      </ul>
      <p class="error-message"></p>
      <div id="login-btn-contain">
      <button id="login-btn">Login</button>
      <button id="dont-have-account-btn">Don't have an account?</button>
      <aside id="copyright" class="not-logged-copyright">
      <p>Copyright © 2023 The Philly Service Award</p>
      </aside>
      </div>
    </form>
      </div>`;

  //async imports of relevant modules:
  const signUpPage = await import("./signUpPage.js").then(async (module) => {
    return await module.default;
  });

  // TODO: de-comment when login function is built
  // const login = await import("../utils/login.js").then(async (module) => {
  //   return await module.default;
  // });

  //input els
  const usernameLi = document.getElementById("login-username");
  const usernameInput = usernameLi.getElementsByTagName("input")[0];

  const passwordLi = document.getElementById("login-password");
  const passwordInput = passwordLi.getElementsByTagName("input")[0];

  const loginBtnEl = document.getElementById("login-btn");

  const errorMessageEl = document.getElementsByClassName("error-message")[0];

  //login btn onClick
  loginBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();

    console.log("LOGIN COMING");

    // TODO: de-comment when login function is created
    //pass username and pw into login.js
    // const res = await login(usernameInput.value, passwordInput.value);

    // if (res) {
    //   errorMessageEl.innerHTML = res;
    // };
  });

  // btn to load sign up page.
  const signUpBtnEl = document.getElementById("dont-have-account-btn");

  signUpBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    signUpPage();
  });
};

export default loginPage;
