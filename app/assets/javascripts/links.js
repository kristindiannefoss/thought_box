$(document).ready(function (){
  loadLinks();
  listenForReturn();

  $('#links-div').on('blur', '.title-input', function() {
    $(this).attr('contentEditable', 'false');
    $(this).css("background-color", "yellow");
      $.ajax({
        method: 'PATCH',
        url: "api/v1/links/" + this.dataset.linkId,
        dataType: "json",
        data: {link: {id: this.dataset.linkId, title: this.innerText, user_id: this.dataset.userId}},
        success: function(){
        }
      });
  });

  $('#links-div').on('blur', '.url-input', function() {
    $(this).attr('contentEditable', 'false');
    $(this).css("background-color", "blue");
    debugger;
      $.ajax({
        method: 'PATCH',
        url: "api/v1/links/" + this.dataset.linkId,
        dataType: "json",
        data: {link: {id: this.dataset.linkId, url: this.innerText, user_id: this.dataset.userId}},
        success: function(){
        }
      });
  });
});
