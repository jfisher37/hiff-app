import tagGenerator from "../utils/tagGenerator.js"
import specificProjectPage from "./specificProjectPage.js"

//Set default filter and sort
let filter = "allProjects";
let sort = "newest";
let windowYOffset = 0;

//What filters and sort are selected

const filterSelection = {
  all: "selected",
  community: "",
  education: "",
  hunger: "",
  socialJustice: "",
  centerCity: "",
  northPhilly: "",
  northeastPhilly: "",
  southPhilly: "",
  westPhilly: "",
};

const sortSelection = {
  newest: "selected",
  budget: "",
};

// var for whether or not specific page is open. Default to false

let specificPageOpen = 0;

// TODO: SET IMAGES TO LAZY LOAD

const projectPage = async (closed) => {

  // create conditional statement for whether a specfic project page is still open:
  if (closed) {
    specificPageOpen = 0;
  } 



  const mainEl = document.getElementById("main");

  const getCards = async () => {
    // TODO: Change to funtion that fetches cards from db

    const url = '/api/get-projects'
    const cardsJson = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'authorization': `3e9cc126-543b-4185-b79d-a1c9af5f601e`,
      },
    });
    const cardsArr = await cardsJson.json();

    //TODO: add category for creation date

    const sampleArr = [
      {
        title: "Helping People",
        firstName: "Phil",
        lastName: "Helper",
        school: "Central High School",
        budget: 5005,
        tags: ["community", "west-philly"],
        profilePic: "./assets/images/placeholder_300x300.jpeg",
        solving: "There are a lot of people in Philadelphia. Over one and a half million. Some of them need help.",
        proposal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        photos: [],
        createdAt: new Date("2022-06-01"),
        id: "1",
      },
      {
        title: "Helping MORE People",
        firstName: "Philip",
        lastName: "Moorehelpful",
        school: "Some Other School",
        budget: 500,
        tags: ["community", "education", "center-city", "south-philly"],
        profilePic: "./assets/images/placeholder_300x300.jpeg",
        solving: "There are a lot of people in Philadelphia. Over one and a half million. Some of them need help. I propose to help more of them than Phil Helper, that sanctimonious, ineffective worm.",
        proposal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        photos: ["./assets/images/placeholder_300x300.jpeg", "./assets/images/placeholder_300x300.jpeg"],
        createdAt: new Date("2022-09-01"),
        id: "2",
      },
      {
        title: "Cleaning Up All The Garbage in Philadelphia",
        firstName: "Katherine",
        lastName: "Tidyman",
        school: "Bodine",
        budget: 30000,
        tags: [
          "community",
          "social-justice",
          "west-philly",
          "northeast-philly",
        ],
        profilePic: "./assets/images/placeholder_300x300.jpeg",
        solving: "I'm tired of all the garbage lying around in this damn city, aren't you? we've gotta get rid of the garbage. We gotta clean it all.",
        proposal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        photos: ["./assets/images/placeholder_300x300.jpeg"],
        createdAt: new Date("2022-12-01"),
        id: "3",
      },
      {
        title: "Feed The Children",
        firstName: "Mildred",
        lastName: "Cooke",
        school: "A Very Long-named High School",
        budget: 27300,
        tags: ["hunger", "community", "west-philly", "north-philly"],
        profilePic: "./assets/images/placeholder_300x300.jpeg",
        solving: "People are hungry. It's very bad.",
        proposal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
        photos: ["./assets/images/placeholder_300x300.jpeg", "./assets/images/placeholder_300x300.jpeg", "./assets/images/placeholder_300x300.jpeg"],
        createdAt: new Date("2023-01-04"),
        id: "4",
      },
    ];

    return cardsArr;
  };

  const cards = await getCards();

  const openSpecificProject = (cardNum) => {
    for (let i = 0; i < cards.length; i++) {
      if (cardNum === cards[i].id) {
        specificProjectPage(cards[i]);
        return;
      }
    }
  };

  if (specificPageOpen) {
    
    openSpecificProject(specificPageOpen)
    return;
  };

  const leftCardArr = [];

  const rightCardArr = [];

  const cardGeneration = (cardContentArr) => {
    for (let i = 0; i < cardContentArr.length; i++) {
      // Creates the tags for the card
      const tagsArr = tagGenerator(cardContentArr[i].tags);

      const cardTemplate = `
            <li class="project-card" data-projectid="${cardContentArr[i].id}">
            <ul class="project-card-content">
              <li class="project-card-title">
                <h3>${cardContentArr[i].title}</h3>
              </li>
              <li class="project-card-person">
                <ul class="project-card-person-ul">
                  <li class="person-pic-contain">
                    <img class="person-pic" src="${cardContentArr[i].profilePic}">
                  </li>
                  <li class="person-name-contain">
                    <h3 class="first-name">${cardContentArr[i].firstName}</h3>
                    <h3 class="last-name">${cardContentArr[i].lastName}</h3>
                  </li>
                </ul>
              </li>
              <li class="project-card-school">
                <h4 class="school-name">School: ${cardContentArr[i].school}</h4>
              </li>
              <li class="project-card-budget">
                <h4 class="budget">Budget: $${cardContentArr[i].budget}</h4>
              </li>
              <li class="project-card-tags">
                <ul class="project-tag-list">
                    ${tagsArr.join("")}
                </ul>
              </li>
            </ul>
          </li>
            `;

      // if its 0 or even, push into the left card contain, if it's an odd number, push into right card contain
      if (i === 0 || i % 2 === 0) {
        leftCardArr.push(cardTemplate);
      } else {
        rightCardArr.push(cardTemplate);
      }
    }
  };

  const projectPageContent = `
    <h2 id="projects-title">Current Projects</h2>
    <form id="project-organization">
      <ul id="project-organization-ul">
        <li id="project-filter-li">
          <select name="project-filter-select">
            <option ${filterSelection.allProjects} value="allProjects">All Projects</option>
            <optgroup label="Cause">
              <option ${filterSelection.community} value="community">Community</option>
              <option ${filterSelection.education} value="education">Education</option>
              <option ${filterSelection.hunger} value="hunger">Hunger</option>
              <option ${filterSelection.socialJustice} value="socialJustice">Social Justice</option>
            </optgroup>
            <optgroup label="Location">
              <option ${filterSelection.centerCity} value="centerCity">Center City</option>
              <option ${filterSelection.northPhilly} value="northPhilly">North Philly</option>
              <option ${filterSelection.northeastPhilly} value="northeastPhilly">Northeast Philly</option>
              <option ${filterSelection.southPhilly} value="southPhilly">South Philly</option>
              <option ${filterSelection.westPhilly} value="westPhilly">West Philly</option>
            </optgroup>
            <optgroup label="School">
              <option value="test">Test</option>
            </optgroup>
          </select>
        </li>
        <li id="project-sort-li">
          <select name="project-sort-select">
            <option ${sortSelection.newest} value="newest">Newest</option>
            <option ${sortSelection.budget} value="budget">Budget</option>
          </select>
        </li>
      </ul>
    </form>
    <ul id="project-card-contain">

    </ul>
  <aside id="copyright">
    <p>Copyright © 2023 The Philly Service Award</p>
  </aside>
    `;


  mainEl.innerHTML = projectPageContent;

  // Necessary elements
  const cardContainEl = document.getElementById("project-card-contain");
  const filterSelectEl = document.getElementsByName("project-filter-select")[0];
  const sortSelectEl = document.getElementsByName("project-sort-select")[0];

  //Onclick event response for cards:

  const addCardClickResponse = () => {
    const projectCardEls = Array.from(
      document.getElementsByClassName("project-card")

    );

    projectCardEls.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const cardNum = card.dataset.projectid;

        openSpecificProject(cardNum);

        specificPageOpen = cardNum;

      });
    });
  };

  const cardSorter = (cardsArr, filter, sort) => {
    const sortCards = (filteredCards) => {
      if (sort === "newest") {
        return filteredCards.sort((a, b) => a.createdAt - b.createdAt);
      } else if (sort === "budget") {
        return filteredCards.sort((a, b) => a.budget - b.budget);
      }
    };

    //If it's all projects don't filter, just sort
    if (filter === "allProjects") {
      return sortCards(cardsArr);
    } else {
      const filteredCardsArr = cardsArr.filter((card) => {
        switch (filter) {
          case "community":
            if (card.tags.includes("community")) {
              return true;
            }
            break;
          case "education":
            if (card.tags.includes("education")) {
              return true;
            }
            break;
          case "hunger":
            if (card.tags.includes("hunger")) {
              return true;
            }
            break;
          case "socialJustice":
            if (card.tags.includes("social-justice")) {
              return true;
            }
            break;
          case "centerCity":
            if (card.tags.includes("center-city")) {
              return true;
            }
            break;
          case "northPhilly":
            if (card.tags.includes("north-philly")) {
              return true;
            }
            break;
          case "northeastPhilly":
            if (card.tags.includes("northeast-philly")) {
              return true;
            }
            break;
          case "southPhilly":
            if (card.tags.includes("south-philly")) {
              return true;
            }
            break;
          case "westPhilly":
            if (card.tags.includes("west-philly")) {
              return true;
            }
            break;

          default:
            break;
        }
      });

      return sortCards(filteredCardsArr);
    }
  };

  const sortedCards = cardSorter(cards, filter, sort);

  const insertCards = (cards) => {
    cardGeneration(cards);

    const cardEls = `
<li id="left-project-cards">
    <ul id="left-project-card-contain">
     ${leftCardArr.join("")}
    </ul>
</li>
<li id="right-project-cards">
  <ul id="right-project-card-contain">
     ${rightCardArr.join("")}
  </ul>
</li>
`;

    cardContainEl.innerHTML = cardEls;

    addCardClickResponse();

    return;
  };

  insertCards(sortedCards);

  //Manage changes to filters and sorts.
  //Basically, change value of let vars, empty card container, resort and filter, reinsert

  const replaceCards = () => {
    cardContainEl.innerHTML = "";

    while (leftCardArr.length) {
      leftCardArr.pop();
    }

    while (rightCardArr.length) {
      rightCardArr.pop();
    }

    insertCards(cardSorter(cards, filter, sort));
  };

  filterSelectEl.addEventListener("change", () => {
    filter = filterSelectEl.value;

    replaceCards();

    for (const selection in filterSelection) {
      if (selection === filter) {
        filterSelection[selection] = "selected";
      } else {
        filterSelection[selection] = "";
      }
    }
  });

  sortSelectEl.addEventListener("change", () => {
    sort = sortSelectEl.value;

    replaceCards();

    for (const selection in sortSelection) {
      if (selection === sort) {
        sortSelection[selection] = "selected";
      } else {
        sortSelection[selection] = "";
      }
    }
  });

//   Get and Set scrollY

  document.addEventListener("scroll", () => {

   //Only if we're on the project page
    if (document.getElementById("projects-title")){
        windowYOffset = window.scrollY;
    }
  })

  window.scroll(0, windowYOffset);
};

export default projectPage;
