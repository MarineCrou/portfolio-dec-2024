// JS : Animating text using JS : https://www.shecodes.io/athena/2225-animating-text-with-javascript
// / * -------- Responsive - toggle responsive nav menu ---------------------------
let openResponsiveNav = () => {
  let displayResponsieMenu = document.getElementById("display-responsive-menu");
  displayResponsieMenu.classList.toggle("hidden");
};

const openResponsiveMenuBtn = document.querySelector(
  "#responsive-nav-menu-btn"
);
console.log(openResponsiveMenuBtn);
openResponsiveMenuBtn.addEventListener("click", openResponsiveNav);

// * -------- Responsive - close responsive nav menu ---------------------------
let displayResponsiveNav = () => {
  let closeResponsieMenu = document.getElementById("display-responsive-menu");
  closeResponsieMenu.classList.toggle("hidden");
};

const menuBtn = document.querySelector("#mobile-nav-btn");
menuBtn.addEventListener("click", displayResponsiveNav);

// * -------- Copying the value of the button "Copy Email", for end-users -------------
let emailValue = (event) => {
  let button = event.target;
  console.log(button);
  let input = document.getElementById("myInput");

  if (input && input.value) {
    console.log(input.value);
    navigator.clipboard.writeText(input.value);
    const getCopyEmail = event.target; // The button that was clicked
    const originalText = getCopyEmail.innerHTML;
    getCopyEmail.innerHTML = "copied ✔️";

    const reset = () => {
      getCopyEmail.innerHTML = originalText;
    };

    setTimeout(reset, 2000);
  }
};

const getEmailButtons = document.querySelectorAll(".copy-email");

getEmailButtons.forEach((button) => {
  button.addEventListener("click", emailValue);
});
