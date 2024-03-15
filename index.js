var aleatoryNumber1 = Math.floor(Math.random()*6)+1;
var faceDice1 = "images/dice" + aleatoryNumber1 + ".png";
var dado1 = document.querySelector(".img1");
dado1.setAttribute("src", faceDice1);

var aleatoryNumber2 = Math.floor(Math.random()*6)+1;
var faceDice2 = "images/dice" + aleatoryNumber2 + ".png";
var dado2 = document.querySelector(".img2");
dado2.setAttribute("src", faceDice2);

if (aleatoryNumber1 > aleatoryNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN!!!";
}
else if (aleatoryNumber1 < aleatoryNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN!!!";
} else {
    document.querySelector("h1").innerHTML = "EMPATE!";
}