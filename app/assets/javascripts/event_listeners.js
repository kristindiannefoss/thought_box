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

// function listenForChangeAndSave(e){
//   // document.addEventListener("keydown", function(e) {
//   //   // console.log(e.which);
//   //   if (e.which == '13'){
//   //     e.preventDefault();
//   //     console.log(e.target.innerText);
//   //   }
//   // });
//   document.addEventListener("blur", function(e) {
//     debugger;
//     // console.log(e.which);
//     // if (e.which == '13'){
//     //   e.preventDefault();
//       console.log(e.target.innerText + "blur");
//       // console.log(e.target.innerText);
//     // }
//
//   });
// }

function listenForBlur(){
  $('td').blur(function(){
    // alert("This input field has lost its focus.");
    console.log("blur");
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
  // console.log(e.target.innerText);
  // debugger;
  makeEditiable(e);
  // listenForChangeAndSave();
});

function makeEditiable(e){
  e.target.setAttribute("contenteditable", "true");
}
