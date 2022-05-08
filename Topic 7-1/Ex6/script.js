// page 37

function loadFunction() {
    var element = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);
    element.style.opacity = '1';

}

function clickCircle() {
    console.log('myInterval called');
    // var element = document.getElementById('circle');
    // var circleOpacity = parseFloat(element.style.opacity);
    // element.style.opacity = circleOpacity - 0.1;
}

function myInterval() {
    // console.log('clickCircle called');
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
}

setInterval(myInterval, 1000);

document.addEventListener('DOMContentLoaded', loadFunction);