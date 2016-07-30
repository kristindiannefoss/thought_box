$(document).ready(function (){
  loadLinks();

  $('#links-div').on('blur', '.title-input', function() {
    console.log('baaaa');
    $(this).attr('contentEditable', 'false');
  });

});
