document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");
  const navDots = document.querySelectorAll(".slider-nav a");

  let index = 0;

  function updateActiveDot() {
      navDots.forEach(dot => dot.classList.remove("active"));
      navDots[index].classList.add("active");
  }

  function moveSlide(direction) {
      const slideWidth = slider.clientWidth;
      index += direction;

      if (index < 0) {
          index = slides.length - 1;
      } else if (index >= slides.length) {
          index = 0;
      }

      slider.scrollLeft = index * slideWidth;
      updateActiveDot();
  }

  // Click event for navigation dots
  navDots.forEach(dot => {
      dot.addEventListener("click", function (e) {
          e.preventDefault();
          index = parseInt(this.getAttribute("data-index"));
          slider.scrollLeft = index * slider.clientWidth;
          updateActiveDot();
      });
  });

  updateActiveDot(); // Initialize first dot as active
});
