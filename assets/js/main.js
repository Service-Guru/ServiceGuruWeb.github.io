$("#join-waitlist").click(function() {
  $('html, body').animate({
      scrollTop: $("#contact-form").offset().top
  }, 700);
});
  
$("#to-top").click(function() {
  $('html, body').animate({
      scrollTop: $("body").offset().top
  }, 700);
});

if($(window.location.hash).length > 0){
        $('html, body').animate({ scrollTop: $(window.location.hash).offset().top}, 1000);
}