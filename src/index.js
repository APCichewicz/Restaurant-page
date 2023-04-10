require("./style.css");
// require the tangerine font
const image = require("./assets/images/friends.jpg");
const github = require("./assets/images/github-mark.png");

// the restaurant menu
const menu = {
  appetizers: {
    bruschetta: "Toasted bread topped with tomatoes, garlic, and basil.",
    friedCalamari:
      "Tender calamari lightly coated in seasoned breadcrumbs and fried to perfection.",
    capreseSalad:
      "Fresh mozzarella, sliced tomatoes, and basil, drizzled with balsamic glaze.",
  },
  pasta: {
    spaghettiCarbonara:
      "Classic pasta dish with pancetta, egg, and parmesan cheese.",
    linguineAlleVongole:
      "Linguine pasta with fresh clams, garlic, and white wine sauce.",
    lasagnaAllaBolognese:
      "Traditional lasagna with layers of pasta, meat sauce, and béchamel.",
  },
  pizza: {
    margherita: "Classic pizza with tomato sauce, fresh mozzarella, and basil.",
    quattroFormaggi:
      "Four-cheese pizza with mozzarella, gorgonzola, fontina, and parmesan.",
    diavola: "Spicy pizza with tomato sauce, pepperoni, and chili flakes.",
  },
  entrees: {
    ossoBuco: "Braised veal shanks with vegetables and white wine.",
    polloAllaCacciatora:
      "Chicken braised with tomatoes, onions, and bell peppers.",
    branzinoAlForno:
      "Whole baked Mediterranean sea bass with garlic and herbs.",
  },
  desserts: {
    tiramisu:
      "Classic Italian dessert with layers of mascarpone cheese and ladyfingers soaked in espresso.",
    cannoli:
      "Crispy pastry shells filled with sweet ricotta cream and chocolate chips.",
    gelato:
      "Italian-style ice cream in various flavors such as vanilla, chocolate, and pistachio.",
  },
};

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
  // first clear main of any content
  main.innerHTML = "";

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

function generateMenuView() {
  // first clear main of any content
  main.innerHTML = "";

  //create the menu view which spans the page. it will contain a centered square div which take sup about 50% of the page width
  //the div will have a semi-transparent black background and will contain a brief description of the restaurant and a representative image
  const menuView = document.createElement("div");
  menuView.classList.add("menu-view");
  main.appendChild(menuView);
  // iterate over the menu object and for each main category create a div with a title and a list of the items
  for (const category in menu) {
    //create the div for the category
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    menuView.appendChild(categoryDiv);
    //create the title for the category
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);
    //create the list for the category
    const categoryList = document.createElement("ul");
    categoryDiv.appendChild(categoryList);
    //iterate over the items in the category and create a list item for each item with the item name and description
    for (const item in menu[category]) {
      //create the list item
      const listItem = document.createElement("li");
      categoryList.appendChild(listItem);
      //create the item name
      const itemName = document.createElement("h3");
      itemName.textContent = item;
      listItem.appendChild(itemName);
      //create the item description
      const itemDescription = document.createElement("p");
      itemDescription.textContent = menu[category][item];
      listItem.appendChild(itemDescription);
    }
  }

  menuAnchor.classList.add("selected");
}
function generateContactView() {
  // first clear main of any content
  main.innerHTML = "";

  const contactView = document.createElement("div");
  contactView.classList.add("contact-view");
  main.appendChild(contactView);
  const contactViewContent = document.createElement("div");
  contactViewContent.classList.add("contact-view-content");
  contactView.appendChild(contactViewContent);
  const contactInfo = document.createElement("p");
  contactInfo.textContent =
    "Thank you for your interest in Primavera Italian restaurant! We are always happy to hear from our customers. Please feel free to contact us with any questions, comments, or concerns. You can reach us by phone at (555) 123-4567, or by email at info@primavera.com. Our restaurant is located at 123 Main Street in the heart of the city, and we look forward to seeing you soon!";
  contactViewContent.appendChild(contactInfo);
  const contactInfo2 = document.createElement("p");
  contactInfo2.textContent = "Email:";
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

//add event listeners to the links in the navbar
homeAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  //remove the selected class from the other links
  menuAnchor.classList.remove("selected");
  contactAnchor.classList.remove("selected");
  //add the selected class to the homeanchor tag
  homeAnchor.classList.add("selected");
  generateMainView();
});
menuAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  //remove the selected class from the other links
  homeAnchor.classList.remove("selected");
  contactAnchor.classList.remove("selected");
  //add the selected class to the homeanchor tag
  menuAnchor.classList.add("selected");
  generateMenuView();
});
contactAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  //remove the selected class from the other links
  homeAnchor.classList.remove("selected");
  menuAnchor.classList.remove("selected");
  //add the selected class to the homeanchor tag
  contactAnchor.classList.add("selected");
  generateContactView();
});
