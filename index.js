var audio4 = new Audio("sounds/tom-1.mp3");
var audio1 = new Audio("sounds/crash.mp3");
var audio2 = new Audio("sounds/kick-bass.mp3");
var audio3 = new Audio("sounds/tom-2.mp3");
var audio5 = new Audio("sounds/tom-3.mp3");
var audio6 = new Audio("sounds/tom-4.mp3");
var audio7 = new Audio("sounds/snare.mp3")


for( var i =0;i<document.querySelectorAll(".drum").length;i++ ){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  
    switch (this.innerHTML) {
      case "w":
        audio1.play();
        break;
      case "a":
        audio2.play();
        break;
      case "s":
        audio3.play();
        break;
      case "d":
        audio4.play();
        break;
      case "j":
        audio5.play();
        break;
      case "l":
        audio6.play();
        break;
      case "k":
        audio7.play();
        break;
      default:
        break;
    }
  });

}
