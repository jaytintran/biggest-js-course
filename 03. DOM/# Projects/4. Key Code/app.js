const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class="key">
            ${e.key === " " ? "Space" : e.key}
            <p class="small">Key Code: ${e.keyCode}</p>
            <p class="small-down">Code: ${e.code}</p>
        </div>
    `;
});
