$("document").ready(function() {


  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', '20220517 Standing by the Door.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  //audioElement.load()
  $.get();
  audioElement.addEventListener("load", function() {
  audioElement.play();
  }, true);

  $( ".play" ).click(function() {
    audioElement.play();
    $( ".image" ).addClass( "rotation");
    $( ".dare" ).addClass( "nuke");
   
  });



  $( ".pause" ).click(function() {
    audioElement.pause();
      $( ".image" ).removeClass( "rotation");

    });














});

   
 


