$(document).ready(function () {

  $('a').on('click', function(e){
    alert("You clicked on:" + e.target.id);
  });
});
