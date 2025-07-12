// 🔁 Image slider logic
const slider = document.getElementById("sliderImage");

const images = [
  "assets/images/web-2-1.webp",
  "assets/images/web-3.webp",
  "assets/images/products-web.webp"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.opacity = 0;

  setTimeout(() => {
    slider.src = images[index];
    slider.style.opacity = 1;
  }, 500);
}, 3000);
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('splash-video');
  video.playbackRate = 2.0; // 1 = normal speed, 1.5 = faster, 2 = double speed
});
