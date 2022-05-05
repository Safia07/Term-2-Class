// page 33

function loadFunction() {
    var element = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);
    element.style.opacity = '0.5';

}

function clickCircle() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity + 0.1;
}

document.addEventListener('DOMContentLoaded', loadFunction);