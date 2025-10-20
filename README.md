Stage 0: Profile Card

A responsive, accessible profile card built with semantic HTML, CSS, and vanilla JavaScript.

## 🧠 Features

- Semantic HTML5 structure
- Accessible markup with `aria-labels` and alt text
- Responsive layout using Flexbox
- Live time display (in milliseconds)
- Keyboard-focusable social links

## 🚀 Live Demo

[View Live Project](https://h3ktorr.github.io/hngproject1/)

## 💻 Repository

[GitHub Repo](https://github.com/h3ktorr/hngproject1)

## 🧰 How to Run Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/h3ktorr/hngproject1.git
   ```
2. Open the folder:
   cd hngproject1
3. Open index.html in your browser.

📁 Project Structure
hngproject1/
│
├── index.html # Main Profile Card page
├── about.html # About page
├── contact.html # Contact page with validation
├── style.css # Styles for all pages (responsive)
├── script.js # Updates time in milliseconds
├── contact.js # Handles contact form validation
└── hero.jpg # Profile avatar image

🧪 Tests / Notes

✅ All Required data-testid Attributes Implemented.

🕒 Time Updates:

Displays current time in milliseconds.

Updates every 1000ms using JavaScript (setInterval).

♿ Accessibility:

All interactive elements (links, form inputs) are keyboard-focusable.

alt text provided for all images.

Semantic sections and headers are used throughout.

📱 Responsiveness:

On mobile: content stacks vertically.

On larger screens: avatar and info are displayed side-by-side.

Layout adapts fluidly across screen sizes.

🧩 Contact Form Validation

Located in contact.html and powered by contact.js.

Validates all fields (name, email, subject, message)

Displays inline error messages

Shows success message when valid

Uses aria-describedby for accessible feedback
