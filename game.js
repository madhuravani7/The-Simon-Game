buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];

function nextSequence()
{
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio ("sounds/" + randomChosenColor + ".mp3");
    audio.play();
    $(".btn").click(function(){
       var userChosenColor = $(this).attr("id");
       console.log("user clicked color " + userChosenColor)
       userClickedPattern.push(userChosenColor);
    });
    
};

nextSequence();

