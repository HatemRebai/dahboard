
function Add() {
    document.getElementById('task').style.display = 'block';
    document.getElementById('message').style.display = 'none';
    document.getElementById('update').style.display = 'none';




    //document.getElementById('task').style.visibility = 'visible';

    // var t = document.getElementById('task');
    // if (t.style.display == 'none') {

    //     t.style.display = 'block';//bech todhher
    // }
    // else {
    //     t.style.display = 'none';
    // }
}

function Add2() {
    var tableauUser2 = JSON.parse(localStorage.getItem('usertask'));4
    var user = JSON.parse(localStorage.getItem('connected'));
    if (tableauUser2 == null) {
        tableauUser2 = []
    }
    var prem = document.getElementById("sk").value;
    var time = document.getElementById("tmp").value;
    var usertsk = {
        idUser : user.id,
        userTask: prem,
        userTemps: time,
    };
    console.log(usertsk);
    tableauUser2.push(usertsk);
    localStorage.setItem("usertask", JSON.stringify(tableauUser2));
}
function Show() {
    document.getElementById('task').style.display = 'none';
    document.getElementById('message').style.display = 'block';
    var user = JSON.parse(localStorage.getItem('connected'));
    var usertask = JSON.parse(localStorage.getItem('usertask'));
    var html = '<table>'
    for (let i = 0; i < usertask.length; i++) {
        if (usertask[i].idUser == user.id) {
            html += '<tr>'
            html += '<td>' + usertask[i].userTask + '</td>'
            html += '<td>' + usertask[i].userTemps + ' </td>'
            html += '<td><button onclick=dele(' + i + ')>DELETE</button></td>'
            html += '<td><button onclick=update(' + i + ')>UPDATE</button></td>'
            html += '</tr>'
        }
    }
    html += '</table> ';
    document.getElementById('message').innerHTML = html;
}
function dele(index) {
    var table = JSON.parse(localStorage.getItem('usertask'))
    table.splice(index, 1)
    localStorage.setItem("usertask", JSON.stringify(table));
    Show()
}
function update(index) {
    var table = JSON.parse(localStorage.getItem('usertask'))
    document.getElementById('update').style.display = 'block';
    document.getElementById('skE').value = table[index].userTask;
    document.getElementById('tmpE').value = table[index].userTemps;
    document.getElementById('index').value = index
}
function modify() {
    var table = JSON.parse(localStorage.getItem('usertask'))
    var task = document.getElementById('skE').value;
    var time = document.getElementById('tmpE').value;
    var index = document.getElementById('index').value;
    var data = {
        userTask: task,
        userTemps: time
    }
    table.splice(index, 1, data)
    localStorage.setItem("usertask", JSON.stringify(table));
    Show()
}
function logout() {
    localStorage.removeItem('connected')
    document.location.href = 'formulaire2.html'
}