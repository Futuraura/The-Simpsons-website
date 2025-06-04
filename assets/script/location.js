const contentDiv = document.getElementById("content");

const locations = [
    {
        id: 1,
        name: "Moe's Tavern",
        images: [
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp"
        ]
    },
    {
        id: 2,
        name: "Simpson's Home",
        images: [
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp"
        ]
    },
    {
        id: 3,
        name: "Kwik-E-Mart",
        images: [
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp",
            "https://placehold.co/1240x740/FFF/000/webp"
        ]
    }
];

function populateContent(id) {
    const location = locations.find(loc => loc.id === id);
    document.getElementById("location-title").textContent = location.name;
    location.images.forEach(image => {
        document.getElementById("location-images").innerHTML += `<img src="${image}" alt="${location.name}">`;
    });
}

switch (new URL(window.location.href).searchParams.get("place")) {
    case "moes":
        console.log("Opening Moe's");
        populateContent(1);
        break;
    case "742evergreen":
        console.log("Opening Simpson's home");
        populateContent(2);
        break;
    case "kwik-e-mart":
        console.log("Entering Kwik E' Mart");
        populateContent(3);
        break;
    default:
        contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested location does not exist.</p>";
        console.log("Not found, returning 404");
}
