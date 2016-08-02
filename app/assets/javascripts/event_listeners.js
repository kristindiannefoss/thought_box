$(document).on('click', '.read-button', function(e){
  updateRead(e);
});

$(document).on('click', '.delete-button', function(e){
  deleteLink(e);
});

$(document).on('click', '#alpha-fake-button', function(e){
  console.log('ouch');
  loadLinksByAlpha();
});

$(document).on('click', '.title-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

$(document).on('click', '.url-input', function(e){
  e.target.setAttribute("contenteditable", "true");
});

$(document).on('click', '#baby-fake-button', function(e){
  e.preventDefault();
  var titleValue = $("#form-title").val();
  var urlValue = $("#form-url").val();
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
