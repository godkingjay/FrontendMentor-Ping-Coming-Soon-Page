const emailFeild = document.querySelector(".email-feild");
const emailMessage = document.querySelector(".email-validation-message");
const submitBtn = document.querySelector('.input-submit');
const inputForm = document.querySelector('.input-form');

emailFeild.addEventListener('input', () => {
  if(emailFeild.value != "") {
    if(validateEmail(emailFeild)){
      submitBtn.classList.add("button-valid");
      emailFeild.classList.add('input-field-valid');
      emailFeild.classList.remove('input-field-invalid');
      emailMessage.classList.remove('email-validation-message-show');
      submitBtn.disabled = false;
    } else {
      submitBtn.classList.remove("button-valid");
      emailFeild.classList.remove('input-field-valid');
      emailFeild.classList.add("input-field-invalid");
      emailMessage.classList.add("email-validation-message-show");
      emailMessage.textContent = "Please provide a valid email address";
      submitBtn.disabled = true;
    }
  } else {
    submitBtn.classList.remove('button-valid');
    emailFeild.classList.remove('input-feild-valid');
    emailFeild.classList.remove('input-field-invalid');
    emailMessage.classList.remove("email-validation-message-show");
    submitBtn.disabled = false;
  }
});

function validateEmail(e){
  return String(e.value)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

inputForm.addEventListener('submit', (e) => {
  if(emailFeild.value.length == 0){
    emailMessage.textContent = "Whoops! It looks like you forgot to add your email";
    emailFeild.classList.add('input-field-invalid');
    emailMessage.classList.add('email-validation-message-show');
    e.preventDefault();
  }
});