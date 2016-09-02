function titleClick() {
  alert(document.getElementById('title').innerHTML);
}

$(function(){
  $('#copyButton').click(function() {
    $('.copyInput').val($('#input').val());
  });
});
