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















// g
