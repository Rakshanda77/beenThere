// *******************************************************
// ******** NPMs Installed *******************************
// *******************************************************
//
//      1)  npm init -y
//      2)  npm i express
//      3)  npm i mysql
//      4)  npm i cors
//
// *******************************************************
// ******** Required Modules *****************************
// *******************************************************
const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

// *******************************************************
// ******** Environmental Variables **********************
// *******************************************************
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
const conStr = {
    host: 'beenthere.wmdd.ca',
    database: 'projectData',
    user: 'Rakshanda',
    password: 'Sonam123@@'
}

// *******************************************************
// ******** Query Setup **********************************
// *******************************************************
const con = mysql.createConnection(conStr);

// *******************************************************
// ******** GETs - the "R" in CRUD **********************
// *******************************************************
app.get('/review', (req, res) => {
    let qry = 'SELECT review FROM Review Where id = 1';
    con.query(qry, (err, response) =>{
        if(err) throw err;
        res.send(response[0])
    })  
    
})

app.get('/login', (req, res) => {
    let qry = 'SELECT fName FROM Signup Where id = 1';
    con.query(qry, (err, response) =>{
        if(err) throw err;
        res.send(response[0])
    })  
    
})

// i tried to do login,signup but it is not working with my front end .It is working on local host.



addbtnn.addEventListener('click', (e) => {
   
    let jsonPut = {
        fName: newfName.value,
        lName: newlName.value,
        email: email.value,
        pNo :pNo.value,
        age: age.value,
        paswd:  paswd.value,
        cnfr: cnfr.value
    };
    jsonPut = JSON.stringify(jsonPut);
    fetch(`http://localhost:3000/Signup`, 
    { method: 'POST', headers: {'Content-Type' : 'application/json'}, body: jsonPut}).then((res) => {
        res.json().then((data) => {
            if(data.err) {
                console.log(err);
            } else {
              msgArea2.innerHTML = data.msg;
              fName.value = '';

              lName.value = '';
              email.value = '';
              pNo.value = '';
              age.value = '';
              paswd.value = '';
              cnfr.value = '';
            }
        })
    })


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// X*****************************************************X
// X******* DELETEs - No Deletes, no "D" in CRUD ********X
// X*****************************************************X
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// The Delete or Remove Operation simply calls the
//      deactivate route

// *******************************************************
// ******** Start the Server *****************************
// *******************************************************
app.listen(port, () => {
    console.log(`The Server is Up and Running on Port ${ port }`);
})

// *******************************************************
// ******** End of Code **********************************