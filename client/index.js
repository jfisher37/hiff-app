import homepage from "./pages/homepage.js"
import loggedInFrame from "./pages/loggedInFrame.js";
import splashPage from "./pages/splashPage.js";


// TODO: replace this with an auth function:
const loggedIn = false;

// If logged in, load logged in frame and homepage. If not, open splash page.

if (loggedIn) {

// load logged in frame:
loggedInFrame();

//initial load is homepage
homepage();
} else {

    splashPage();
};

