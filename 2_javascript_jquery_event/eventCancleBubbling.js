window.onload = function() {
  var a = document.getElementById('a')
  var b = document.getElementById('b')
  var c = document.getElementById('c')

  //원래 이벤트리스너의 익명함수의 첫번째 인자로 event객체를 전달하기로 약속되어있다.
  //event를 이용해 현재 발생한 이벤트에 대한 여러 정보들을 알 수 있다.
  //허나 event객체를 사용하지 않을거라면 생략해도 무관
  a.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('click a');
  }, false);

  b.addEventListener('click', function() {
    alert('click b');
  }, false);

  c.addEventListener('click', function() {
    alert('click c');
  }, false);
}
