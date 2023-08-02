const signUpPage = async (error) => {
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
      <li id="sign-up-email">
        <label for="email">Email:</label>
        <input class="sign-up-input" name="email">
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
    <button id="sign-up-btn">Next</button>
    <button id="already-have-account-btn">Already have an account?</button>
    <aside id="copyright" class="not-logged-copyright">
    <p>Copyright © 2023 The Philly Service Award</p>
    </aside>
    </div>
  </form>
    </div>`;

  // These first and last name inputs to replace email and pw input els:

  const replacementInputs = `
  <li id="sign-up-first-name">
  <label for="first-name">First Name:</label>
  <input name="first-name" type="text" class="sign-up-input">
</li>
<li id="sign-up-last-name">
  <label for="last-name">Last Name:</label>
  <input name="last-name" type="text" class="sign-up-input">
</li>`;

  //async imports of relevant modules:
  const loginPage = await import("./loginPage.js").then(async (module) => {
    return await module.default;
  });

  const signUp = await import("../utils/signUp.js").then(async (module) => {
    return await module.default;
  });

  //input els
  const inputsUl = document.getElementById("sign-up-inputs");

  const emailLi = document.getElementById("sign-up-email");
  const emailInput = emailLi.getElementsByTagName("input")[0];

  const passwordLi = document.getElementById("sign-up-password");
  const passwordInput = passwordLi.getElementsByTagName("input")[0];

  const confirmPasswordLi = document.getElementById("confirm-password");
  const confirmPasswordInput =
    confirmPasswordLi.getElementsByTagName("input")[0];

  const signUpBtnEl = document.getElementById("sign-up-btn");

  const errorMessageEl = document.getElementsByClassName("error-message")[0];

  //add an error if there's been a fetch issue
  if (error) {
    errorMessageEl.innerHTML = error;
  }

  //event listener for sign-up btn

  //save the information from the first button click (email and password):

  let chosenEmail = "";
  let chosenPassword = "";
  
  //first and last name lis (with let cause they need to be generted after the fact):
  let firstNameLi;
  let firstNameInput;  
  let lastNameLi;
  let lastNameInput;

  signUpBtnEl.addEventListener("click", async (e) => {
    e.preventDefault();

    if (signUpBtnEl.innerHTML === "Next") {
      if (passwordInput.value.length >= 8) {
        if (passwordInput.value === confirmPasswordInput.value) {
          chosenEmail = emailInput.value;
          chosenPassword = passwordInput.value;
          inputsUl.innerHTML = replacementInputs;
          firstNameLi = document.getElementById("sign-up-first-name");
          firstNameInput = firstNameLi.getElementsByTagName("input")[0];   
          lastNameLi = document.getElementById("sign-up-last-name");
          lastNameInput = lastNameLi.getElementsByTagName("input")[0];
          signUpBtnEl.innerHTML = "Sign Up";
          errorMessageEl.innerHTML = "";
        } else {
          errorMessageEl.innerHTML = `Password does not match confirmation.`;
        }
      } else {
        errorMessageEl.innerHTML = `Password must have at least 8 characters.`;
      }
    } else if (signUpBtnEl.innerHTML === "Sign Up") {

      const responseMessage = await signUp(firstNameInput.value, lastNameInput.value, chosenEmail, chosenPassword);

      if (responseMessage) {
        signUpPage (responseMessage)
      }
    }

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
