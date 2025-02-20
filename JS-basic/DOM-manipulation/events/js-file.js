const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World!");
})

//Using named function
let alertFunction = () => alert("YAY! YOU DID IT!!!");
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", alertFunction);

//Attaching listeners to group of nodes
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => alert(button.id))
});