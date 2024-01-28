const users = [];
function isEmailTaken(email) {
  return users.some((user) => user.email === email);
}
function isUsernameTaken(username) {
  return users.some((user) => user.username === username);
}

function signup() {
  
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("repassword").value;
  const agreeTerms = document.getElementById("agreement").checked;

  if (isEmailTaken(email)) {
    alert("Email already exists. Please use a different email.");
    return;
  }
  if (isUsernameTaken(username)) {
    alert("Username already exists. Please use a different username.");
    return;
  }
  
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  
  const user = {
    firstName,
    lastName,
    username,
    email,
    password,
  };

  
  users.push(user);

  
  alert("Signup successful!");
}

  function authenticate(){

 const loginUsername = document.getElementById('username').value;
 const loginPassword = document.getElementById('password').value;
 var warningElement=document.getElementById("warning");

 const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

 if (user) {
   alert(`Welcome, ${user.firstName} ${user.lastName}!`);
   window.location.href="dashboard.html"

 } else {
    warningElement.textContent="Invalid username or password! Try Again"
      setTimeout(function () {warningElement.textContent = "";}, 3000);
 }
}
    

  

