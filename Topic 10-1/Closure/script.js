function myLoadEvent() {
    var element = document.getElementById('button');
    element.addEventListener('click', function() {
    alert('Button clicked');
    });
   }
   document.addEventListener('DOMContentLoaded', myLoadEvent);
