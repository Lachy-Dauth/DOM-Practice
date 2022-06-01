const body = document.querySelector("body");

const redText = document.createElement("p");
redText.style.cssText = "color: red;";
redText.textContent = "Hey I'm red!";

body.appendChild(redText);

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue h3!";

body.appendChild(blueHeader);

const pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "background-color: pink; border: 1px black"

body.appendChild(pinkDiv);

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";

pinkDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";

pinkDiv.appendChild(p);