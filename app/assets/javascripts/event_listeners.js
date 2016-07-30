$(document).on('click', '.read-button', function(e){
  updateRead(e);
});

$(document).on('click', '.title-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

$(document).on('click', '.url-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

function updateTitle(id, title){
  $.ajax({
    method: 'PATCH',
    url: "api/v1/links/" + id,
    dataType: "json",
    data: {link: {id: id, title: title}}
  });
}

function updateUrl(id, url){
  $.ajax({
    method: 'PATCH',
    url: "api/v1/links/" + id,
    dataType: "json",
    data: {link: {id: id, url: url}}
  });
}

function updateRead(e){
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
      console.log(e.target.className);
      if (e.target.className == 'title-input'){
        updateTitle(e.target.dataset.linkId, e.target.innerText);
      } else if(e.target.className == 'url-input'){
        updateUrl(e.target.dataset.linkId, e.target.innerText);
      }
      e.target.setAttribute("contenteditable", "false");
    }
  });
}
