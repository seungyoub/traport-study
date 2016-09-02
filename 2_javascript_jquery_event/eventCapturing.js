window.onload = function() {
  var a = document.getElementById('a')
  var b = document.getElementById('b')
  var c = document.getElementById('c')

  a.addEventListener('click', function() {
    alert('click a');
  }, true);

  b.addEventListener('click', function() {
    alert('click b');
  }, true);

  c.addEventListener('click', function() {
    alert('click c');
  }, true);
}
