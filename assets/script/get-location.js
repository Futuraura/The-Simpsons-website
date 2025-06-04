const contentDiv = document.getElementById("content");

const locations = [
    {
        name: "Moe's Tavern",
        images: [
            "assets/images/moes-tavern.jpg",
            "assets/images/moes-tavern-2.jpg"
        ]
    },
    {
        name: "Simpson's Home",
        images: [
            "assets/images/simpsons-home.jpg",
            "assets/images/simpsons-home-2.jpg"
        ]
    },
    {
        name: "Kwik-E-Mart",
        images: [
            "assets/images/kwik-e-mart.jpg",
            "assets/images/kwik-e-mart-2.jpg"
        ]
    }
]

switch (new URL(window.location.href).searchParams.get("place")) {
    case "moes":
        console.log("Opening Moe's");
        break;
    case "742evergreen":
        console.log("Opening Simpson's home");
        break;
    case "kwik-e-mart":
        console.log("Entering Kwik E' Mart");
        break;
    default:
        contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested location does not exist.</p>";
        console.log("Not found, returning 404");
}
