import "../scss/styles.scss";

const h1 = document.querySelector("h1");
h1.style.backgroundColor("red");

const hello = () => console.log("hello");

h1.addEventListener("click", hello);
