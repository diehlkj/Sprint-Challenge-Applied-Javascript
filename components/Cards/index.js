// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const newCard = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authorContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const author = document.createElement("span");

  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  author.textContent = article.authorName;

  card.classList.add("card");
  headline.classList.add("headline");
  authorContainer.classList.add("author");
  imgContainer.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(author);

  return card;
};
const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.values(response.data.articles).forEach(topic => {
      // Won't be as easy as iterating over an array huh :)
      topic.forEach(article => {
        cardContainer.appendChild(newCard(article));
      });
    });
  })
  .catch(error => {
    console.log("Lambda Times Backend Error: ", error);
  });
