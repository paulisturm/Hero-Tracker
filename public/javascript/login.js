async function loginFormHandler(event) {
    event.preventDefault();
 
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log("login form handler",email, password)
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'get',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  