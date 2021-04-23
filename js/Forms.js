//Salary range button synchronised with values of user
const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});

//Name starts with capital letter and minimum 3 letters

const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input", function () {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
});

//Email Validation

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener("input", function () {
  let emailRegex = RegExp(
    "^[A-Za-z]{3,}([.+_-][A-Za-z0-9]+)*[@][A-Za-z0-9]{1,}[.][a-zA-Z0-9]{2,3}([.][0-9a-zA-Z]{2})?$"
  );
  if (emailRegex.test(email.value)) {
    emailError.textContent = "";
  } else {
    emailError.textContent = "Email is not Valid";
  }
});

//Mobile number validation 

const tel = document.querySelector("#tel");
const telError = document.querySelector(".tel-error");
tel.addEventListener("input", function () {
  let telRegex = RegExp("^[1-9]{2}[ ][0-9]{10}$");
  if (telRegex.test(tel.value)) {
    telError.textContent = "";
  } else {
    telError.textContent = "telephone number is not Valid";
  }
});