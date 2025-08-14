fetch("assets/data/locations.json")
  .then((response) => response.json())
  .then((locations) => {
    const locationsList = document.getElementById("springfield-places");
    locationsList.innerHTML = "";

    locations.forEach((location) => {
      const locationElement = document.createElement("a");
      locationElement.classList.add("location");
      locationElement.innerHTML = `
                <a href="location.html?place=${location.url}" class="location-link">
                    <div class="location-overlay">
                        <img src="${location.preview}" alt="${location.name}" class="location-image">
                        <span class="location-name">${location.name}</span>
                    </div>
                </a>
            `;
      locationsList.appendChild(locationElement);
    });
  })
  .catch((error) => console.error("Error loading locations:", error));
