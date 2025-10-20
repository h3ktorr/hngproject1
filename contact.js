const form = document.getElementById("contactForm");
const successMsg = document.querySelector(
  '[data-testid="test-contact-success"]'
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const nameInput = document.querySelector('[data-testid="test-contact-name"]');
  const emailInput = document.querySelector(
    '[data-testid="test-contact-email"]'
  );
  const subjectInput = document.querySelector(
    '[data-testid="test-contact-subject"]'
  );
  const messageInput = document.querySelector(
    '[data-testid="test-contact-message"]'
  );

  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMsg.hidden = true;

  // Validate fields
  if (!nameInput.value.trim()) {
    document.querySelector(
      '[data-testid="test-contact-error-name"]'
    ).textContent = "Full name is required.";
    valid = false;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.querySelector(
      '[data-testid="test-contact-error-email"]'
    ).textContent = "Enter a valid email (name@example.com).";
    valid = false;
  }

  if (!subjectInput.value.trim()) {
    document.querySelector(
      '[data-testid="test-contact-error-subject"]'
    ).textContent = "Subject is required.";
    valid = false;
  }

  if (messageInput.value.trim().length < 10) {
    document.querySelector(
      '[data-testid="test-contact-error-message"]'
    ).textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  // Success
  if (valid) {
    successMsg.hidden = false;
    form.reset();
  }
});
