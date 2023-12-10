function playgetnine(){
/*playgetnine() is a function used to simulate a get nine game.
use for the week 3 assignment*/
console.log("playgetnine() started");
//this rolls all dices 
var die1 = Rolldicevalue();
console.log(die1);
document.getElementById("die1res").innerHTML = die1;
var die2 = Rolldicevalue();
console.log(die2);
document.getElementById("die2res").innerHTML = die2;
var die3 = Rolldicevalue();
console.log(die3);
document.getElementById("die3res").innerHTML = die3;
//find the sum of the dices 
var sum = die1 + die2 + die3;
console.log(sum);
document.getElementById("sumres").innerHTML = sum;
//if sum = another than 9, they lose
if(sum !=9){
    win();
}
//if the sum is nine they win 
else if(9){
    lose();
}

}
   
//this function gets all three dice value and a sprate function to work
function Rolldicevalue(){
return 1 + Math.floor(6 * Math.random());
}
//making code easier to read
function win(){
    document.getElementById("finres").innerHTML = "you lose! please try again or you can go somewhere else";
}
//making code easier to read
function lose(){
    document.getElementById("finres").innerHTML = "you win! Want to keep going";
}

//function SumUpAllDices(){
    //die1 + die2 + die3;
//}

var click = false;
//This will listen for an event  
window.addEventListener("click", (event) => {
    if(!click){
        // our audio source and use an array to keep our songs 
        let audioSources = ["the-best-jazz-club-in-new-orleans-164472.mp3", "upbeat-happy-jazz-162873.mp3", "upbeat-travel-funky-cooking-casino-funk-groove-155126.mp3"];
        // get the refernce 
        let audioElement = document.getElementById("CasinoAudio");
        //gets the length of the array and chooses random for each click it does 
        audioElement.src  = audioSources[Math.floor(Math.random() * audioSources.length)];
        //plays the event one time per refresh
        audioElement.play();
        //song goes on loop
        audioElement.loop = true;
        click = true;
    }
});



