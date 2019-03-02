//Computer picks random word to guess
function chooseWord() {
    // generate a word at random and store it in a variable
    var words = ['feline', 'canine', 'aves', 'amphibian', 'dinosaur'];
    document.getElementById("wordGuess").innerHTML = words[Math.floor(Math.random() * words.length)];
  
    // display the length of the word to the user
    var selection = "F E L I N E";
    var blankSpaces = "";
    var wordLength = selection.length;
  
    // correct_guesses is less than the length of the word
    // prompt the user to guess a letter
    for (i = 0; i < wordLength; i++) {
      var x = selection.charAt(i);
  
      if (x === " " || x === "/'") {
        blankSpaces += x;
      } else {
        blankSpaces += "_";
      }
    }
    document.getElementById("blankSpaces").innerHTML = blankSpaces;
  }
  
  // if the guess is correct increment correct_guesses by 1
  // if the guess is incorrect increment incorrect_guesses by 1
  var guessesLeft = 9;
  
  document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event,
      charCode = keyPressed.keyCode || keyPressed.which,
      lettersGuessed = String.fromCharCode(charCode);

  // they lost and exit the program
  // if correct_guesses is equal to the length of the word, tell the user they won
    var userGuess = prompt("What word do you guess?");
    var userGuess = words.split('');
    var userGuess
    if (words.indexOf(userGuess) > -1) {
    	alert("Your guess is correct.")
    }else {
    	alert("Your guess is wrong.")
    }
  
    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
  
    guessesLeft--;
  
    if (guessesLeft === -1) {
      alert("You Loose!");
    }
  }






  



