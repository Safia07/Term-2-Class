function scriptLoaded() {
    var element = document.getElementById('H1');
    element.firstChild.nodeValue = 'New Heading';

    var element = document.getElementById('P1');
    element.firstChild.nodeValue = 'New Content on February 30th 2029';
}

document.addEventListener('click', scriptLoaded);