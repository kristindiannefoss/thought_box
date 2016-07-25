$(document).ready(function () {

  // $.get('/api/v1/links').then(function(jsonData){
  //       $(jsonData).each(function(link){
  //                 debugger;
  //               var id = link.id;
  //               var title = link.title;
  //               var url = link.url;
  //               var read = link.read;
  //
  //               $("body").append("<p>" + title + "<p>");
  //   });
  // });
  function pleaseOmg(){
    $.ajax({
      type: 'GET',
      url: '/api/v1/links',
      dataType: 'json',
      data: jsonData,
      success: collectLinks(data)
    });

    function collectLinks(jsonData){
      jsonData.each(function(link){
                var id = link.id;
                var title = link.title;
                var url = link.url;
                var read = link.read;

    $("body").append("<p>" + title + "<p>");
  }

    debugger;
      // jsonData.responseText.each(function(link){
      //           var id = link.id;
      //           var title = link.title;
      //           var url = link.url;
      //           var read = link.read;
      //
      //           $("body").append("<p>" + title + "<p>");
      // });
  }

  //
  // function getLink(){
  //     $.ajax({
  //       type: 'GET',
  //       url: '/api/v1/links',
  //       success: function(jsonData) {
  //         Link.collectLinks(jsonData);
  //       },
  //       error: function() {
  //         alert('Error loading');
  //       }
  //     });
  //       var Link = {
  //         collectLink: function(jsonData) {
  //             $(jsonData).each(function(link){
  //               debugger;
  //             var id = link.id;
  //             var title = link.title;
  //             var url = link.url;
  //             var read = link.read;
  //
  //             $("body").append("<p>" + title + "<p>");
  //             // $("#link-table").append("<tr><td>" + title + "</td></tr>");
  //
  //             // $("table#link-table").append("<tr id=" + id + " data-id=" + id +
  //             // "><td contenteditable='true' id=" + id + " class='title-input'>" +
  //             // title + "</td><td contenteditable='true' class='url-input'>" +
  //             // url + "</td><td>" +
  //             // read +
  //             // "<td><button class='btn btn-default read-button' id='read-button'>Mark as Read</button></td></tr>");
  //           });
  //         }
  //       };
  //
  // }


  $('.fake-link').on('click', function(e){
    console.log("ouch");
    $.ajax({
      method: 'PATCH',
      url: "api/v1/links/" + e.target.id,
      dataType: "json",
      data: {read: true}
    });
  });


});
