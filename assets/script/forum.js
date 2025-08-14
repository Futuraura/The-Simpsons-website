const forumPostButton = document.getElementById("newForumPost");
const cancelButton = document.getElementById("cancelButton");
const forumModal = document.getElementById("newPostDialog");

forumPostButton.addEventListener("click", () => {
  forumModal.showModal();
});

cancelButton.addEventListener("click", () => {
  forumModal.close();
});
