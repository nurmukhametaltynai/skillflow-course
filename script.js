const langBtn = document.getElementById("langBtn");
let currentLang = "ru";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ru" ? "kz" : "ru";
  langBtn.textContent = currentLang.toUpperCase();

  document.querySelectorAll("[data-kz]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
});
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const slider = document.getElementById('teachersSlider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = "grab";
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = "grab";
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {

        const isOpen = answer.classList.contains("active");

        document.querySelectorAll(".faq-answer").forEach(a => {
            a.style.maxHeight = null;
            a.classList.remove("active");
        });

        document.querySelectorAll(".faq-icon").forEach(i => {
            i.textContent = "+";
        });

        if (!isOpen) {
            answer.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + 60 + "px"; 
            icon.textContent = "−";
        }

    });
});