const btnColors = ['green', 'red', 'yellow', 'blue'];

const userPattern = [];
const gamePattern = [];

let level = 0;
let started = false;

// this function listens for a keypress to start.
$(document).keypress(function () {

    if (!started) {
        setTimeout(() => {
            nextSequence();
            $("#level-title").text("level " + level);
        }, 1000);
        // nextSequence();
        
        started = true;
    }

})

$(".btn").click(function () {

    let userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);

    playSound(userChosenColor);
    $("#" + userChosenColor).addClass("pressed");

    setTimeout(() => {
        $("#" + userChosenColor).removeClass("pressed");
    }, 100);

    checkAnswer(userPattern.length - 1);

    console.log("user ", userPattern);
    console.log("game", gamePattern);

})

function checkAnswer(currentLevel) {
    if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userPattern.length < gamePattern.length) {
            return;
        } else if (userPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
                $("#level-title").text("level " + level);
            }, 500);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over, press any key to start again.")

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern.length = 0;
}

function nextSequence() {

    userPattern.length = 0;
    level++;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = btnColors[randomNumber];

    gamePattern.push(randomColor);
    gamePattern.forEach((c, i) => {
        setTimeout(() => {
            $("#" + c).fadeIn(100).fadeOut(100).fadeIn(100);
        }, (i + 1) * 200);
        
    })
    

    playSound(randomColor);

}

function playSound(btnColor) {

    let audio = new Audio("/Simon Game Challenge Starting Files/sounds/" + btnColor + ".mp3")
    audio.play();

}