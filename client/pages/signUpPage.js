const signUpPage = async () => {
    //body
    const bodyEl = document.getElementById("body");

    //setting content to relevant info
    bodyEl.innerHTML = `
    <div id="sign-up-page">
    <div id="sign-up-title">
    <h1>Sign Up</h1>
    </div>
    <form id="sign-up-form">
    <ul id="sign-up-inputs">
      <li id="sign-up-username">
        <label for="username">Username:</label>
        <input class="sign-up-input" name="username">
      </li>
      <li id="sign-up-password">
        <label for="password">Password:</label>
        <input name="password" type="password" minlength="8" class="sign-up-input">
        <p id="password-rules">Password must be at least 8 characters long.</p>
      </li>
      <li id="confirm-password">
        <label for="confirm-password">Confirm Password:</label>
        <input name="confirm-password" type="password" minlength="8" class="sign-up-input">
      </li>
    </ul>
    <p class="error-message"></p>
    <div id="sign-up-btn-contain">
    <button id="sign-up-btn">Sign Up</button>
    <button id="already-have-account-btn">Already have an account?</button>
    <aside id="copyright" class="not-logged-copyright">
    <p>Copyright © 2023 The Philly Service Award</p>
    </aside>
    </div>
  </form>
    </div>`;

      //async imports of relevant modules:
  const loginPage = await import("./loginPage.js").then(
    async (module) => {
      return await module.default;
    });

    // TODO: De-comment when sign up function is in:
  // const signUp = await import("../utils/signUp.js").then(async (module) => {
  //   return await module.default;
  // });

    //input els
    const usernameLi = document.getElementById("sign-up-username");
    const usernameInput = usernameLi.getElementsByTagName("input")[0];

    const passwordLi = document.getElementById("sign-up-password");
    const passwordInput = passwordLi.getElementsByTagName("input")[0];

    const confirmPasswordLi = document.getElementById("confirm-password");
    const confirmPasswordInput = confirmPasswordLi.getElementsByTagName("input")[0];

    const signUpBtnEl = document.getElementById("sign-up-btn");

    const errorMessageEl = document.getElementsByClassName("error-message")[0];

    //event listener for sign-up btn

    signUpBtnEl.addEventListener("click", async (e) => {
      e.preventDefault();

      console.log(" SIGN UP FUNCTIONS COMING (MAYBE FROM DOWN)");

    //   if (passwordInput.value.length >= 8) {
      
    //   if (passwordInput.value === confirmPasswordInput.value) {

    //     const signUpRes = await signUp(usernameInput.value, passwordInput.value);

        

    //     if(signUpRes === "Username already taken") {
    //       errorMessageEl.innerHTML = `${usernameInput.value} is already taken.`
    //     }
    //   } else {

    //     errorMessageEl.innerHTML = `Password does not match confirmation.`
    //   }
    // } else {
    //   errorMessageEl.innerHTML = `Password must have at least 8 characters.`
    // }
    });
    



  //switch to login page
  const loginBtnEl = document.getElementById("already-have-account-btn");

  loginBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    loginPage();
});

  };

  export default signUpPage;
