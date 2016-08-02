function createNewLink(title, url){
  var id = $("#user_id").text();
// $.get("/users/"+id+".json", function(data) { }, "json");
  $.ajax({
    method: 'POST',
    url: "api/v1/links/",
    dataType: "json",
    data: {link: {title: title, url: url}, user_id: id},
    success: function(response){
        $('#links-table').append(linkHTML(response));
        $('#form-title').val("");
        $('#form-url').val("");
      }
  });
}
