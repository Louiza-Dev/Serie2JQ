// $(document).ready(function(){
    // $("#text").css("color", "orange");
    // $("#tex").css("font-family", "cursive");
    // $("#red").click(function(){
    //  $(".text, ul").css("color", "red");
    // });
    // $("#blue").click(function(){
    //  $(".text, ul").css("color", "blue");
    // });
    // $("#green").mousedown(function(){
    //  $(".text, ul").css("color", "green");
    // });
// });

$("#red, #blue, #green").click(function () {
  var id = $(this).attr('id');
  $(".text, ul").css("color", id);
});
// mouseup
$("p, ul").click(function(){
  $(".text, ul").css("color", "black");
 });
