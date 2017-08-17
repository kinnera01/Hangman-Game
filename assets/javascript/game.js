var arr = ["lion", "tiger", "cat", "elephant", "dog", "gorilla", "snowleopard", "rhinoceros", "camel", "giantpanda", "largibbon"];
var randomword;
var win = 0;
var losses = 0;
var letters = [];
var guessesLeft;
var userword;
var dash = "_";
function newGame() {
  userword = "";
  guessesLeft = 5;
  letters = [];
  start=true;
  randomword = arr[Math.floor(Math.random() * arr.length)];
  console.log(randomword);
  var l = randomword.length; //counting length of word choosen by computer.
  userword = dash.repeat(l);
  console.log(userword);
}

function getindex(word, character) //to get position of character in a word
{
  var indices = []; //taking empty straing to store positions.
  for (i = 0; i < word.length; i++) //if 
  {
    if (word[i] == character) indices.push(i); //to push input to word if both characters are same.
  }
  return indices;
}
document.onkeyup = function(event) {
  var userinput = event.key;
  if(start==true){
    start=false;
    // return;
  }
  else{
  console.log(userinput);
  var inputlower = (userinput.toLowerCase());
  if(inputlower>64 && inputlower<91){
  if (letters.indexOf(inputlower) == -1) {
    letters.push(inputlower); //pushungletter
    var index = getindex(randomword, inputlower);
    console.log(index);
    if (index.length != 0) {
      for (i = 0; i < index.length; i++) {
        var splitword = userword.split(""); //splitword is to create an array for the string
        splitword[index[i]] = inputlower;
        // console.log(splitword);
        userword = splitword.join("");
        console.log(userword);
      }
    } else {
      guessesLeft--;
      // console.log(guessesLeft);
      if (guessesLeft == 5) {
        document.getElementById("imageid").src = "https://static-s.aa-cdn.net/img/ios/289265443/8fbc582695a59bf087b7c53c8349a2af?v=1";
      }
      if (guessesLeft == 4) {
        document.getElementById("imageid").src = "assets/images/1.jpg";
      }
      if (guessesLeft == 3) {
        document.getElementById("imageid").src = "assets/images/2.jpg";
      }
      if (guessesLeft == 2) {
        document.getElementById("imageid").src = "assets/images/3.jpg";
      }
      if (guessesLeft == 1) {
        document.getElementById("imageid").src = "assets/images/4.jpg";
      }
      if (guessesLeft == 0) {
        document.getElementById("imageid").src = "assets/images/5.jpg";
      }
    }
    if (guessesLeft == 0) {

      alert("gameover");
      losses++;
      // if(losses >= 1) {
      //   <embed loop="true" src="assets/images/1.mp3" hidden="true" type="video/quicktime"></embed>
      // }
      newGame();
      // var gameOver = "you lost!!"
      // document.querySelector("#endgame").innerHTML = gameOver;
      // document.getElementById("button").setAttribute("style", "display:block;"); 
    }
    if (userword === randomword) {
      win++;
      alert("you Won!!");
      // var gameOver = "you won!!"
      // document.querySelector("#endgame").innerHTML = gameOver;
      newGame();
      // document.getElementById("button").setAttribute("style", "display:block;"); 

    }
  } else {
    alert("you already guessed letter!!");
  }
  //  else if {
  //   alert("enter valid letters!");
  // }
  }
  var score =
    "<p>Guess the Animal: " + userword.split("").join(" ") + "</p>" +
    "<p>Win: " + win + "</p>" +
    "<p>loss: " + losses + "</p>" +
    "<p>guess: " + guessesLeft + "</p>" +
    "<p>Guesses so far : " + letters + "</p>";
  document.querySelector("#game").innerHTML = score;
};
newGame();
// document.getElementById("button").onclick = newGame();