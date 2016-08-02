$(document).ready(function (){
  loadLinks();
  listenForReturn();
  filterByReadStatus();
  // filterByTitle();

  $('#links-div').on('blur', '.title-input', function() {
    $(this).attr('contentEditable', 'false');
    $(this).css("background-color", "yellow");
    updateTitle(this.dataset.linkId, this.innerText);
  });

  $('#links-div').on('blur', '.url-input', function() {
    $(this).attr('contentEditable', 'false');
    $(this).css("background-color", "pink");
    updateUrl(this.dataset.linkId, this.innerText);
  });

var $links = $('.link');

  function filterByTitle(){
    $('.title-search').keyup (function (){
      // console.log("this input here")
      // debugger;
      var keyword = this.value;
      console.log(keyword);
      $('.link').each(function (index, link) {
        $link = $(link);
        if ($link.data('link-title').toLowerCase().includes(keyword.toLowerCase())) {
          $link.show();
        } else {
          $link.hide();
        }
      });
    });
  }
});
