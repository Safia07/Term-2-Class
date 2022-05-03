// page 29

function loadFunction() {
    var element = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);
    element.style.opacity = '0.5';

}

function clickCircle() {
    alert('The button was pressed');
    var circle = document.getElementById('circle');
    circle.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', loadFunction);