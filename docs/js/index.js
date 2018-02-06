$( document ).ready(function() {

  setInterval(function() {
    var x = Math.round(Math.random() * 255 );
    var y = Math.round(Math.random() * 255 );
    var z = Math.round(Math.random() * 255 );
    var box = "box-shadow: 0 -100px 980px rgb("+x+", "+y+", "+z+");";
    var transition = "transition: 2s ease-in;";
    var element = document.getElementById("mainNav"); 
    element.style = box, transition;
    }, 15000);

$(window).scroll(function() {
    stickyNav();

  });
  
  var stickyNavTop = $('.mainNav').offset().top;
  
    var stickyNav = function(){
      var scrollTop = $(window).scrollTop();
  
      if (scrollTop > stickyNavTop) { 

        $('.menu-trigger').addClass('menu-trigger2');
        $('.mainNav').addClass('mainNav2');
      } else { 
        $('.mainNav').removeClass('mainNav2'); 
        $('.menu-trigger').removeClass('menu-trigger2'); 
      }
    };
    stickyNav();

  // Open Map
  $('.location').click(function() {
    $('.closedLocation').toggleClass('openedLocation')
    $('.openedLocation').toggleClass('closedLocation')
    initMap();
   });
     // Close Map from X
     $('.closeMap').click(function() {
      $('.openedLocation').toggleClass('closedLocation')
    });

  });