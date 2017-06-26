// Code goes here

function changeImage() {
  var imgEl = document.querySelector('#whitespace');
  var random = Math.floor(Math.random() * 4);
  if (random === 0) {
    imgEl.src = "https://vignette4.wikia.nocookie.net/seuss/images/d/d3/Thing1-and-thing2.jpg/revision/latest?cb=20131013015212";
  } else if (random === 1) {
    imgEl.src = "https://upload.wikimedia.org/wikipedia/en/7/73/The_Grinch.png";
  } else if (random === 2) {
    imgEl.src = "https://www.universalorlando.com/web/k2/en/us/files/assets/cat-in-the-hat-ride-f.png";
  } else {
    imgEl.src = "http://images.clipartpanda.com/dr-seuss-clipart-horton.png";
  }
}