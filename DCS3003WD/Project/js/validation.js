const form = document.getElementById("contact-form");

// Input Fields
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Form Submit Handler
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect and validate input values
    const errors = [];
    if (firstName.value.trim() === "") {
        errors.push("First name is required.");
    }
    if (lastName.value.trim() === "") {
        errors.push("Last name is required.");
    }
    if (email.value.trim() === "") {
        errors.push("Email is required.");
    }
    if (message.value.trim() === "") {
        errors.push("Message is required.");
    }

    // Check for errors
    if (errors.length > 0) {
        alert(errors.join("\n")); // Display all errors in an alert
    } else {
        alert("Form submitted successfully!");
        form.reset(); // Reset form fields
    }
});
