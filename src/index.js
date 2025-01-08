// JS : Animating text using JS : https://www.shecodes.io/athena/2225-animating-text-with-javascript

// Copying the value of the button "Copy Email" in her section

let emailValue = () => {
  let inputValue = document.getElementById("myInput");
  navigator.clipboard.writeText(inputValue.value);
  console.log(inputValue.value);

  const getCopyEmail = document.getElementById("copy-email");
  const originalText = getCopyEmail.innerHTML;
  getCopyEmail.innerHTML = "copied ✔️";

  const reset = () => {
    getCopyEmail.innerHTML = originalText;
  };

  setTimeout(reset, 2000);
};

const getCopyEmail = document.getElementById("copy-email");
getCopyEmail.addEventListener("click", emailValue);
