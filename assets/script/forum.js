const forumPostButton = document.getElementById("newForumPost");
const cancelButton = document.getElementById("cancelButton");
const forumModal = document.getElementById("newPostDialog");

forumPostButton.addEventListener("click", () => {
  forumModal.showModal();
});

cancelButton.addEventListener("click", () => {
  forumModal.close();
});

fetch("assets/data/forum.json")
  .then((response) => response.json())
  .then((forumPosts) => {
    const forumPostsDiv = document.getElementById("forumPosts");
    forumPostsDiv.innerHTML = "";

    forumPosts.forEach((forumPost) => {
      const forumPostElement = document.createElement("div");
      forumPostElement.classList.add("forumPost");
      forumPostElement.innerHTML = `
          <p class="postInfo">${forumPost.username} | ${forumPost.timePosted.hour}:${forumPost.timePosted.minute} ${forumPost.timePosted.day}/${forumPost.timePosted.month}/${forumPost.timePosted.year}</p>
          <p class="forumPostTitle">
            ${forumPost.title}
          </p>
          <p class="forumPostContent">
            ${forumPost.content}
          </p>
            `;
      forumPostsDiv.appendChild(forumPostElement);
    });
  })
  .catch((error) => console.error("Error loading characters:", error));
