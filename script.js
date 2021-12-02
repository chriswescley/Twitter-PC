// Get the modal
var accountManager = document.getElementById("accountManager");

// Get the button that opens the modal
var switchProfile = document.getElementById("switchProfile");


// When the user clicks on the button, open the modal
switchProfile.onclick = function() {
    accountManager.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target != switchProfile) {
    accountManager.style.display = "none";
  }
}