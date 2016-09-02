window.onload = function(){
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');

  //onload속성을 통한 등록
  button2.onclick = function() {
    alert('click button2');
  };

  //EventListener를 이용한 등록
  //addEventListener의 인자는 순서대로 이벤트 타입, 콜백함수, 이벤트흐름 세개를 전달함
  //세번째 인자값으로 이벤트 흐름을 결정한다 (useCapturing)
  //false: Bubbling | true: Capturing
  //Bubbling: 자식 객체부터 순서대로 이벤트 발생
  //Captring: 부모 객체부터 순서대로 이벤트 발생
  //생략할 경우 자동으로 false로 들어감
  button3.addEventListener("click", function(){
    alert('button3 click');
  },false);
}

function titleClick() {
  //innerHTML은 해당 태그안의 내용을 가져옴
  alert(document.getElementById('title').innerHTML);
}

//jQuery를 이용한 이벤트 등록
$(function(){
  //copyButton이라는 아이디를 가진 태그가 클릭되었을때 실행
  $('#copyButton').click(function() {
    //copyInput이라는 클래스를 가진 태그의 value에 input이라는 아이디를 가진 태그의 value를 대입
    $('.copyInput').val($('#input').val());
  });
});
