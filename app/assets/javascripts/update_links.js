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
    data: {link: {id: id, url: url},},
    success: function(link){

    },
    error: function(){
      alert("bad news");
    }
  });
}

function updateRead(e){
  $.ajax({
    method: 'PATCH',
    url: "api/v1/links/" + e.target.dataset.linkId,
    dataType: "json",
    data: {link: {id: e.target.dataset.linkId, read: true, user_id: e.target.dataset.userId}},
    success: function(link){
      $("tr[data-link-id='" + e.target.dataset.linkId + "']").removeClass("not-yet").addClass("been-there");
    }
  });
}
