const imageArray = [
  "https://trekkingwebsitetest.netlify.app/images/image1.png",
  "https://trekkingwebsitetest.netlify.app/images/image2.png",
  "https://trekkingwebsitetest.netlify.app/images/image3.png",
  "https://trekkingwebsitetest.netlify.app/images/image4.png",
  "https://trekkingwebsitetest.netlify.app/images/image5.png",
];

const textArray = [
  "Your Journey Begins Here",
  "Explore the Himalayan Peaks",
  "Feel the Adventure Within",
  "Discover the Unseen Nature",
  "Live the Life of Wanderlust",
];

const container = document.getElementById("corousel");
const textContainer = document.getElementById("text-content");
let index = 0;
const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", (e) => {
  index++;
  if (index >= imageArray.length - 1) {
    index = 0;
  }

  container.style.backgroundImage = `url(${imageArray[index]})`;
  textContainer.innerText = textArray[index];
});

// function next(event) {
//   index++;
//   if (index >= imageArray.length - 1) {
//     index = 0;
//   }

//   container.style.backgroundImage = `url(${imageArray[index]})`;
//   textContainer.innerText = textArray[index];

//   //   console.log(event.target);
//   //   console.log(event);
// }

function prev() {
  if (index <= 0) {
    index = imageArray.length;
  }

  index--;
  container.style.backgroundImage = `url(${imageArray[index]})`;
  textContainer.innerText = textArray[index];
}
