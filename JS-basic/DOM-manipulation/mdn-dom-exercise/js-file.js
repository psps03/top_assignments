//Changing link
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//Adding paragraph to section
const sec = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoy the ride.";

sec.appendChild(para);

//Adding text node to paragraph
const text = document.createTextNode(
    " - the premier source for web development knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//Moving the paragraph to the bottom of the section
sec.appendChild(linkPara);

//Removing a node
sec.removeChild(linkPara);

//Remove a node based only on reference to itself
linkPara.remove();

/*For old browsers
linkPara.parentNode.removeChild(linkPara);*/