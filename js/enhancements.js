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

});
