document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let isValid = true;

    if (name === "") {
      showError("nameError", "Please enter your full name.");
      isValid = false;
      document.getElementById("name").focus();
    }

    if (email === "") {
      showError("emailError", "Please enter your email address.");
      isValid = false;
      document.getElementById("email").focus();
    } else if (!validateEmail(email)) {
      showError("emailError", "Oops! Please enter a valid email address.");
      isValid = false;
      document.getElementById("email").focus();
    }

    if (password === "") {
      showError("passwordError", "Please create a password.");
      isValid = false;
      document.getElementById("password").focus();
    } else if (password.length < 8) {
      showError(
        "passwordError",
        "Your password should be at least 8 characters long."
      );
      isValid = false;
      document.getElementById("password").focus();
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      event.preventDefault();
      alert(
        "You have registered successfully! Please check your email to confirm."
      );
      form.reset();
    }
  });

  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.setAttribute("aria-live", "polite");
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
