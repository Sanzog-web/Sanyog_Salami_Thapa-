const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggles the visibility of the menu
});

// Add smooth scrolling to the navigation links

const navLinksArray = Array.from(navLinks.children); // Convert the NodeList to an array

navLinksArray.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent the default link behavior
        const targetId = event.target.getAttribute("href").slice(1); // Get the target ID from the link's href attribute
        const targetElement = document.getElementById(targetId); // Get the target element
        const targetPosition = targetElement.offsetTop; // Get the position of the target element
        window.scrollTo({ top: targetPosition, behavior: "smooth" }); // Smoothly scroll to the target element
        navLinks.classList.remove("active"); // Close the menu after clicking a link
    });
});

