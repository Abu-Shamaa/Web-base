var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var specials = document.getElementById("specials");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

    //special charecters
  var special = /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g
   if(myInput.value.match(special)) {  
    specials.classList.remove("invalid");
    specials.classList.add("valid");
  } else {
    specials.classList.remove("valid");
    specials.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

var FirstName = document.getElementById("first_name");
var LastName = document.getElementById("last_name");
var nameletter = document.getElementById("nameletter");


//name validation
FirstName.onfocus = function() {
  document.getElementById("NameMessage").style.display = "block";
}
// When the user clicks outside of the password field, hide the message box
FirstName.onblur = function() {
  document.getElementById("NameMessage").style.display = "none";
}
// When the user starts to type something inside the password field
FirstName.onkeyup = function() {
  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  if(FirstName.value.match(lowerCaseLetters)||FirstName.value.match(upperCaseLetters)) {  
    nameletter.classList.remove("invalid");
    nameletter.classList.add("valid");
  } else {
     nameletter.classList.remove("valid");
     nameletter.classList.add("invalid");
  }
}

LastName.onfocus = function() {
  document.getElementById("NameMessage").style.display = "block";
}

LastName.onblur = function() {
  document.getElementById("NameMessage").style.display = "none";
}
LastName.onkeyup = function() {
  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  if(LastName.value.match(lowerCaseLetters)||LastName.value.match(upperCaseLetters)) {  
    nameletter.classList.remove("invalid");
    nameletter.classList.add("valid");
  } else {
     nameletter.classList.remove("valid");
     nameletter.classList.add("invalid");
  }
}
//End name validation
var Email = document.getElementById("email");
var emailSample = document.getElementById("emailSample");

Email.onfocus = function() {
  document.getElementById("emailhigh").style.display = "block";
}
Email.onblur = function() {
  document.getElementById("emailhigh").style.display = "none";
}
Email.onkeyup = function() {
  var validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(Email.value.match(validEmail)) {  
    emailSample.classList.remove("invalid");
    emailSample.classList.add("valid");
  } else {
     emailSample.classList.remove("valid");
     emailSample.classList.add("invalid");
  }
}
function myFunction() {
	var password = document.forms['supform']['password'].value;
	var confirm_password = document.forms['supform']['Confirm_password'].value;
  if (password==Confirm_password) {
  	 alert("Registration successful");
  	 return true;
  }
}



