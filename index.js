
//Detecting button click
//adding an event listener to every button 
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonInner = this.innerHTML;
        playInstrument(buttonInner);
        buttonAnimation(buttonInner);
        
    });
}

//Detecting keyboard press
//adding an event listener to the html document to check if a key was pressed
document.addEventListener("keydown", function(event){
    var keyDwn = event.key;
    playInstrument(keyDwn);
    buttonAnimation(keyDwn);
})

//playing a sound depending on what was pressed or clicked
function playInstrument(currentKey){
    switch (currentKey) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(currentKey);
            
            break;
    }
}

//Adding animation to button
function buttonAnimation(currentKey){
    var theKey = document.querySelector("." + currentKey);
    theKey.classList.add("pressed");

    setTimeout(function(){
        theKey.classList.remove("pressed");
    }, 100);
}