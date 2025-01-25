const sidebar = document.querySelector(".sidebar");
const center = document.querySelector(".center");
const button = document.querySelector(".center__button");

button.addEventListener("click", () => {
  sidebar.classList.toggle("hide");
});
