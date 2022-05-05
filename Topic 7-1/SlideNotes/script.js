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

// page 21 onwards:
// You can set CSS properties in JavaScript
// First you will need select the element by using document.getElementById
// Once you have a reference to the element in a variable you can change the CSS on it using:
// element.style.propertyName = 'propertyValue';

// e.g. element.style.width = '50px';
// e.g. element.style.height = '50px';
// e.g. element.style.backgroundColor = 'blue';




// Opacity = Transparency, takes a value from 0 - 1
// 1 = completely opaque
// 0 = completely transparent
// 0.5 = half transparent


// Converting strings to numbers:
// There are two functions for converting strings to
// numbers:
// – parseInt() - converts a string into the closest whole number
// e.g 123

// – parseFloat() - converts a string into the closest decimal
// number e.g. 1.23
//  var element = document.getElementById('circle');
//  var circleOpacity = parseFloat(element.style.opacity);
//  element.style.opacity = circleOpacity + 0.1;