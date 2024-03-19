document.querySelector("button").addEventListener("click", function (){
    
    var number1 = Math.floor(Math.random()*6)+1; //generate a number 1-6
    var aleatoryDice1 = "images/dice" + number1 + ".png";
    var dice1 = document.querySelector(".img1"); //select class img1
    dice1.setAttribute("src", aleatoryDice1); //to change src for img

    var number2 = Math.floor(Math.random()*6)+1;
    var aleatoryDice2 = "images/dice" + number2 + ".png";
    var dice2 = document.querySelector(".img2");
    dice2.setAttribute("src", aleatoryDice2);

    if (number1 > number2){
        document.querySelector(".result").innerHTML = "🚩Player 1 is the WINNER!";
    }
    else if (number1 < number2){
        document.querySelector(".result").innerHTML = "Player 2 is the WINNER!🚩";
    } else {
        document.querySelector(".result").innerHTML = "🚩DRAW!🚩";
    }
})