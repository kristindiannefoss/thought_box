$(document).on('click', '.fake-link', function(e){
  console.log(e.target.dataset.linkId);
    $.ajax({
      method: 'PATCH',
      url: "api/v1/links/" + e.target.dataset.linkId,
      dataType: "json",
      data: {link: {id: e.target.dataset.linkId, read: true, user_id: e.target.dataset.userId}},
      success: function(link){
        console.log(e.target.dataset.linkId);
        $("tr[data-link-id='" + e.target.dataset.linkId + "']").addClass("been-there");
      }
    });
});
