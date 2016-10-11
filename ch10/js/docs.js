(function () {
  var dropdowns = document.querySelectorAll('.dropdown__toggle');
  Array.prototype.forEach.call(dropdowns, function(dropdown) {
    dropdown.addEventListener('click', function (event) {
      event.target.parentNode.classList.toggle('is-open');
    });
  });
}());
