function loadFunction() {
    var element = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);
}

function clickCircle() {
    alert('The button was pressed');
}

document.addEventListener('DOMContentLoaded', loadFunction);