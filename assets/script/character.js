function renderNotFound() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested character does not exist.</p>";
}

function renderCharacters() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
    <img id="character-preview" src="https://placehold.co/600x900/FFF/000/webp" alt="Image of Example Person">
    <div>
        <h2 id="character-details-title" class="title">Character Details</h2>
        <h3 id="character-name"></h3>
        <p id="character-description" class="content-text"></p>
        <div id="voice-actor-section" class="voice-actor">
            <h2 id="voice-actor-title">Voice Actor</h2>
            <div id="voice-actor-details" class="voice-actor-details">
                <img id="voice-actor-image" src="" alt="Jane Doe">
                <h3 id="voice-actor-name"></h3>
            </div>
            <div id="voice-clips-section" class="voice-clips">
                <h4 id="voice-clips-title">Voice Clips</h4>
                <div id="voice-clips-list" class="voice-clips-list">
                </div>
            </div>
        </div>
    </div>`

    let ids = {
        characterPreview: document.getElementById('character-preview'),
        characterName: document.getElementById('character-name'),
        characterDescription: document.getElementById('character-description'),
        voiceActorSection: document.getElementById('voice-actor-section'),
        voiceActorImage: document.getElementById('voice-actor-image'),
        voiceActorName: document.getElementById('voice-actor-name'),
        voiceClipsList: document.getElementById('voice-clips-list')
    };

    fetch('assets/data/characters.json')
    .then(response => response.json())
    .then(characters => {
        const contentDiv = document.getElementById("content");
        const characterUrl = new URL(window.location.href).searchParams.get("character");
        const character = characters.find(char => char.url === characterUrl);

        if (character) {
            populateCharacterContent(character);
        } else if (!characterUrl) {
            renderNotFound();
        } else if (!character) {
            renderNotFound();
        }
        
        function populateCharacterContent(character) {
            ids.characterPreview.src = character.preview;
            ids.characterName.textContent = character.name;
            ids.characterDescription.textContent = character.description;

            ids.voiceActorSection.style.display = 'block';
            ids.voiceActorImage.src = character.voiceactorimage;
            ids.voiceActorName.textContent = character.voiceactor;

            ids.voiceClipsList.innerHTML = '';
            character.audioclips.forEach(clip => {
                const audioItem = document.createElement('audio');
                audioItem.src = clip
                ids.voiceClipsList.appendChild(audioItem);
            });
        }
    })
}

function renderMemes() {
    fetch('assets/data/characters.json')
    .then(response => response.json())
    .then(characters => {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = ""; // Clear out the contentDiv
        const characterUrl = new URL(window.location.href).searchParams.get("character");
        const character = characters.find(char => char.url === characterUrl);

        if (character && character.memes && character.memes.length > 0) {
            character.memes.forEach(meme => {
                const memeImg = document.createElement("img");
                memeImg.src = meme;
                memeImg.alt = "Meme";
                memeImg.classList.add("meme-thumbnail");
                memeImg.onclick = () => openMeme(meme);
                contentDiv.appendChild(memeImg);
            });
        } else {
            renderNotFound()
        }
    });
}

renderCharacters();
