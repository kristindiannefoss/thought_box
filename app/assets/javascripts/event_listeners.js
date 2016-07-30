$(document).on('click', '.read-button', function(e){
  updateLink(e);
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
    // console.log(e.which);
    if (e.which == '13') {
      e.preventDefault();
      // console.log(e.target.innerText);
      console.log("superb");
    }
  });
}

function listenForBlur(){
  // document.addEventListener("blur", function() {
  //   // console.log(e.which);
  //     console.log("shitaki");
  // });
    $("td").blur(function(){
      $(this).css("background-color", "yellow");
  });
}


    // $.ajax({
    //   method: 'PATCH',
    //   url: "api/v1/links/" + e.target.dataset.linkId,
    //   dataType: "json",
    //   data: {link: {id: e.target.dataset.linkId, title: e.target.val(), user_id: e.target.dataset.userId}},
    //   success: function(link){
    //     console.log(e.target.dataset.linkId);
    //     $("tr[data-link-id='" + e.target.dataset.linkId + "']").addClass("been-there");
    //   }
    // });

$(document).on('click', '.title-input', function(e){
  console.log(e.target.dataset.linkId);
  console.log(e.target.innerText);
  makeEditiable(e);
});

function makeEditiable(e){
  e.target.setAttribute("contenteditable", "true");
}
