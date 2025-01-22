const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let color = btn.value;
    changeBackground(color);
  });
});

const changeBackground = (color) => {
  body.className = "";

  switch (color) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
};
