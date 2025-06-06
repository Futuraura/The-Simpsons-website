const contentElement = document.getElementById('content');
const characterPreviewElement = document.getElementById('character-preview');
const characterNameElement = document.getElementById('character-name');
const characterDescriptionElement = document.getElementById('character-description');
const voiceActorImageElement = document.getElementById('voice-actor-image');
const voiceActorNameElement = document.getElementById('voice-actor-name');
const voiceClipsListElement = document.getElementById('voice-clips-list');

function renderNotFound() {
    contentElement.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested character does not exist.</p>";
}

function getAudioType(source) {
    const audioType = source.split('.').pop();
    switch (audioType) {
        case 'mp3':
            return 'audio/mpeg';
        case 'ogg':
            return 'audio/ogg';
        case 'wav':
            return 'audio/wav';
        default:
            return 'audio/mpeg';
    }
}

function populateCharacterContent() {
    fetch('assets/data/characters.json')
    .then(response => response.json())
    .then(characters => {
        const characterName = new URL(window.location.href).searchParams.get("character");
        const character = characters.find(char => char.url === characterName);

        if (!characterName || !character) {
            renderNotFound();
            return;
        }

        characterPreviewElement.src = character.preview;
        characterName.textContent = character.name;
        characterDescriptionElement.textContent = character.description;
        voiceActorImageElement.src = character.voiceActor.photo;
        voiceActorNameElement.textContent = character.voiceActor.name;
        voiceClipsListElement.innerHTML = '';
        character.voiceClips.forEach(clip => {
            const clipElement = document.createElement('div');
            clipElement.className = 'voice-clip-wrapper';
            clipElement.innerHTML = `
                <span class="voice-clip-title">${clip.title}</span>
                <audio controls class="voice-clip">
                    <source src="${clip.source}" type="${getAudioType(clip.source)}">
                </audio>
            `;
            voiceClipsListElement.appendChild(clipElement);
        });
        
        const memeDiv = document.getElementById('memes');
        memeDiv.innerHTML = '';
        character.memes.forEach(meme => {
            const memeContainer = document.createElement('div');
            memeContainer.className = 'meme-container';
            
            const memeElement = document.createElement('img');
            memeElement.className = 'meme';
            memeElement.src = meme;
            
            memeContainer.onclick = function() {
            openImage(meme);
            };
            
            memeContainer.appendChild(memeElement);
            memeDiv.appendChild(memeContainer);
        });
    })
}

function switchToMemes() {
    const memesDiv = document.getElementById('memes-wrapper');
    const content = document.getElementById('content');
    memesDiv.style.display = 'flex';
    content.style.display = 'none';
}

function switchToContent() {
    const memesDiv = document.getElementById('memes-wrapper');
    const content = document.getElementById('content');
    memesDiv.style.display = 'none';
    content.style.display = 'grid';
}

function openImage(src) {
    const img = document.createElement("img");
    const backButton = document.getElementById("backButton");

    const memesDiv = document.getElementById('memes-wrapper');
    memesDiv.innerHTML = "";
    memesDiv.classList.add("opened-image");

    backButton.style.display = "block";
    backButton.onclick = function () {
        memesDiv.classList.remove("opened-image");
        memesDiv.classList.add("memes-wrapper");
        memesDiv.innerHTML = "";
        backButton.style.display = "none";
        switchToContent();
    };

    img.src = src;
    memesDiv.appendChild(img);
}

populateCharacterContent();
