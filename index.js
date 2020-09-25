let drums = document.querySelectorAll(".drum");
let size = drums.length;

const makeSound = (key) => {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
  }
};

const buttonAnimation = (key) => {
  var btnPressed = document.querySelector("." + key);
  btnPressed.classList.add("pressed");
  btnPressed.classList.add("whiteFontColor");
  setTimeout(() => {
    btnPressed.classList.remove("pressed");
    btnPressed.classList.remove("whiteFontColor");
  }, 100);
};

for (let i = 0; i < size; i++) {
  let letter = drums[i].innerHTML;
  drums[i].addEventListener("click", () => {
    makeSound(letter);
    buttonAnimation(letter);
  });
}

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});
