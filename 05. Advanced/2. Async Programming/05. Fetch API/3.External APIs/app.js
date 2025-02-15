async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.statusText}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { data: [] };
  }
}

async function renderPost(id) {
  const post = await fetchData(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  postHTML.innerHTML = `
    <div class="post">
      <h2>${post.title}</h2>
      <h3>${post.id}</h3>
      <p>${post.body}</p>
    </div>
  `;
}

const btn = document.querySelector("button");
const postHTML = document.querySelector(".post");
const idField = document.querySelector("input");
btn.addEventListener("click", () => {
  renderPost(idField.value);
  // fetchData("https://jsonplaceholder.typicode.com/posts")
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));
});
