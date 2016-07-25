$(document).ready(function () {

  $('div').on('click', function(e){
    console.log("ouch");
    var newValue = { link: {
        id: e.target.id,
        read: true
      }};
    $.ajax({
      method: 'PATCH',
      url: "links/" + e.target.id,
      data: newValue
    });

  });
});
