// index.js

// Display selected ramen details
const handleClick = (ramen) => {
  const detailImage = document.querySelector(".detail-image");
  const name = document.querySelector(".name");
  const restaurant = document.querySelector(".restaurant");
  const rating = document.querySelector("#rating-display");
  const comment = document.querySelector("#comment-display");

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;
};

// Add new ramen to the menu
const addSubmitListener = () => {
  const form = document.querySelector("#new-ramen");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#new-name").value;
    const restaurant = document.querySelector("#new-restaurant").value;
    const image = document.querySelector("#new-image").value;
    const rating = document.querySelector("#new-rating").value;
    const comment = document.querySelector("#new-comment").value;

    const newRamen = {
      name,
      restaurant,
      image,
      rating,
      comment,
    };

    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;

    img.addEventListener("click", () => handleClick(newRamen));
    document.querySelector("#ramen-menu").appendChild(img);

    form.reset();
  });
};

// Fetch and display all ramen images
const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramens) => {
      ramens.forEach((ramen) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;

        img.addEventListener("click", () => handleClick(ramen));
        document.querySelector("#ramen-menu").appendChild(img);
      });
    });
};

// Run after DOM loads
const main = () => {
  displayRamens();
  addSubmitListener();
};

// ✅ Call main only after DOM is fully loaded
window.addEventListener("DOMContentLoaded", main);

// Export for tests
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
