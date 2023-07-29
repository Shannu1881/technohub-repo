document.addEventListener("DOMContentLoaded", function () {
    // Get the element to animate
    const fadeUpElement = document.querySelector(".fade-up-text");

    // Function to check if the element is in the viewport
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle the fade-up animation
    function fadeUp() {
      if (isElementInViewport(fadeUpElement)) {
        fadeUpElement.style.opacity = 1;
        fadeUpElement.style.transform = "translateY(0)";
      }
    }

    // Call the function on page load and whenever the user scrolls
    fadeUp();
    window.addEventListener("scroll", fadeUp);
  });