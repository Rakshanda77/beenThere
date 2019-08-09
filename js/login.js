var config = {
    apiKey: "AIzaSyA_7yI1zJv8m02KV2JWRig4SUMfvRmEh8I",
   authDomain: "saviours-b670c.firebaseapp.com",
   databaseURL: "https://saviours-b670c.firebaseio.com",
   projectId: "saviours-b670c",
   storageBucket: "",
   messagingSenderId: "631866391865",
   appId: "1:631866391865:web:cfae7e9b73021796"
};
firebase.initializeApp(config);
const body = document.body;
const buttons = document.querySelectorAll('button.fa-bars');

var db = firebase.firestore();
var admin_name, admin_email, admin_photoUrl, admin_uid, admin_emailVerified;

firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
      var pagename =document.title;
      if(pagename != "SIGN UP"){
          if(pagename != "LOGIN"){
          // User is signed in.
          var url = "login.html";
          $(location).attr("href", url);
      }
      }

  }

const login_button = document.querySelectorAll('#login_button');
login_button.forEach(button=>button.addEventListener('click',login_funct));


function login_funct(){

    var loguser = $("#log_name").val();
    var logpass = $("#log_pass").val();

    firebase.auth().signInWithEmailAndPassword(loguser, logpass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorCode + " " + errorMessage);
});


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var url = "home.html";
    $(location).attr("href", url);
  }
});
}

function password_funct(){
    document.location.href="reset_password.html";
}

});
//logout pagename
const logout = document.querySelectorAll('#logout_button');
logout.forEach(button => button.addEventListener('click',logout_funct));

//do the adding part
function logout_funct() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        document.location.href="login.html";
    }).catch(function(error) {
        // An error happened.
        alert("error! check your network");
    });
}
