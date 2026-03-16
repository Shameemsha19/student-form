function saveData(){ 
    
var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var course = document.getElementById("course").value;
var email = document.getElementById("email").value;
var genderElements = document.getElementsByName("gender");
var gender = "";
    for(var i=0; i<genderElements.length; i++){
        if(genderElements[i].checked){
            gender = genderElements[i].value;
        }
    }

var table=document.getElementById("tableBody");

    var row = table.insertRow(-1);

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = age;
    row.insertCell(2).innerHTML = gender;
    row.insertCell(3).innerHTML = course;
    row.insertCell(4).innerHTML = email;

var deleteCell =row.insertCell(5);
    deleteCell.innerHTML = "<button class='delete-btn' onclick='deleteRow(this)'>Delete</button>"

}

function deleteRow(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}


