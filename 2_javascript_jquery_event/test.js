function titleClick() {
  //innerHTML은 해당 태그안의 내용을 가져옴
  alert(document.getElementById('title').innerHTML);
}

$(function(){
  //copyButton이라는 아이디를 가진 태그가 클릭되었을때 실행
  $('#copyButton').click(function() {
    //copyInput이라는 클래스를 가진 태그의 value에 input이라는 아이디를 가진 태그의 value를 대입
    $('.copyInput').val($('#input').val());
  });
});
