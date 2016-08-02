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

function filterByTitle(){
  $('.title-search').keyup (function (){
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
