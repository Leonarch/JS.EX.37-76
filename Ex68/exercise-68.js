function postamuni(event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const completed = document.getElementById("post-completed").checked;
    const post = { title, completed };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(post),
    });
  }

  document.querySelector("form").addEventListener("submit", submitFormPost);