const newsletterForm = document.querySelector(".newsletter-form");
const formSubmitBtn = document.querySelector(".submit-btn");
const input = document.querySelector(".email-data");
console.log(newsletterForm, formSubmitBtn);

function handleSubmit(e) {
  // prevent the browser from loading and automatically submitting form
  e.preventDefault();

  // retrieve form data before adding the validation
  let data = {};

  //get the name and assign it to object property
  data.name = input.value;

  if (data.name === "") {
    console.log("empty name");
  }
  console.log(data);
}

newsletterForm.addEventListener("submit", handleSubmit);
