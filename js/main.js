$(function(){

    // make the navbar fixed when scrolling
    $(window).on('scroll', function(){

       if($(this).scrollTop() > 300){

            $('.navbar').addClass('fixed-top').css('backgroundColor', '#222').fadeIn();
            
       }else{
        $('.navbar').removeClass('fixed-top').css('backgroundColor', '#175dfed9');

       }

    });
   
    // adjust the header background img height
    let mainNavH = $('.navbar').innerHeight(),

        windowH = $(window).height();
    
    $('.header').height(windowH - mainNavH);

    // add active class on major item when clicking and remove it from other majors
    $('.dep-area .majors .major').on('click', function(){

        $('.majors .mj').children().removeClass('active');

        $(this).addClass('active');

        // show the selected department div
        $($(this).data('major')).addClass('show').siblings().removeClass('show');
    });

});