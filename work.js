// Email input event listener
const emailInput = document.querySelector('.email');
const paperPlaneIcon = document.querySelector('.icon-paper-plane');

emailInput.addEventListener("change", handleInputChange);
emailInput.addEventListener("keyup", handleInputChange);
emailInput.addEventListener("paste", handleInputChange);

function handleInputChange() {
 if (emailInput.value) {
  paperPlaneIcon.classList.add("next");
 } else {
  paperPlaneIcon.classList.remove("next");
 }
}

// Email button click event listener
const emailButton = document.querySelector('.next-button.email');

emailButton.addEventListener("click", function () {
 console.log("Something");
 const emailSection = document.querySelector('.email-section');
 const passwordSection = document.querySelector('.password-section');

 emailSection.classList.add("fold-up");
 passwordSection.classList.remove("folded");
});

// Password input event listener
const passwordInput = document.querySelector('.password');
const lockIcon = document.querySelector('.icon-lock');

passwordInput.addEventListener("change", handlePasswordChange);
passwordInput.addEventListener("keyup", handlePasswordChange);
passwordInput.addEventListener("paste", handlePasswordChange);

function handlePasswordChange() {
 if (passwordInput.value) {
  lockIcon.classList.add("next");
 } else {
  lockIcon.classList.remove("next");
 }
}

// Password button click event listener
const passwordButton = document.querySelector('.next-button.password');

passwordButton.addEventListener("click", function () {
 console.log("Something");
 const passwordSection = document.querySelector('.password-section');
 const repeatPasswordSection = document.querySelector('.repeat-password-section');

 passwordSection.classList.add("fold-up");
 repeatPasswordSection.classList.remove("folded");
});

// Repeat password input event listener
const repeatPasswordInput = document.querySelector('.repeat-password');
const repeatLockIcon = document.querySelector('.icon-repeat-lock');

repeatPasswordInput.addEventListener("change", handleRepeatPasswordChange);
repeatPasswordInput.addEventListener("keyup", handleRepeatPasswordChange);
repeatPasswordInput.addEventListener("paste", handleRepeatPasswordChange);

function handleRepeatPasswordChange() {
 if (repeatPasswordInput.value) {
  repeatLockIcon.classList.add("next");
 } else {
  repeatLockIcon.classList.remove("next");
 }
}

// Repeat password button click event listener
const repeatPasswordButton = document.querySelector('.next-button.repeat-password');

repeatPasswordButton.addEventListener("click", function () {
 console.log("Something");
 const repeatPasswordSection = document.querySelector('.repeat-password-section');
 const successSection = document.querySelector('.success');

 repeatPasswordSection.classList.add("fold-up");
 successSection.style.marginTop = "0";
});
