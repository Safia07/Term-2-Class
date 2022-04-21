// eercise 1

// function loadFunction() {
//     var circle = document.getElementById('circle');
//     circle.addEventListener('click', clickCircle);        
// }

// function clickCircle() {
//     alert('Button was pressed');
// }

// document.addEventListener('DOMContentLoaded', loadFunction);







// exercise 2 
//     function loadFunction() {
//         var circle = document.getElementById('circle');
//         circle.addEventListener('click', clickCircle);        
//    }
   
//    function clickCircle() {
//         alert('Button was pressed');
//         var circle = document.getElementById('circle');
//         circle.style.backgroundColor = 'blue';
//    }
   
// document.addEventListener('DOMContentLoaded', loadFunction);








// exercise 3

// function loadFunction() {
//     var circle = document.getElementById('circle');
//     circle.addEventListener('click', clickCircle);        
// }

// function clickCircle() {
//     var circle = document.getElementById('circle');
//     circle.style.opacity = 0.5;
// }

// document.addEventListener('DOMContentLoaded', loadFunction);










// exercise 4

// function loadFunction() {
//     var circle = document.getElementById('circle');
//     circle.addEventListener('click', clickCircle);    
//     circle.style.opacity = 0.5;    
// }

// function clickCircle() {
//     var circle = document.getElementById('circle');
//     circle.style.opacity = 1;
// }

// document.addEventListener('DOMContentLoaded', loadFunction);











// exercise 5

// function loadFunction() {
//     var circle = document.getElementById('circle');
//     circle.addEventListener('click', clickCircle);    
//     circle.style.opacity = 0.5;    
// }

// function clickCircle() {
//     var element = document.getElementById('circle');
//     var circleOpacity = parseFloat(element.style.opacity);
//     element.style.opacity = circleOpacity - 0.1;
// }

// document.addEventListener('DOMContentLoaded', loadFunction);










// exercise 6

// function loadFunction() {
//     var circle = document.getElementById('circle');
//     circle.addEventListener('click', clickCircle);    
//     circle.style.opacity = 1;    
// }

// function clickCircle() {
//     setInterval(opacityChanged, 10);
// }

// function opacityChanged() {
//     var element = document.getElementById('circle');
//     var opacity = parseFloat(element.style.opacity);
//     element.style.opacity = circleOpacity - 0.1;
// }

    

// document.addEventListener('DOMContentLoaded', loadFunction);



// ex 7

function loadFunction() {
    var circle = document.getElementById('circle');
    circle.addEventListener('click', clickCircle);    
    circle.style.opacity = 1;    
}

function clickCircle() {
    var circle = document.getElementById('circle');
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
}    

document.addEventListener('keydown', loadFunction);