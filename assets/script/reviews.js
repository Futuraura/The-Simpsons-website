let reviews = [
{
    id: 1,
    author: "Someone",
    review: "Something Lorem ipsum calor sit omet whatever shit",
    date: "Date n' time",
    rating: 9.8
},
{
    id: 2,
    author: "Author Name",
    review: "An amazing show that satirizes American culture.",
    date: "Someday in 20205",
    rating: 5
},
{
    id: 3,
    author: "Someone",
    review: "The review content",
    date: "Someday in 2030",
    rating: 3.5
}
]

const reviewsDiv = document.getElementById("reviews")

function populateReviews() {
    reviewsDiv.innerHTML = ""
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
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

populateReviews()
