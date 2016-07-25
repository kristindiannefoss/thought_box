function getLink(){
    $.ajax({
      type: 'GET',
      url: '/api/v1/links',

      success: function(jsonData) {
        Link.collectLinks(jsonData);
      },
      error: function() {
        alert('Error loading');
      }
    });
      var Link = {
        collectLink: function(jsonData) {
            $(jsonData).each(function(number, link){
            var id = link.id;
            var title = link.title;
            var url = link.url;
            var read = link.read;

            $("#link-table").prepend("<tr id=" + id + " data-id=" + id +
            "><td contenteditable='true' id=" + id + " class='title-input'>" +
            title + "</td><td contenteditable='true' class='url-input'>" +
            url + "</td><td>" +
            read +
            "<td><button class='btn btn-default read-button' id='read-button'>Mark as Read</button></td></tr>");
          });
        }
      };
}
