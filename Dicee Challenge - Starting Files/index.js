let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];
let h1 = document.getElementsByTagName("h1")[0];

const rand1 = Math.floor(Math.random() * 6) + 1;
const rand2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute("src", "/Dicee Challenge - Starting Files/images/dice" + rand1 + ".png");
img2.setAttribute("src", "/Dicee Challenge - Starting Files/images/dice" + rand2 + ".png");

console.log(img1.getAttribute("src"));
console.log(img2.getAttribute("src"));

if (rand1 > rand2) {
    h1.textContent = "Player 1 Wins";
} else if (rand1 == rand2) {
    h1.textContent = "It's a draw!";
} else {
    h1.textContent = "Player 2 Wins";
}
