const registrationForm = document.querySelector('#registration-form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  /* Get form data and validate input values */
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (!username || !email || !password) {
    alert('Please fill in all fields');
    return;
  }
  if(username == username || email == email || password == password){
    alert('Form sumbitted successfully');
  }
  /* Submit the form data to the server */
});