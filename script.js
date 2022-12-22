var givenColors = ["green","red","yellow","blue"];
var start=1;
var num=0;
var started=false;
var pattern=[];
var userPattern=[];
$("#start").click(function() {
  if(start==1){
    if(!started){
      $("#title").text("Level" +num);
    }
     start++;
     nextSequence();
     started=true;
  }
  else{
      location.reload();
  };
  }
);




$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userPattern.push(userChosenColour);

  sound(userChosenColour);
  animateBtn(userChosenColour);

  checkAnswer(userPattern.length-1);
});


function checkAnswer(currentLevel) {

    if (pattern[currentLevel] === userPattern[currentLevel]) {

      console.log("success");

      if (userPattern.length === pattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    }
     else {

      console.log("wrong");
      var wr="wrong";
      sound(wr);

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
      $("#title").text("Game Over!!");
      
    }

}
function nextSequence(){
  userPattern=[];
  num++;
  $("#title").text("Level:" + num);
  $("#score").text("score:"+num);

  var randomNumber=Math.floor(Math.random() * 4);
  var guess=givenColors[randomNumber];
  pattern.push(guess);
  $("#"+guess).fadeIn(100).fadeOut(100).fadeIn(100);
  sound(guess);
}
function sound(gues){
  var audioElement=new Audio(gues+ ".mp3");
  audioElement.play();
}

function animateBtn(gues){
  $("#"+gues).addClass("pressed");
  setTimeout(function (){
    $("#"+gues).removeClass("pressed");
  },100)
}


function startOver(){
  num=0;
  pattern=[];
  started=false;
}
