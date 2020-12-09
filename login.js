const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  const email = signupForm['signup-email'].value;
  console.log(email);
  const password = signupForm['signup-password'].value;
  

  auth.signInWithEmailAndPassword(email, password).then(cred => {
      location.href="about.html";
    console.log(cred.user);
  }).catch(function(error) {
    alert(error)
     // ...
   });
  
  
});