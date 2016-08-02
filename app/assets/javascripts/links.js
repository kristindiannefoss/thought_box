$(document).ready(function (){
  loadLinks();
  listenForReturn();
  // $('select#link_read').val() =
  // var value = $('select#link_read').val();
  // $('select#link_read').val() == "All";
  // filterByReadStatus();

  $('#links-div').on('blur', '.title-input', function() {
    $(this).attr('contentEditable', 'false');
    $(this).css("background-color", "yellow");
    updateTitle(this.dataset.linkId, this.innerText);
  });

  $('#links-div').on('blur', '.url-input', function() {
    $(this).attr('contentEditable', 'false');
    $(this).css("background-color", "pink");
    updateUrl(this.dataset.linkId, this.innerText);
  });

  $('select#link_read').change(function() {
    var value = $('select#link_read').val();

    $(".link").fadeOut("fast");

    if (value == "All") {
      $(".link").slideDown("fast");
      } else if (value === "true") {
        $('.been-there').slideDown("fast");
      } else if (value === "false") {
        $('.not-yet').slideDown("fast");
      }
    });
});
