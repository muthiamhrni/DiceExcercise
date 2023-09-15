var randomNumber1 = Math.floor(Math.random () * 6)+1;
var randomNumber2 = Math.floor(Math.random () * 6)+1;
var randomImage = "images/" + "dice" + randomNumber1 + ".png";
var randomImage2 = "images/" + "dice" + randomNumber2 + ".png";

var leftImage = document.querySelectorAll('img')[0];
leftImage.setAttribute ('src', randomImage);

var rightImage = document.querySelectorAll('img')[1];
rightImage.setAttribute ('src',randomImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Left Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Right Wins!";
} else {
    document.querySelector('h1').innerHTML = "Draw";
}
