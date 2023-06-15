let drumCount = document.querySelectorAll('.drum');

for (let i=0; i<drumCount.length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("keypress", function(e) {
        let path = "";
        switch (e.key) {
            case "w":
                sound = "/Drum Kit Starting Files/sounds/tom-1.mp3";
                break;
            case "a":
                sound = "/Drum Kit Starting Files/sounds/tom-2.mp3";
                break;
            case "s":
                sound = "/Drum Kit Starting Files/sounds/tom-3.mp3";
                break;
            case "d":
                sound = "/Drum Kit Starting Files/sounds/tom-4.mp3";
                break;
            case "j":
                sound = "/Drum Kit Starting Files/sounds/crash.mp3";
                break;
            case "k":
                sound = "/Drum Kit Starting Files/sounds/kick-bass.mp3";
                break;
            case "l":
                sound = "/Drum Kit Starting Files/sounds/snare.mp3";
                break;
        }
        let audio = new Audio(sound);
        audio.play();
    });

}

