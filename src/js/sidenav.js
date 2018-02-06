$( document ).ready(function() {


    $('.menu-trigger').click(function() {
        $('.navClosed').addClass('navOpened');
        $('.navClosed').removeClass('navClosed');

        $('.navRightClosed').addClass('navRightOpened');
        $('.navRightClosed').removeClass('navRightClosed');

        $('.navRightOpened').click(function() {
            $('.navRightOpened').addClass('navRightClosed');
            $('.navRightOpened').removeClass('navRightOpened');
    
            $('.navOpened').addClass('navClosed');
            $('.navOpened').removeClass('navOpened');
        });
    });


});