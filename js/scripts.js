var name, pass, note;

(function($) {
  function formSubmit() {
    return false;
  };
  $("section form").submit(function(e) {
    e.preventDefault();
    name = $('section.main form input[name="name"]').val();
    pass = $('section.main form input[name="pass"]').val();
    console.log(name + ':' + pass);
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
        $('.note').slideDown('slow');
      }, 500);
    }
  });
})(jQuery);

function theNote() {
  if (["hi", "Hi", "HI"].indexOf(name) + 1 && pass == 'hi') {
    note = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi non explicabo iure id veniam, quasi saepe quis molestiae ut, aperiam eius fugit aspernatur doloremque nam doloribus cumque. Eveniet, enim, nam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi non explicabo iure id veniam, quasi saepe quis molestiae ut, aperiam eius fugit aspernatur doloremque nam doloribus cumque. Eveniet, enim, nam.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi non explicabo iure id veniam, quasi saepe quis molestiae ut, aperiam eius fugit aspernatur doloremque nam doloribus cumque. Eveniet, enim, nam.</p>"
  } else {
    name = '';
    pass = '';
  }
}
