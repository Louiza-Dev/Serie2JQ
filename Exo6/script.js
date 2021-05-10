// $(document).ready(function() {
  // $("#red, #blue, #green").mouseenter(function () {
  //   var divColor = $(this).attr('id');
  //   $("#text").css("color", divColor);
  // });
  //
  // $("#red, #blue, #green").mouseout(function(){
  //  $("#text").css("color", "black");
  // });

  // $("#red").mouseenter(function(){
  //  $("#text").css("color", "red");
  // });
  // $("#blue").mouseenter(function(){
  //  $("#text").css("color", "blue");
  // });
  // $("#green").mouseenter(function(){
  //  $("#text").css("color", "green");
  // });
// });
// j'applique à la fois deux evenements à mes div qui ont les id(#red, #blue, #green)
// la methode on() me permet d'appliquer les fois deux evenements à la fois
  $("#red, #blue, #green").on("mouseenter mouseout", function(){
    // je recuper les valeurs des id des éléments cliquer
        var divColor = $(this).attr('id');
        // j'applique les valeurs récupéres a mon texte
        $("#text").toggleClass(divColor);
    });
//  la methode .toggleClass() ajoute une classe déja déclarer dans mon .css a mon text
