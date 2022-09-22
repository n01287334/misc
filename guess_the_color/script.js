var heading = document.getElementById('colourValue');
// heading.innerHTML ="suka";
var buttons = document.getElementsByClassName('colourButton');


var answerMessage = document.getElementById('answer');


startGame();

document.getElementById('resetButton').addEventListener('click', startGame);

function startGame() {
  document.body.style.backgroundColor=null;
  answerMessage.innerHTML = "";
  var answerButton = Math.round(Math.random() * (buttons.length - 1));

  for (var i = 0; i < buttons.length; i++) {

    var red = makeColourValue();
    var green = makeColourValue();
    var blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
      var winnerRed = red;
      var winnerGreen = green;
      var winnerBlue = blue;   
    }
   
    buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
            document.body.style.backgroundColor = "rgb("+ winnerRed +","+ winnerGreen +","+ winnerBlue + ")";//(winnerRed,winnerGreen,winnerBlue);
            // document.getElementsByTagName('body').setAttribute('style',
            //             'background-color: rgb('+ red +','+ green +','+ blue +');'
            //           );
        } else {
            document.body.style.backgroundColor=null;
            answerMessage.innerHTML = "Wrong answer! Guess again!";
        }
    });

  }

}

function setButtonColour(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

function makeColourValue(){
    return Math.round(Math.random()*255);
}

