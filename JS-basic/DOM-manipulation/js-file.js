const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//Adding paragraph to the DOM
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

container.appendChild(p);

//Adding h3 to the DOM
const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3!";

container.appendChild(heading3);

//Adding div to the DOM
const div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background: pink; padding: 3px;");

//Adding elements inside div
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const text = document.createElement("p");
text.textContent = "ME TOO";
div.appendChild(text);

container.appendChild(div);