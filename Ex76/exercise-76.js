var elementi = document.querySelectorAll('.hero-list-item');

elementi.forEach(function(element) {
  element.addEventListener('mouseover', function hover() {
    element.style.color = 'red';
  });

   element.addEventListener('mouseleave', function leave() {
     element.style.color = 'black';

   });
});