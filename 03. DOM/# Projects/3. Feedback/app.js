const sendBtn = document.getElementById("send");
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".rating-options");
const panel = document.getElementsByClassName("rating-card")[0];

let selectedRating = "";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeAllActives();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerText;
  }
});

function removeAllActives() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}

sendBtn.addEventListener("click", () => {
  console.log(selectedRating);
  panel.innerHTML = `<p class="heart">💖</p><strong>Thank You!</strong><br><strong>Feedback: ${selectedRating}</strong>`;
});
