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
      "<tr data-link-id=" + link.id +
      " data-link-title=" + link.title +
      " data-link-read=" + link.read +
      " class='been-there link'>" +

      "<td contenteditable='false' data-link-id=" + link.id +

      " class='title-input'>" + link.title + "</td>" +

      "<td contenteditable='false' data-link-id=" + link.id +

      " class='url-input'>" + link.url + "</td>" +

      "<td>" + link.read + "<td>" +

      "<button class='btn btn-default read-button' data-link-id='" + link.id +
      "' data-user-id='" + link.user_id + "'>Mark as Read</button>" + "</tr>"
    );
  } else {
    return (
      "<tr data-link-id=" + link.id +
      " data-link-title=" + link.title +
      " data-link-read=" + link.read +
      " class='not-yet link'>" +
      "<td contenteditable='false' data-link-id=" + link.id +

      " class='title-input'>" + link.title + "</td>" +

      "<td contenteditable='false' class='url-input' data-link-id=" + link.id + ">" + link.url + "</td>" +

      "<td>" + link.read + "<td>" +

      "<button class='btn btn-default read-button' data-link-id='" + link.id +
      "' data-user-id='" + link.user_id + "'>Mark as Read</button>" + "</tr>"
    );
  }
}
