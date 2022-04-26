function updateH1() {
    var element = document.getElementById('H1');
    element.firstChild.nodeValue = 'New Heading coming to Disney Channel';
}

function updateP1() {
    var element = document.getElementById('P1');
    element.firstChild.nodeValue = 'New Content on February 30th 2029';
}

function myLoadFunction() {
    var element = document.getElementById('H1');
    element.addEventListener('click', updateH1)

    var element = document.getElementById('P1');
    element.addEventListener('click', updateP1);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);