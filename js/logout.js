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
