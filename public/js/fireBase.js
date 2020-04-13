// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBej794q8wNt1kwGAQqJrfkJoL25zITNMA",
  authDomain: "authtest-4149b.firebaseapp.com",
  databaseURL: "https://authtest-4149b.firebaseio.com",
  projectId: "authtest-4149b",
  storageBucket: "authtest-4149b.appspot.com",
  messagingSenderId: "325310491846",
  appId: "1:325310491846:web:7befdd4b883d9c06713bc7",
  measurementId: "G-DYY0Q13V2R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

//log in function when input is made on button click
function login() {
  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorMessage = error.message;

      window.alert("Your email and password combination is not correct");
    });
}

//if user is signed in, load signedin page
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = "/signedin";
  }
});
