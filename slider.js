const elsSlide = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");

const slideWrapper = document.querySelector(".slider_wrapper");
const slideInner = document.querySelector(".slider_inner");
let width = window.getComputedStyle(slideWrapper).width;
console.log(width);

let offset = 0;

slideInner.style.width = (100 / 5) * elsSlide.length + "%";
console.log();
elsSlide.forEach((v) => {
  v.style.width = `${width.slice(0, width.length - 2) / 5}px`;
});

slideInner.style.transition = "0.3s ease all";

nextBtn.addEventListener("click", () => {
  if (
    offset ===
    (+width.slice(0, width.length - 2) / 5) * (elsSlide.length - 2)
  ) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2) / 5; // 900
  }
  slideInner.style.transform = `translateX(-${offset}px)`;
});

prevBtn.addEventListener("click", () => {
  if (offset == 0) {
    offset = (+width.slice(0, width.length - 2) / 5) * (elsSlide.length - 2);
  } else {
    offset -= +width.slice(0, width.length - 2) / 5;
  }
  slideInner.style.transform = `translateX(-${offset}px)`;
});
