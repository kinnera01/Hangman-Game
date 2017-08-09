var arr = ["lion", "tiger", "cat", "elephant", "dog", "gorilla", "snowleopard", "rhinoceros", "camel", "giantpanda", "largibbon"];
var randomword;
var win = 0;
var losses = 0;
var letters;
var guessesLeft;
var userword;
var dash = "_";
function getindex(word, character) { //to get position of character in a word
      var indices = []; //taking empty straing to store positions.
      for (i = 0; i < word.length; i++) //if 
      {
        if (word[i] === character) indices.push(i); //tp push input to word if both characters are same.
      }
      return indices;
    }
function newGame() {
      guessesLeft = 5;
      letters = [];
      randomword = arr[Math.floor(Math.random() * arr.length)];
      console.log(randomword);
      var l = randomword.length; //counting length of word choosen by computer.
    	 userword = dash.repeat(l);
    	console.log(userword);
    }
    document.onkeyup = function(event) 
    {
      var userinput = event.key;
      console.log(userinput);
      var inputlower = (userinput.toLowerCase());
      if (letters.indexOf(inputlower) == -1)
       {
        letters.push(inputlower); //pushungletter
        var index = getindex(randomword, inputlower);
        console.log(index);
        if (index.length != 0) {
          for (i = 0; i < index.length; i++)
          {
          	var splitword = userword.split(""); //splitword is to create an array for the string
            splitword[index[i]] = inputlower;
            // console.log(splitword);
            userword = splitword.join("");
            console.log(userword);
          }
        } 
        else {
          guessesLeft--;
          console.log(guessesLeft);
        }
        if (guessesLeft == 0) {
          // alert("gameover")
          losses++;
          var gameOver = "you lost!!"
          document.querySelector("#endgame").innerHTML = gameOver;
          newGame();
        }
        if (userword === randomword) {
          win++;
          // alert("you Won!!");
          var gameOver = "you won!!"
      	  document.querySelector("#endgame").innerHTML = gameOver;
      	  newGame();
        }
      } else {
        alert("you already guessed letter!!");
      }
      var html =
        "<p>Guess what word i am thinking : " + userword.split("").join(" ") + "</p>" +
        "<p>Win: " + win + "</p>" +
        "<p>loss: " + losses + "</p>" +
        "<p>guess: " + guessesLeft + "</p>" +
        "<p>Guesses so far : " + letters + "</p>";
      document.querySelector("#game").innerHTML = html;
};
newGame();
document.getElementById("button").onclick =newGame();