import { itIsJen } from "./isJen.js";

const cookieLogin = async () => {
  if (document.cookie) {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sessionData="))
      ?.split("=")[1];

    const url = `/api/cookieLogin/`;

    const replyJson = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: cookieValue,
      },
    });

    const reply = await replyJson.json();
    const logged = reply.logged;
    const email = reply.email;

    if (email === "jen@herbie.com") {
   
      itIsJen(email);
    }

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
