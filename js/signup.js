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

const signup_button = document.querySelectorAll('button');
signup_button.forEach(button => button.addEventListener('click',signup_funct));

//do the adding part
function signup_funct() {

    let name = $('#name').val();
    let email = $('#email').val();
    let pswd = $('#paswd').val();
    let confrm = $('#cnfr').val();

if(name==""){
        $('#name').css('border-color','red');
}
else{
        $('#name').css('border-color','rgb(10,63,88)');
}
var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(filter.test(email)){

    if(pswd==""){
            $('#paswd').css('border-color','red');
            $('#cnfr').css('border-color','red');
    }
    else{
        if(pswd == confrm){

        firebase.auth().createUserWithEmailAndPassword(email, pswd).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...

            alert(errorCode + " " + errorMessage);

            });

          $('#paswd').css('border-color','rgb(10,63,88)');
          $('#cnfr').css('border-color','rgb(10,63,88)');


          firebase.auth().signOut().then(function() {
              // Sign-out successful.
                alert("signup Successfull!");
                document.location.href="login.html";

          }).catch(function(error) {
              // An error happened.
              alert("error! check your network");
          });
        }
        else{
            $('#paswd').css('border-color','red');
            $('#cnfr').css('border-color','red');
        }
    }



$('#email').css('border-color','rgb(10,63,88)');
$('#email').css('background-color','transparent');
}
else{

    $('#email').css('border-color','red');
}


};
