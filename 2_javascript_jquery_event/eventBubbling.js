window.onload = function() {
  var a = document.getElementById('a')
  var b = document.getElementById('b')
  var c = document.getElementById('c')

  a.addEventListener('click', function() {
    alert('click a');
  }, false);

  b.addEventListener('click', function() {
    alert('click b');
  }, false);

  c.addEventListener('click', function() {
    alert('click c');
  }, false);
}
