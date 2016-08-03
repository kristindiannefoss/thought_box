$(document).ready(function (){
  loadLinks();
  listenForReturn();
  filterByReadStatus();
  filterByTitle();

  $('#links-div').on('blur', '.title-input', function() {
    $(this).attr('contentEditable', 'false');
    updateTitle(this.dataset.linkId, this.innerText);
  });

  $('#links-div').on('blur', '.url-input', function() {
    $(this).attr('contentEditable', 'false');
    updateUrl(this.dataset.linkId, this.innerText);
  });
});
