const forumPostButton = document.getElementById("newForumPost");

forumPostButton.addEventListener("click", () => {});

fetch("assets/data/forum.json")
  .then((response) => response.json())
  .then((characters) => {
    const charactersList = document.getElementById("characters-list");
    charactersList.innerHTML = "";

    characters.forEach((character) => {
      const characterElement = document.createElement("a");
      characterElement.classList.add("character");
      characterElement.innerHTML = `
                <a href="character.html?character=${character.url}" class="character-link">
                    <div class="character-overlay">
                        <img src="${character.preview}" alt="${character.name}" class="character-image">
                        <span class="character-name">${character.name}</span>
                    </div>
                </a>
            `;
      charactersList.appendChild(characterElement);
    });
  })
  .catch((error) => console.error("Error loading characters:", error));
