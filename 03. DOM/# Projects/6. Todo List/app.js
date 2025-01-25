let form = document.querySelector("form");
let inputField = document.querySelector("input");
let todosContainer = document.querySelector(".todos");

function createTodo(value) {
  // Create a new element
  let todo = document.createElement("div");
  let textEl = document.createElement("p");

  // Setting value and style
  textEl.textContent = inputField.value;

  // Append the text to the todo
  todo.appendChild(textEl);
  todo.classList.add("todo");

  // Delete button for the todo
  let deleteEl = document.createElement("span");
  deleteEl.innerHTML = "&times;";
  deleteEl.classList.add("delete");
  todo.appendChild(deleteEl);

  // Attach event listener to delete button
  deleteEl.addEventListener("click", (e) => {
    todosContainer.removeChild(todo);
  });

  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = inputField.value;

  // If the value is empty return
  if (!value.trim()) return;
  // Call the create todo and append it to the container
  todosContainer.appendChild(createTodo(value));
});
