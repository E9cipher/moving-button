// Create the button
const button = document.createElement("button");
button.textContent = "Click me!";
button.tabIndex = -1;

// Basic styling
const {
    position = "fixed",
    left = "50%",
    top = "50%",
    transform = "translate(-50%, -50%)",
    padding = "12px 24px",
    fontSize = "18px",
    cursor = "pointer"
} = button.style;

// Add it to the page
document.body.appendChild(button);

// Remove page margins
document.body.style.margin = "0";
document.body.style.overflow = "hidden";