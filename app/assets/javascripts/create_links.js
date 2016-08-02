function createNewLink(title, url){
  $.ajax({
    method: 'POST',
    url: "api/v1/links/",
    dataType: "json",
    data: {link: {title: title, url: url}},
    success: function(response){
        $('#links-table').append(linkHTML(response));
      }
  });
}
