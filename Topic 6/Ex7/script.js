function clickFunction() {
    var element = document.getElementById('myinput');

    var div = document.getElementById('myresult');
    div.firstChild.nodeValue = element.value;
}

function loadFunction() {
    var element = document.getElementById('myinput');
    element.addEventListener('keyup', clickFunction);
}

document.addEventListener('DOMCintentLoaded', loadFunction);