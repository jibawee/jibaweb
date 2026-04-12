document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
});

function loadPosts() {
  const apiPath = "./api.php";

  fetch("api.php?action=getPosts")
    .then(res => res.text())  // first get raw text
    .then(text => {
      console.log("Raw API output:", text);  // debug output
      if (!text) throw new Error("Empty response from API");
      return JSON.parse(text); // convert to JSON
    })
    .then(posts => {
      const container = document.getElementById("posts");
      container.innerHTML = "";

      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

      postDiv.innerHTML = `
      <h2>${post.title}</h2>
      ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-img">` : ''}
      <p>${post.content}</p>
      <button class="like-btn" data-id="${post.id}">
        Like (${post.likes})
      </button>
    `;


        container.appendChild(postDiv);
      });

      // Add click event to Like buttons
      document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.dataset.id;
          fetch(`${apiPath}?action=likePost`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "id=" + id
          }).then(() => loadPosts());
        });
      });
    })
    .catch(err => console.error("Failed to load posts:", err));
}

