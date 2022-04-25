function scriptLoaded() {
    alert('Script loaded');
}

function myLoadFunction() {
    // This function can have any name

    var element = document.getElementById('H1Tag');
    element.firstChild.nodeValue = 'New Heading';
    // The two lines of code above will run immediately if they weren't in the function. 
}

document.addEventListener('DOMContentLoaded', scriptLoaded);
document.addEventListener('DOMContentLoaded', myLoadFunction);
// addEventListener = It runs a function when a specific event occurs. In the brackets, whatever is written in these speech marks '' tells the programme when it happens and whatever is written after the comma is the name of the function that will run. 
// DOMContentLoaded = the elements (tags in the HTML tag e.g. p tag) exists when the content of the page has loaded. 
// myLoadFunction = name of the function


// element.addEventListener = for when a specific element is clicked on