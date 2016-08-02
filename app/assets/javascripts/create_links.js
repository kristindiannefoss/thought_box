function createNewLink(title, url){
  var id = $('#user_id').text();
  $('.no-good').fadeOut('fast');
  $('#form-url').val('').removeClass('invalid');
  $.ajax({
    method: 'POST',
    url: 'api/v1/links/',
    dataType: 'json',
    data: {link: {title: title, url: url}, user_id: id},
    success: function(response){
      $('#links-table').append(linkHTML(response));
      $('#form-title').val('');
      $('#form-url').val('');
    },
    error: function() {
      $('#form-title').val('');
      $('#form-url').val('').addClass('invalid');
      $('.no-good').slideDown('fast');
      $('.no-good').text('Invalid URL, please use a valid web address');
    }
  });
}
