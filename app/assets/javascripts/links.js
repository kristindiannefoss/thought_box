$(document).ready(function (){
  loadLinks();
  listenForReturn();
  filterByReadStatus();
  filterByTitle();

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

});
