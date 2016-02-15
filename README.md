# Hussain's Valentines Day Surprise!

Howdy, stranger! Want to woo your beloved? Well, you've come to the right place! You can use this neat little thing to sweep her off her feet! What's that? How do you get started? Ohh well that's simple! Let me show you!

## Prerequisites

First we need to have the right crap installed. Can't go starting a fire without any matches now can we? Here's what you need:

- a text editor (No, notepad.exe won't suffice.)
- a browser (Chrome is superior!)
- npm (Node.js package manager, comes with node.js)
- gulp (My build system of choice.)
- LiveReload browser extension

## Getting started

Got the stuff? Sweet, here's a $50. jkjk, now let's get this shizz running!

Since I'm using gulp as my build system of choice, we need to get that setup with the plugins to get gulp fired up.

`npm install`

That'll grab the gulp plugins we need to get our sass processed, javascript minified, and set up everything else for our sexy workflow.

Next, look through the gulpfile.js to see if everything looks okay and then run `gulp`.

Sweet, we have something! The dummy data uses `hi` as both the username and passcode. Run that and see the magic!

## Adding your own note

The dummy data is pretty sweet, but your bae ain't no dummy! Let's write her a personalized note!

Wait you thought I was gonna give you tips on writing love letters? My love letters gets all the women excited! We'll save that for a premium course, five easy payments of $69.99!

Okay so what we wanna do is open up the scripts.js file in the js folder. All the way at the bottom you'll find the note for the dummy. Let's copy the entire `theNote()` function and move that into another file called `notes.js`. Keep things clean, ya know? Also make sure you uncomment the script at the bottom linking to the note.js file in `index.html`.

Let's deconsturct this function...

``` javascript
function theNote() {
  // if ('hi'.indexOf(name) + 1 && pass == 'hi') {
  if (md5 === 'E8ETðnö*¶ÇÁÕ') { // hi:hi
    note = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ut vel voluptates fugit unde at ipsum incidunt nulla consectetur, magnam sint, autem numquam odit provident dolore quia est velit excepturi.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ut vel voluptates fugit unde at ipsum incidunt nulla consectetur, magnam sint, autem numquam odit provident dolore quia est velit excepturi.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ut vel voluptates fugit unde at ipsum incidunt nulla consectetur, magnam sint, autem numquam odit provident dolore quia est velit excepturi.</p>"
  } else {
    name = '';
    pass = '';
  }
}
```

So we have an if statement seeing if the variable md5 is equal to a random string. If the statement is true, it will make the variable `note` equal to a string with some HTML. If the statement is false, it will set `name` and `pass` to an empty string.

Simple enough! What we need to do now is replace the md5 string and the value for note. 

To find the md5 for which name and pass you want the user to enter, head over to the browser and open up the console by hitting F12. In the two input fields, just put in the desired name and pass. It will say to try again, but you're a developer! Look at the console dummy! It should have spit out a string with random characters, that's what we need! Copy that and paste that to the if statment expression.

Next, we need the html for the note. This is simple, just open up a blank html document and start hacking some paragraphs and stuff together. Make sure everything looks nice and tidy. Got it? Okay, let's make it messy! What I did was copy it to Notepad++ and use the find replace tool. Make sure extended is checked and replace all `\r\n` with nothing. That should pop all the code into one line. Copy that over and pop that into the javascript string for the note.

Save and gulp should refresh the browser for you. Let's try the new credentials and see what happens.

WOAH! IT WORKED! DUDE THAT'S LIKE MAGIC!! Heck yes it is! 

Enjoy!!
