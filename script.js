// === EmailJS Configuration ===
(function () {
  emailjs.init("mU-jl_bw5pHrKU2y7"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_fgogmq4', 'template_sx48w3g', this) //email service id and template id
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    });
});

// === Counter Animation ===
const counters = document.querySelectorAll(".counter");
const speed = 100;

const animateCounters = () => {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.disconnect(); // Animate once
    }
  });
}, { threshold: 0.5 });

const countersSection = document.querySelector(".counters");
if (countersSection) observer.observe(countersSection);

// === Testimonials Slider ===
let slideIndex = 0;
const slides = document.querySelectorAll(".testimonial-slider .slide");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.opacity = (i === slideIndex) ? "1" : "0";
    slide.style.transition = "opacity 1s ease";
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlide, 3000);
showSlide();
