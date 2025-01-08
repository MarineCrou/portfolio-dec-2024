// JS : Animating text using JS : https://www.shecodes.io/athena/2225-animating-text-with-javascript

// function scrollleft() {
//   document.getElementById("scrolling-text").style.left = "100%";
//   setTimeout(scrollleft, 25);
// }
// scrollleft();

let emailValue = () => {
  let inputValue = document.getElementById("myInput");
  navigator.clipboard.writeText(inputValue.value);
  console.log(inputValue.value);
};

const getCopyEmail = document.getElementById("copy-email");
getCopyEmail.addEventListener("click", emailValue);
