if(window.performance.navigation.type===1){
    rollDice();
}
function rollDice(){

var RandomNumber1 = Math.floor(Math.random() * 6) +1;
var RandomDiceImage ="images/" + "dice" + RandomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", RandomDiceImage);

var RandomNumber2 = Math.floor(Math.random()* 6) + 1;
var RandomDiceImage2 = "images/dice" + RandomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", RandomDiceImage2);
changetitle(RandomNumber1, RandomNumber2)
};
function changetitle(RandomNumber1, RandomNumber2){
if(RandomNumber1>RandomNumber2){
   document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(RandomNumber1<RandomNumber2){
   document.querySelector("h1").innerHTML="Player 2 Wins!"
 }
else{
   document.querySelector("h1").innerHTML="Draw!"
}
}
