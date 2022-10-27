var Statusblender = "off";
var BlenderSounds = document.getElementById("blender-sound");
var BlenderButton = document.getElementById("blender-button-sound");
var blender = document.getElementById("blender");

function BlenderController() {
    if (Statusblender == "off") {
        Statusblender = "On";
        blender.classList.add("active");
        sounds();
        // console.log("Encendido");
    } else {
        Statusblender = "off";
        blender.classList.remove("active")
        sounds();
        // console.log("apagado")
    }
}

function sounds() {
    if(BlenderSounds.paused){
        BlenderButton.play();
        BlenderSounds.play();
    }else{
        BlenderButton.play();
        BlenderSounds.pause();
        BlenderSounds.currenTime = 0;
    }
}