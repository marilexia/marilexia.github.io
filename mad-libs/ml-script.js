var spanText = $('.result');
var randomizer = $('.button1');
var reset = $('.button2');


reset.on('click', clear);

function clear(){
  var nounEntered = $('.noun-input').val('');
  var verbEntered = $('.verb-input').val('');
  var adjEntered = $('.adj-input').val('');

  spanText.html('');
}

// madlib generator

var randomAdj = ["The sorry ", "A failing ", "On a fine summer day, the ", "While hiking, your " ];

var clause1 = [" went upstairs and ", " drove down the freeway and ", " turned on the computer and ", " turned the televsion and ", " made sandwiches but "];

var clause2 = [" the trumpet with the ", " in front of the Zoom call for ", " the insta live with ", " in Animal Crossing from ", " into the water "];

var clause3 = [" dog and slept!", "bystander and jumped!", " kid and disappeared...", " while wondering about the universe."];

randomizer.on('click', madlibGenerator);

function madlibGenerator(){

  var nounEntered = $('.noun-input').val();
  var verbEntered = $('.verb-input').val();
  var adjEntered = $('.adj-input').val();

  function pickClause1(){
      var random = Math.random() * clause1.length;
      var rounded = Math.floor(random);
      var result = clause1[rounded];

      return result;
    }
   function pickClause2(){
      var random = Math.random() * clause2.length;
      var rounded = Math.floor(random);
      var result = clause2[rounded];

      return result;
    }
   function pickClause3(){
      var random = Math.random() * clause3.length;
      var rounded = Math.floor(random);
      var result = clause3[rounded];

      return result;
    }
  function pickRandomAdj(){
      var random = Math.random() * randomAdj.length;
      var rounded = Math.floor(random);
      var result = randomAdj[rounded];

      return result;
    }


var finalClause1 = pickClause1();
var finalNoun = nounEntered;

var finalClause2 = pickClause2();
var finalVerb = verbEntered;

var finalClause3 = pickClause3();
var finalAdj = adjEntered;

var finalRandomAdj = pickRandomAdj();


spanText.html(finalRandomAdj + finalNoun + ' ' +  finalClause1 +  finalVerb + ' ' + finalClause2 + finalAdj + ' ' + finalClause3);

// alert(finalName + ', \n' + finalCompliment);
// $(".result").html(finalName + ', ' + finalCompliment);

}
