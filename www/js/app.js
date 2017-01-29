$(document).ready(function(){

  //TEST console.log("Hello Dathan, Javascript is working");

  //STICKY MENU

  $(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() >= 290) {
        $('header').addClass('stickytop');
      }
      else {
        $('header').removeClass('stickytop');
      }
    });
  });

  function mobileDrop() {
    var drop = document.getElementById('myDIV');
    if (drop.style.display === 'none') {
      drop.style.display = 'block';
    } else {
      drop.style.display = 'none';
    }
  }

  //MODAL BOX FOR SPEED YOU NEED SERVICE-BOX

  // Get the modal for Speed
  var speedmodal = document.getElementById('speedModal');

  // Get the button that opens the modal
  var speedbtn = document.getElementById("speedBtn");

  // Get the <span> element that closes the modal
  var exit = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  speedbtn.onclick = function() {
    speedmodal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  exit.onclick = function() {
    speedmodal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == speedmodal) {
        speedmodal.style.display = "none";
    }
  }

  //MODAL BOX FOR FEATURES YOU WANT SERVICE-BOX

  var featuremodal = document.getElementById('featureModal');
  var featurebtn = document.getElementById("featureBtn");
  var exitspan = document.getElementsByClassName("close")[0];

  featurebtn.onclick = function() {
    featuremodal.style.display = "block";
  }

  exitspan.onclick = function() {
    featuremodal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == featuremodal) {
        featuremodal.style.display = "none";
    }
  }

  // MODAL BOX FOR PRICE SERVICE SECTION

  var pricemodal = document.getElementById('priceModal');
  var pricebtn = document.getElementById('priceBtn');
  var exitbtn = document.getElementsByClassName('close')[0];

  pricebtn.onclick = function() {
    pricemodal.style.display = "block";
  }

  exitbtn.onclick = function() {
    pricemodal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == pricemodal) {
      pricemodal.style.display = "none";
    }
  }

});
