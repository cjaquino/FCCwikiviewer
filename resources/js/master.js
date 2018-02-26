$(document).ready(function(){
  $(".search-icon").click(function() {
    $(".search-box").css("display","block")
    $(".search-icon").css("display","none")
  });

  $(".close-btn").click(function() {
    $(".search-box").css("display","none")
    $(".search-icon").css("display","block")
  });

  $(".rand-btn").click(function() {
    console.log("Random article button clicked");
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  });

  $(".search-txt").keypress(function(e) {
    if (e.which == 13) {
        // e.preventDefault();
        // $("form").submit();
        return false;
    }
  });
});




// $("input").keypress(function(event) {
//     if (event.which == 13) {
//         // $("form").submit();
//         alert("form submitted");
//         return false;
//     }
// });
