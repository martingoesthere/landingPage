const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = bookingForm.elements.name.value.trim();
  formMessage.textContent = `Thanks, ${name || "guest"}! Your booking request has been received.`;
  bookingForm.reset();
});
