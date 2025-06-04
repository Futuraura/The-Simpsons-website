const locations = [
    {
        name: "Kwik-E-Mart",
        image: "assets/images/places/kwik-e-mart.webp",
        place: "kwik-e-mart",
    },
    {
        name: "Moe's Tavern",
        image: "assets/images/places/moes-tavern.webp",
        place: "moe-s",
    },
    {
        name: "The Simpsons' House",
        image: "assets/images/places/742-evergreen-terrace.webp",
        place: "742evergreen",
    }
]

const locationsList = document.getElementById("springfield-places");

locationsList.innerHTML = "";

locations.forEach(location => {
    const locationElement = document.createElement("a");
    locationElement.classList.add("location");
    locationElement.innerHTML = `
                <a href="location.html?place=${location.place}">
                    <img src="${location.image}" alt="${location.name}">
                </a>
    `;
    locationsList.appendChild(locationElement);
});
