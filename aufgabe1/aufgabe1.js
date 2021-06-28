var input = document.getElementById("input");
var number = 0;

function add() {
    number++;
    input.value;
    var span = document.getElementById("span");

    if (input.value != "") {
        span.innerHTML += "<div class='box2'>" + number + ".  " + input.value + "</div>";
        input.value = "";
    } else if (input.value == "") {
        alert("Bitte alle Felder ausfüllen");

    }
    return




}