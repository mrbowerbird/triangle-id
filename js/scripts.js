$(document).ready(function(){
  $('form#triangle').submit(function(event){
    var tri1 = parseInt($("input#sideA").val());
    var tri2 = parseInt($("input#sideB").val());
    var tri3 = parseInt($("input#sideC").val());

    if ((tri1+tri2) <= tri3 || (tri2+tri3) <= tri1 || (tri1+tri3) <= tri2) {
      $("#notTriangle").show();
    } else if(tri1 === tri2 && tri1 === tri3) {
      $("#equilateral").show();
    } else if (tri1 === tri2 || tri2 === tri3 || tri1 === tri3) {
    $("#isosceles").show();
    } else {
      $("#scalene").show();
    }

    event.preventDefault();
  });



});
