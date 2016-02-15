var name, pass, md5, note;

(function($) {
  $("section form").submit(function(e) {
    e.preventDefault();
    name = $('section.main form input[name="name"]').val().toLowerCase();
    pass = $('section.main form input[name="pass"]').val().toLowerCase();
    md5 = $.md5(name, pass, true);
    console.log(name + ':' + pass);
    console.log(md5);
    theNote();
    $('.note .head span').text(name);
    $('.note .the-note').html(note);
    if (name == '' || pass == '') {
      $('.main .error').slideToggle(500);
      setTimeout(function() {
        $('.main .error').slideToggle(500);
      }, 4000);
    } else {
      $('.main').slideUp(500);
      setTimeout(function() {
        $('.wait').slideDown('slow');
      }, 750);
      setTimeout(function() {
        $('.wait').slideUp('slow');
      }, 2500);
      setTimeout(function() {
        $('.note').slideDown('slow');
      }, 3500);
    }
  });
})(jQuery);
