$(document).on('click', '.read-button', function(e){
  updateLink(e);
});

$(document).on('click', '.title-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

$(document).on('click', '.url-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

function updateLink(e){
  $.ajax({
    method: 'PATCH',
    url: "api/v1/links/" + e.target.dataset.linkId,
    dataType: "json",
    data: {link: {id: e.target.dataset.linkId, read: true, user_id: e.target.dataset.userId}},
    success: function(link){
      $("tr[data-link-id='" + e.target.dataset.linkId + "']").addClass("been-there");
    }
  });
}

function listenForReturn(e){
  document.addEventListener("keydown", function(e) {
    if (e.which == '13'){
      e.preventDefault();
        $.ajax({
          method: 'PATCH',
          url: "api/v1/links/" + e.target.dataset.linkId,
          dataType: "json",
          data: {link: {id: e.target.dataset.linkId, title: e.target.innerText, user_id: e.target.dataset.userId}},
          success: function(){
            e.target.setAttribute("contenteditable", "false");          }
        });
    }
  });
}
