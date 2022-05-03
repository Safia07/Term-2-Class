function scriptLoaded() {
    alert('Script Loaded');
}

function addition() {
    var num1 = 5;
    var num2 = 6;

    var num3 = num1 + num2;

    alert(num3);
}

function myLoadFunction() {
    var element = document.getElementById('PH');

    element.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('DOMContentLoaded', myLoadFunction);