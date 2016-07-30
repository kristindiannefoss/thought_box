function loadLinks(){
  $.ajax({
    type: 'GET',
    url: '/api/v1/links',
    dataType: 'JSON',
    success: function(response){
      response.map(function(link){
        $('#links-table').append(linkHTML(link));
      });
    }
  });
}

function linkHTML(link){
  if(link.read === true){
    return (
      "<tr data-link-id=" + link.id + " class='been-there'>" +
      "<td contenteditable='true' data-link-id=" + link.id +
      "class='title-input'>" + link.title + "</td>" +
      "<td contenteditable='true' class='url-input'>" + link.url + "</td>" +
      "<td>" + link.read + "<td>" +
      "<button class='btn btn-default fake-link' data-link-id='" + link.id +
      "' data-user-id='" + link.user_id + "'>Mark as Read</button></td>" +
      "</tr>"
    );
  } else {
    return (
      "<tr data-link-id=" + link.id + ">" +
      "<td contenteditable='true' data-link-id=" + link.id +
      "class='title-input'>" + link.title + "</td>" +
      "<td contenteditable='true' class='url-input'>" + link.url + "</td>" +
      "<td>" + link.read + "<td>" +
      "<button class='btn btn-default fake-link' data-link-id='" + link.id +
      "' data-user-id='" + link.user_id + "'>Mark as Read</button></td>" +
      "</tr>"
    );
  }
}
