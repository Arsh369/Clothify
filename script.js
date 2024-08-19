document.addEventListener('DOMContentLoaded', () => {
  const timeline = gsap.timeline(); // Create a new GSAP timeline

  // Select the menu toggle, close button, and menu items elements
  const menuToggle = document.querySelector("#menu-toggle");
  const menuClose = document.querySelector("#menu-close");
  const menuItems = document.querySelector(".menu-items");

  function initMenuAnimation() {
      // Define the animation for the menu items to slide in from the right
      timeline.to(menuItems, {
          right: 0,
          display: "block",
      });

      // Define the animation for the menu links to slide in with a staggered effect
      timeline.from(menuItems.querySelectorAll("a"), {
          x: 300,
          stagger: 0.1,
      });

      // Define the animation for the close button to rotate and appear
      timeline.to(menuClose, {
          display: "block",
          rotate: 360,
      });

      // Pause the timeline so it doesn't play immediately
      timeline.pause();
  }

  initMenuAnimation(); // Initialize the menu animations

  // Add an event listener to the menu toggle to play the timeline when clicked
  menuToggle.addEventListener("click", () => {
      timeline.play();
  });

  // Add an event listener to the menu close to reverse the timeline when clicked
  menuClose.addEventListener("click", () => {
      timeline.reverse();
  });

  function initCursorAnimation() {
      // Add an event listener to update the custom cursor position on mouse move
      document.addEventListener("mousemove", (event) => {
          gsap.to(".custom-cursor", {
              x: event.clientX - 5,
              y: event.clientY - 5,
              scale: 1,
          });
      });

      // Add an event listener to hide the custom cursor on mouse leave
      document.addEventListener("mouseleave", () => {
          gsap.to(".custom-cursor", {
              scale: 0,
          });
      });
  }

  initCursorAnimation(); // Initialize the custom cursor animations

  // Select the main title element
  const mainTitle = document.querySelector("main h1");
  const titleText = mainTitle.textContent; // Get the text content of the main title
  const splitText = titleText.split(""); // Split the title text into individual characters
  let spanText = "";

  // Wrap each character in a span element
  splitText.forEach((char) => {
      spanText += `<span>${char}</span>`;
  });

  mainTitle.innerHTML = spanText; // Replace the title text with the span-wrapped characters

  // Define the animation for the navbar to slide down from the top
  gsap.to(".navbar", {
      top: 0,
      delay: 0.5,
  });

  // Define the animation for the main title characters to slide up with a staggered effect
  gsap.from("main h1 span", {
      y: 200,
      delay: 1.5,
      duration: 1,
      stagger: 0.2,
  });
  gsap.to("main h1 span", {
    y: 200,
    delay: 6,
    duration: 1,
    stagger: 0.2,
});
});
