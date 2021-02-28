const buttons = document.querySelectorAll(".key");

window.addEventListener("keyup", action);

buttons.forEach((button) => {
  button.addEventListener("transitionend", removeTransition);
});

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function action(event) {
  const button = document.querySelector(`.key[data-key=${event.code}]`);
  const audio = document.querySelector(`audio[data-key=${event.code}]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  button.classList.add("playing");
}
