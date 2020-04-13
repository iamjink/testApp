firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;

    if (user != null) {
      //   var email_id = user.email;
      //   document.getElementById("user_para").innerHTML =
      //     "Welcome User : " + email_id;
      //   window.location.href = "/user";
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

//log in function when input is made on button click
function login() {
  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;
  window.location.href = "/signedin";

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;

      window.alert("Your email and password combination is not correct");
    });
}

//log out function on button click
function logout() {
  window.alert("Logging out");
  firebase.auth().signOut();
}
