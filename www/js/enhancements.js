$(document).ready(function(){

  //console.log("Hello Dathan, Javascript is working");

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

  /*MENU TOGGLE

  $(function toggleMenu(){
    document.getElementById("menu").classList.toggle("show");
  });

  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')){
      var dropdowns = document.getElementsByClassName("mobile-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

  //MODAL BOX FOR SPEED YOU NEED SERVICE-BOX

  // Get the modal for Speed
  var modal = document.getElementById('speedModal');

  // Get the button that opens the modal
  var btn = document.getElementById("speedBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // MODAL BOX FOR FEATURED MODAL SERVICE-BOX

  var modal = document.getElementById('featureModal');

  // Get the button that opens the modal
  var btn = document.getElementById("featureBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // MODAL BOX FOR PRICE YOU'LL LOVE SERVICE-BOX

  var modal = document.getElementById('priceModal');

  // Get the button that opens the modal
  var btn = document.getElementById("priceBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

});
