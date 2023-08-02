const cookieLogin = async () => {
  if (document.cookie) {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sessionData="))
      ?.split("=")[1];

    const url = `/api/cookieLogin/`;

    const loggedJson = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: cookieValue,
      },
    });

    const logged = await loggedJson.json();

    if (logged.message === "Invalid token") {
        return false
    } else {
        return true;
    }
  } else {
    return false;
  }
};

export default cookieLogin;
