const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function () {
  header.classList.toggle("menu-open");
});


const navLinks = document.querySelectorAll("#global-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    header.classList.remove("menu-open");
  });
});

const productImages = document.querySelectorAll(".product-item img");

productImages.forEach(function (image) {
  image.addEventListener("mouseenter", function () {
    image.style.transform = "scale(1.05)";
  });

  image.addEventListener("mouseleave", function () {
    image.style.transform = "scale(1)";
  });
});

