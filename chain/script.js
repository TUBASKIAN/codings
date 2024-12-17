// ON SCROLL STICKY HEADER


$(window).scroll(function(){
    var sticky = $('#header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 250) sticky.addClass('sticky');
    else sticky.removeClass('sticky');
});


$(window).scroll(function(){
    var home = $('.home'),
        services = $('.services'),
        about = $('.about'),
        pricing = $('.pricing'),
        newsletter = $('.newsletter'),
        scroll = $(window).scrollTop();
  
        var navLinks = [home, services, about, pricing, newsletter];
  
        scroll >= 0 && scroll <= 380 ? navLinks[0].addClass('border-bottom') : navLinks[0].removeClass('border-bottom');
  
        scroll >= 700 && scroll <= 1400 ? navLinks[1].addClass('border-bottom') : navLinks[1].removeClass('border-bottom');
  
        scroll >= 1500 && scroll <= 2200 ? navLinks[2].addClass('border-bottom') : navLinks[2].removeClass('border-bottom');
  
        scroll >= 3200 && scroll <= 4250 ? navLinks[3].addClass('border-bottom') : navLinks[3].removeClass('border-bottom');
  
        scroll >= 4320 ? navLinks[4].addClass('border-bottom') : navLinks[4].removeClass('border-bottom');
  
  });