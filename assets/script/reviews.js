const reviewsDiv = document.getElementById("reviews");

fetch("assets/data/reviews.json")
  .then((response) => response.json())
  .then((reviews) => {
    populateReviews(reviews);
  })
  .catch((error) => console.error("Error loading reviews:", error));

function populateReviews(reviews) {
  reviewsDiv.innerHTML = "";
  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "review";
    reviewElement.innerHTML = `
            <p class="review-content">${review.review}</p>
            <div class="review-info">
                <div class="review-data">
                    <p class="review-author">${review.author}</p>
                    <span class="mdi--dot"></span>
                    <p class="review-date">${review.date}</p>
                </div>
                <p class="review-rating">${review.rating}/10 <span class="line-md--star-alt-filled"></span></p>
            </div>
        `;
    reviewsDiv.appendChild(reviewElement);
  });
}
