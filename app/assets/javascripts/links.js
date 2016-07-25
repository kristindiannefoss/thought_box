$(document).ready(function () {

  getLink();
  
  $('div').on('click', function(e){
    console.log("ouch");
    $.ajax({
      method: 'PATCH',
      url: "api/v1/links/" + e.target.id + ".json",
      dataType: "json",
      data: {read: true}
    });
  });


});
