$(document).ready(function (){
  loadLinks();
});

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

$(document).on('click', '.fake-link', function(e){
  // debugger;
  console.log(e.target.dataset.linkId);
    $.ajax({
      method: 'PATCH',
      url: "api/v1/links/" + e.target.dataset.linkId,
      dataType: "json",
      data: {link: {id: e.target.dataset.linkId, read: true, user_id: e.target.dataset.userId}},
      success: function(link){
        console.log(e.target.dataset.linkId);
      }
    });
});
