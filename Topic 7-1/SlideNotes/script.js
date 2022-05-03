function scriptLoaded() {
    alert('Script Loaded');
}

function addition() {
    var num1 = 5;
    var num2 = 6;

    var num3 = num1 + num2;

    alert(num3);
}

function myClickFunction() {
    var element = document.getElementById('PH');
    element.firstChild.nodeValue = 'Boo!'
}

function myLoadFunction() {
    var element = document.getElementById('PH');
    element.addEventListener('click', myClickFunction);
}
// The page has 'Page Heading' and 'Page Content' when you load the page and then if you click on the former then it'll change to 'Boo!'

document.addEventListener('DOMContentLoaded', myLoadFunction);