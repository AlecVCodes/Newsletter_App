const newsletterContainer = document.getElementById("newsletter-main");
console.log(newsletterContainer);
const newsletterForm = document.querySelector(".newsletter-form");
const formSubmitBtn = document.querySelector(".submit-btn");
const input = document.querySelector(".email-data");

//custom error message

const invalidEmailMessage = document.querySelector("#email-error");
console.log(invalidEmailMessage);

// success container

// success container email text
const successContainer = document.querySelector(".success-container");
const successContainerEmail = document.getElementById("user-email");
const dismissBtn = document.querySelector(".dismiss-btn");

// regex pattern for email

let regexPattern = /@/;

function handleSubmit(e) {
  // prevent the browser from loading and automatically submitting form
  e.preventDefault();

  // retrieve form data before adding the validation
  let data = {};

  //get the name and assign it to object property
  data.name = input.value;

  if (data.name === "" || !regexPattern.test(data.name)) {
    console.log("empty name");
    invalidEmailMessage.style.display = "block";
  } else {
    invalidEmailMessage.style.display = "none";
    successContainerEmail.innerText = input.value;

    // hide main container and show success container
    successContainer.style.display = "flex";
    newsletterContainer.style.display = "none";
    console.log(data.name);
  }
}

newsletterForm.addEventListener("submit", handleSubmit);

//remove success message and return to newsletter page

dismissBtn.addEventListener("click", () => {
  successContainer.style.display = "none";
  newsletterContainer.style.display = "flex";

  //reset email value
  input.value = "";
});

//reset input value when the user refreshes
window.addEventListener("load", (e) => {
  input.value = "";
});
