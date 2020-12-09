const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  const email = signupForm['signup-email'].value;
  console.log(email);
  const password = signupForm['signup-password'].value;
  

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
  }).catch(function(error) {
    alert(error)
     // ...
   });
  
  
});