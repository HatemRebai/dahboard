

function test() {

    var x = document.getElementById('firstname').value;
    console.log(x);

    for (i = 0; i < x.length; i++) {
        if (x[i] == " ") {
            console.log("false")
        }
        else {
            console.log("true")
        }
    }
}



function validateEmail(email) {
    var emailll = document.getElementById("email").value;
    var y = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (y.match(emailll)) {
        console.log("True")
    }
    else {
        console.log("false")
    }

}


function validatephone(phone) {
    var ph = document.getElementById("Phonenumber").value;
    for (i = 0; i <= ph.length; i++) {
        if (isnon("ph[i]")) {
            console.log(false)
        }
        else {
            console.log(true)
        }
    }
}



function currendate() {
    var x = document.getElementById("date").value;
    //console.log(x);
    var time = new Date(x)
    // console.log(x);
    var datenow = new Date();
    // console.log(datenow-time) 
    var res = datenow - time;
    res = res / 31557600000;
    // console.log(res);
    if (res >= 18) {
        console.log("legual");
    }
    else {
        console.log("illegual");
    }
}

function validationlength1() {
    nb = document.getElementById("Password").value;
    y = nb.length;
    for (i = 0; i <= y.length; i++) {
        if (y >= 8) {

            return ('true');
        }
        else {
            return ('false');

        }
    }
}

function validationlength2() {

    x = document.getElementById("Password").value;
    Maj = /[A-Z]/g;
    if (x.match(Maj)) {


        return ('true');
    }

    else {
        return ('false');
    }
}

function validationlength3() {

    k = document.getElementById("Password").value;
    symbole = /[~<>?]+/ && /!@£$%^&*()/;
    if (k.match(symbole)) {
        console.log("True")
        return (true);
    }
    else {
        return (false)
    }
}
function tous() {
    var resultat = 0;
    if (validationlength1()) {
        resultat++
    }
    if (validationlength2()) {
        resultat++
    }
    if (validationlength3()) {
        resultat++
    }
    if (resultat == 1) {
        alert("faible")
    }
    else if (resultat == 2) { alert("moyen") }
    else if (resultat == 3) {
        alert("fort");
    }
    else ("erroné");
}

function register() {
    var tableauUser = JSON.parse(localStorage.getItem('user'))

    if (tableauUser == null) {
        tableauUser = []
    }
    var emaill = document.getElementById("email").value;
    var pw = document.getElementById("Password").value;
    var nom = document.getElementById("firstname").value;
    var prenom = document.getElementById("lastname").value;
    var user = {
        id : Math.floor(Math.random()*1000),
        userName: nom,
        lastName: prenom,
        email: emaill,
        mdp: pw,

    }
    tableauUser.push(user);

    localStorage.setItem("user", JSON.stringify(tableauUser));
    document.location.href = 'formulaire2.html'
}


function login() {
    var tab = JSON.parse(localStorage.getItem('user'));
    var adresse = document.getElementById('email').value;

    var pass = document.getElementById('motdepasse').value;
    test = false;
    for (i = 0; i < tab.length; i++) {

        if ((adresse == tab[i].email) && (pass == tab[i].mdp)) {
            localStorage.setItem('connected',JSON.stringify(tab[i])) //STOCKAGE
            test = true;
        }
    }


    if (test == true) {
        document.location.href="dachbord.html"
        // alert("ok");      
    } else {
        alert("no");
    }
}
