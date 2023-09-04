const signUp = async (first, last, email, password) => {

    const login = await import("./login.js").then(
        async (module) => {
          return await module.default;
        }
      );

    const url = "/api/signup";
    const data = {
      first,
      last,
      email,
      password,
    };

    const signUpJson = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await signUpJson.json();

    if (response.message === "An account is already attached to this email address." || response.message === "password too long") {
      return response.message;
    } else {
        login(email, password);
    }

}

export default signUp;