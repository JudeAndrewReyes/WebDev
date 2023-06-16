let drumCount = document.querySelectorAll('.drum');

for (let i=0; i<drumCount.length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {

        let drumBtn = this.innerHTML;

        playAudio(drumBtn);
        buttonAnimation(drumBtn);

    })

}

document.addEventListener("keypress", function(e) {

    let btnKey = e.key;
    playAudio(btnKey);
    buttonAnimation(btnKey);

})

function playAudio(key) {

    let path = "";

    switch (key) {
        case "w":
            path = "/Drum Kit Starting Files/sounds/tom-1.mp3";
            break;
        case "a":
            path = "/Drum Kit Starting Files/sounds/tom-2.mp3";
            break;
        case "s":
            path = "/Drum Kit Starting Files/sounds/tom-3.mp3";
            break;
        case "d":
            path = "/Drum Kit Starting Files/sounds/tom-4.mp3";
            break;
        case "j":
            path = "/Drum Kit Starting Files/sounds/crash.mp3";
            break;
        case "k":
            path = "/Drum Kit Starting Files/sounds/kick-bass.mp3";
            break;
        case "l":
            path = "/Drum Kit Starting Files/sounds/snare.mp3";
            break;
        default:
            console.log(drumBtn);

    }

    let audio = new Audio(path);
    audio.play();

}

function buttonAnimation(key) {

    let activeBtn = document.querySelector('.' + key);
    activeBtn.classList.add('pressed');

    setTimeout(() => {
        activeBtn.classList.remove('pressed');
    }, 100);
}