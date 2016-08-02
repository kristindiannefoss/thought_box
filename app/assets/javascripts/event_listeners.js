$(document).on('click', '.read-button', function(e){
  updateRead(e);
});

$(document).on('click', '.title-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

$(document).on('click', '.url-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

$(document).on('click', '#baby-fake-button', function(e){
  var titleValue = $("#fake-form-title").val();
  var urlValue = $("#fake-form-url").val();
  console.log("that tickles");
  createNewLink(titleValue, urlValue);
});

function createNewLink(title, url){
  $.ajax({
    method: 'POST',
    url: "api/v1/links/",
    dataType: "json",
    data: {link: {title: title, url: url}},
    success: function(response){
        $('#links-table').append(linkHTML(response));
      }
  });
}

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

function filterByReadStatus(){
  $('select#link_read').change(function() {
    var value = $('select#link_read').val();
    $(".link").fadeOut("fast");
    if (value == "All") {
      $(".link").slideDown("fast");
    } else if (value === "true") {
      $('.been-there').slideDown("fast");
    } else if (value === "false") {
      $('.not-yet').slideDown("fast");
    }
  });
}

// function filterByTitle(){
//   $('#link_title').on('keyup', function (){
//     debugger;
//     var keyword = this.value;
//     // console.log(keyword);
//     $('.link').each(function (index, link) {
//       $link = $(link);
//       if ($link.data('link-title').toLowerCase().includes(keyword.toLowerCase())) {
//         $need.show();
//       } else {
//         $need.hide();
//       }
//     });
//   });
// }














// g
