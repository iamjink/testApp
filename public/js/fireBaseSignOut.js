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

//log out function on button click
function logout() {
  window.alert("Logging out");
  firebase.auth().signOut();
  window.location.href = "/";
}
