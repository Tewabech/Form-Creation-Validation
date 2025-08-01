document.addEventListener('DOMContentLoaded', function () {
    // Form and feedback selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission handler
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Get trimmed values from input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation status and messages
        let isValid = true;
        const messages = [];

        // === Username Validation ===
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // === Email Validation ===
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Email must contain '@' and '.'.");
        }

        // === Password Validation ===
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // === Feedback Display ===
        feedbackDiv.style.display = "block"; // Show feedback box

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red
        }
    });
});