buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

var gameStarted = false;
var level = 0;
 

$(document).keydown(function (){
    if(!gameStarted){
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});


$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1); //call this fuunction after every click
  });

function checkAnswer(currentLevel){
    console.log("Game Pattern: ", gamePattern);
    console.log("User Pattern: ", userClickedPattern);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
              nextSequence();     
            }, 1000);
        } 

    } else {
        console.log("Wrong!");
        var gameover = new Audio ("sounds/wrong.mp3");
        gameover.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function nextSequence(){

    userClickedPattern = [];

    level++; 
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log("Game Pattern Updated: ", gamePattern);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);  

};


function playSound(name){
   var audio = new Audio ("sounds/" + name + ".mp3");
   audio.play();
}

function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");

    setTimeout(function(){
    $("#"+ currentColor).removeClass("pressed");
    } , 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = false;
}