const { form } = document.forms;
const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const message = document.querySelector('#message');
const warning = document.querySelector('.error');

/* ***************************** FORM VALIDATION ******************************** */
form.addEventListener('submit', (e) => {
  const user = userName.value;
  const email = userEmail.value;
  const text = message.value;
  if (user === '') {
    warning.textContent = 'Fill in the name field';
    e.preventDefault();
  }
  if (email === '') {
    warning.textContent = 'Fill in the email field';
    e.preventDefault();
  }

  if (email !== email.toLowerCase()) {
    warning.textContent = 'The email must be in lower case';
    e.preventDefault();
  }
  if (text === '') {
    warning.textContent = 'Id like to hear some from you!';
    e.preventDefault();
  }
  if (text.length < 50) {
    warning.textContent = 'Thats all you wanted to say? Please at least 50 words';
    e.preventDefault();
  }
  if (user === '' && email === '' && text === '') {
    warning.textContent = 'Please fill in all the fields';
    e.preventDefault();
  }
});

/* ********************** PRESERVE USER INPUTS IN THE LOCAL STORAGE ************************** */
