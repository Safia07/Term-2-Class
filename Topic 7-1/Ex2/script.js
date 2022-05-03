// page 26

function loadFunction() {
    var element = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);
}

function clickCircle() {
    alert('The button was pressed');
    var circle = document.getElementById('circle');
    circle.style.backgroundColor = 'blue';
}

document.addEventListener('DOMContentLoaded', loadFunction);