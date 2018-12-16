function chooseNumberOfPeople(selectedObject) {
    var selectedValue = selectedObject.value;

    var personOne = document.getElementById("personOne");
    var personTwo = document.getElementById("personTwo");
    var bringingChilden = document.getElementById("bringingChildren");


    if (selectedValue == "0") {
        personOne.style.display = "none";
        personTwo.style.display = "none";
        bringingChilden.style.display = "none";
    }

    if (selectedValue == "1") {
        personOne.style.display = "block";
        bringingChilden.style.display = "block";
        personTwo.style.display = "none";
    }

    if (selectedValue == "2") {
        personOne.style.display = "block";
        personTwo.style.display = "block";
        bringingChilden.style.display = "block";
    }
}

function startup(selectedObject) {
    var attendees = document.getElementById("attendees");
    attendees.value = "0";

    var checkboxes = document.getElementsByTagName('input');

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'radio') {
            checkboxes[i].checked = false;
        }
    }
}

function showMe(box) {

    var chboxs = document.getElementsByName("1");
    var vis = "none";
    for (var i = 0; i < chboxs.length; i++) {
        if (chboxs[i].checked) {
            vis = "block";
            break;
        }
    }
    document.getElementById(box).style.display = vis;

}