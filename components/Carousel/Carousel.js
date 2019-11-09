/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const newCarousel = () => {
  const carousel = document.createElement("div");
    const lBtn = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");
    const rBtn = document.createElement("div");

  lBtn.textContent = '<';
  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';
  rBtn.textContent = '>';

  carousel.classList.add("carousel");
  lBtn.classList.add("left-button");
  rBtn.classList.add("right-button");
  
  // Setting index classes
  img1.classList.add('active');

  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(lBtn);
  carousel.appendChild(rBtn);

  return carousel;
};
const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(newCarousel());

const theImgs = Array.from(document.querySelectorAll('.carousel-container img'));
const numOfImgs = theImgs.length;
let index = 0;



const prevImg = () => {
  if (index === numOfImgs - 1) {
    theImgs[index].classList.remove('active');
    index = 0;
    theImgs[index].classList.add('active');
  } else {
    theImgs[index].classList.remove('active');
    index++;
    theImgs[index].classList.add('active');
  }
};

const nextImg = () => {
  if (index === 0) {
    theImgs[index].classList.remove('active');
    index = (numOfImgs - 1);
    theImgs[index].classList.add('active');
  } else {
    theImgs[index].classList.remove('active');
    index--;
    theImgs[index].classList.add('active');
  }
};

document.querySelector('.left-button').addEventListener('click', prevImg);
document.querySelector('.right-button').addEventListener('click', nextImg);