$(document).ready(function(){
    // $("#text").css("color", "orange");
    // $("#tex").css("font-family", "cursive");
    $("#afficher").click(function(){
     $("#text").show();
    });
    $("#cacher").mousedown(function(){
     $("#text").hide();
    });
});
