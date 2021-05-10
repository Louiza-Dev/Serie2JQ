// $(document).ready(function() {
//   $("#text").remove();
//    $("#text2").empty();
//    $("#text2").detach();
//     $("#text3").replaceAll("#text1");
// });
// "1px solid green"
// "1px solid red"

$("input").focus(function(){
        $(this).css({
          "border": "3px solid green",
          "background-color": "lightgreen"
        });
    });
$("input").blur(function(){
        $(this).css({
          "border": "3px solid red",
          "background-color": "salmon"
        });
    });



// $(document).ready(function(){
//     $("#nom, #prenom").click(function(){
//      $(".text, ul").css("color", "red");
//     });
//     $("#blue").click(function(){
//      $(".text, ul").css("color", "blue");
//     });
//     $("#green").click(function(){
//      $(".text, ul").css("color", "green");
//     });
// });
