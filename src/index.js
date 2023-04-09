require("./style.css");
// require the tangerine font
const image = require("./assets/images/friends.jpg");
const github = require("./assets/images/github-mark.png");

//retrieve the root div from teh document with class content
const root = document.querySelector(".content");
console.log(root);

// create the header
const header = document.createElement("header");
header.classList.add("header");
root.appendChild(header);
//create the title of the page: the restaurant name
const title = document.createElement("h1");
title.textContent = "Primavera";
header.appendChild(title);
//create the navbar
const navbar = document.createElement("nav");
navbar.classList.add("navbar");
header.appendChild(navbar);
//create the links for the navbar
const link = document.createElement("ul");
const homeLink = document.createElement("li");
const menuLink = document.createElement("li");
const contactLink = document.createElement("li");
//anchor tags for the links
const homeAnchor = document.createElement("a");
const menuAnchor = document.createElement("a");
const contactAnchor = document.createElement("a");
//set the href attribute for the anchor tags to null as this will be handled with an event listner
homeAnchor.href = "#";
menuAnchor.href = "#";
contactAnchor.href = "#";
//set the text content for the anchor tags
homeAnchor.textContent = "Home";
menuAnchor.textContent = "Menu";
contactAnchor.textContent = "Contact";
//append the anchor tags to the list items
homeLink.appendChild(homeAnchor);
menuLink.appendChild(menuAnchor);
contactLink.appendChild(contactAnchor);
//append the list items to the unordered list
link.appendChild(homeLink);
link.appendChild(menuLink);
link.appendChild(contactLink);
navbar.appendChild(link);

//create the main content area
const main = document.createElement("main");
main.classList.add("main");
root.appendChild(main);

//use a function to then generate the main view so that it can be reused
//the main view will be the default view when the page is loaded
//additionally it will contain a centered square div with a representative image of the restaurant and a brief description of the restaurant
function generateMainView() {
  //create the main view which spans the page. it will contain a centered square div which take sup about 50% of the page width
  //the div will have a semi-transparent black background and will contain a brief description of the restaurant and a representative image
  const mainView = document.createElement("div");
  mainView.classList.add("main-view");
  main.appendChild(mainView);
  //create the div that will contain the description and the image
  const mainViewContent = document.createElement("div");
  mainViewContent.classList.add("main-view-content");
  mainView.appendChild(mainViewContent);
  //create the description
  const description = document.createElement("p");
  description.textContent =
    "Primavera: Rustic upscale Italian restaurant, authentic cuisine, fresh pasta, wood-fired pizza, finest ingredients, warm ambiance for romantic dinners, family celebrations, and nights out.";
  mainViewContent.appendChild(description);
  //create the image
  const friendImage = document.createElement("img");
  friendImage.src = image;
  friendImage.alt = "image of friends eating at Primavera";
  mainViewContent.appendChild(friendImage);

  //add the selected class to the homeanchor tag
  homeAnchor.classList.add("selected");
}

// end the page with a footer
const footer = document.createElement("footer");
footer.classList.add("footer");
root.appendChild(footer);
//create the footer content
const footerContent = document.createElement("div");
footerContent.classList.add("footer-content");
footer.appendChild(footerContent);
//create the footer text
const footerText = document.createElement("p");
footerText.textContent = "Primavera Restaurant";
footerContent.appendChild(footerText);
//add the copyright message at the bottom of the footer
const footerCopy = document.createElement("p");
// copywright 20234 Andrew Cichewicz and ended with the github symbol which is a link to github
footerCopy.innerHTML =
  "&copy; 2021 Andrew Cichewicz <a href='https://github.com/APCichewicz'></a>";
const githubImage = document.createElement("img");
githubImage.src = github;
githubImage.alt = "github logo";
footerCopy.querySelector("a").appendChild(githubImage);
footerContent.appendChild(footerCopy);

generateMainView();
