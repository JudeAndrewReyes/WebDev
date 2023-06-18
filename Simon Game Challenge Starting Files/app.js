const btnColors = ['green', 'red', 'yellow', 'blue'];

const userPattern = [];
const gamePattern = [];

let level = 0;
let started = false;

// this function listens for a keypress to start.
$(document).keypress(function () {

    if (!started) {
        nextSequence();
        $("#level-title").text("level " + level);
        started = true;
    }

})

$(document).click(function () {

    let userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);

    playSound(userChosenColor);
    $("#" + userChosenColor).addClass("pressed");

    setTimeout(() => {
        $("#" + userChosenColor).removeClass("pressed");
    }, 500);

})

function nextSequence() {

    level++;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = btnColors[randomNumber];

    gamePattern.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomColor);

}

function playSound(btnColor) {

    let audio = new Audio("/Simon Game Challenge Starting Files/sounds/" + btnColor + ".mp3")
    audio.play();

}