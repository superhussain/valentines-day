function theNote(){"E8ETðnö*¶ÇÁÕ"===md5?note="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ut vel voluptates fugit unde at ipsum incidunt nulla consectetur, magnam sint, autem numquam odit provident dolore quia est velit excepturi.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ut vel voluptates fugit unde at ipsum incidunt nulla consectetur, magnam sint, autem numquam odit provident dolore quia est velit excepturi.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ut vel voluptates fugit unde at ipsum incidunt nulla consectetur, magnam sint, autem numquam odit provident dolore quia est velit excepturi.</p>":(name="",pass="")}var name,pass,md5,note;!function(e){e("section form").submit(function(t){t.preventDefault(),name=e('section.main form input[name="name"]').val().toLowerCase(),pass=e('section.main form input[name="pass"]').val().toLowerCase(),md5=e.md5(name,pass,!0),console.log(name+":"+pass),console.log(md5),theNote(),"hi"==name?e(".note .head span").text("stranger"):e(".note .head span").text(name),e(".note .the-note").html(note),""==name||""==pass?(e(".main .error").slideToggle(500),setTimeout(function(){e(".main .error").slideToggle(500)},4e3)):(e(".main").slideUp(500),setTimeout(function(){e(".wait").slideDown("slow")},750),setTimeout(function(){e(".wait").slideUp("slow")},2500),setTimeout(function(){e(".note").slideDown("slow")},3500))})}(jQuery);