function deleteLink(e){
  // debugger;
  $.ajax({
    method: 'DELETE',
    url: "api/v1/links/" + e.target.dataset.linkId,
    dataType: "json",
    data: {link: {id: e.target.dataset.linkId, user_id: e.target.dataset.userId}},
    success: function(link){
      $("tr[data-link-id='" + e.target.dataset.linkId + "']").remove();
    }
  });
}
