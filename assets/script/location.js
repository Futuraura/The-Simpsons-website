fetch('assets/data/locations.json')
    .then(response => response.json())
    .then(locations => {
        const contentDiv = document.getElementById("content");
        const place = new URL(window.location.href).searchParams.get("place");
        const location = locations.find(loc => loc.url === place);

        if (!place) {
            contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested location does not exist.</p>";
            console.log("No place specified, returning 404");
        } else if (location) {
            populateContent(location);
            console.log(`Opening location: ${location.name}`);
        } else {
            contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested location does not exist.</p>";
            console.log("Location not found, returning 404");
        }

        function populateContent(location) {
            document.getElementById("location-title").textContent = location.name;
            location.images.forEach(image => {
                document.getElementById("location-images").innerHTML += `<img src="${image}" alt="${location.name}" onClick="openImage('${image}')" class="location-image">`;
            });
        }
    });

function openImage(src) {
    const locationImages = document.getElementById("location-images");
    const img = document.createElement("img");
    const backButton = document.getElementById("backButton");

    locationImages.innerHTML = "";
    locationImages.classList = "opened-image";

    backButton.style.display = "block";
    backButton.onclick = function () {
        locationImages.classList.remove("opened-image");
        locationImages.classList.add("location-images");
        locationImages.innerHTML = "";
        backButton.style.display = "none";
        handleLocation();
    };

    img.src = src;
    locationImages.appendChild(img);
}

function handleLocation() {
    fetch('assets/data/locations.json')
        .then(response => response.json())
        .then(locations => {
            const contentDiv = document.getElementById("content");
            const place = new URL(window.location.href).searchParams.get("place");
            const location = locations.find(loc => loc.url === place);

            if (!place) {
                contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested location does not exist.</p>";
                console.log("No place specified, returning 404");
            } else if (location) {
                populateContent(location);
                console.log(`Opening location: ${location.name}`);
            } else {
                contentDiv.innerHTML = "<h1 class=\"error404\">404 Not Found</h1><p class=\"error404-description\">The requested location does not exist.</p>";
                console.log("Location not found, returning 404");
            }

            function populateContent(location) {
                document.getElementById("location-title").textContent = location.name;
                location.images.forEach(image => {
                    document.getElementById("location-images").innerHTML += `<img src="${image}" alt="${location.name}" onClick="openImage('${image}')" class="location-image">`;
                });
            }
        });
}
