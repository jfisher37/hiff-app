const login = async (email, password) => {
  const loggedInFrame = await import("../pages/loggedInFrame.js").then(
    async (module) => {
      return await module.default;
    }
  );

  const homepage = await import("../pages/homepage.js").then(async (module) => {
    return await module.default;
  });

  const url = "/api/login";
  const data = {
    email,
    password,
  };
  const loginJson = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const token = await loginJson.json();

  if (token.message) {
    return token.message;
  } else {
    const cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() + 72 * 60 * 60 * 1000);
    const expires = "expires=" + cookieDate.toUTCString();
    document.cookie = `sessionData` + "=" + token + ";" + expires + ";path=/";
    // load logged in frame:
    loggedInFrame();

    //initial load is homepage
    homepage();
  }
};

export default login;
