// page 28

function loadFunction() {
    var element = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);
    element.style.opacity = '0.5';

}

function clickCircle() {
    alert('The button was pressed');
    var circle = document.getElementById('circle');
    circle.style.backgroundColor = 'blue';
}

document.addEventListener('DOMContentLoaded', loadFunction);