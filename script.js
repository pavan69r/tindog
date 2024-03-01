// script.js

// Get the modal elements
var loginModal = document.getElementById('loginModal');
var signupModal = document.getElementById('signupModal');

// Get the button elements that open the modals
var loginBtn = document.getElementById('loginBtn');
var signupBtn = document.getElementById('signupBtn');

// Get the <span> element that closes the modals
var closeBtns = document.getElementsByClassName("close");

// Function to open the login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Function to open the signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Function to close the modals when the close button is clicked
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
    }
}
