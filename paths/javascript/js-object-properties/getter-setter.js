/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

'use strict';

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.message = function () {
    if (this.name === 'Bruno') {
      alert('COÉ RAPAZIADA!');
    } else {
      alert('Quem ficou cuidando do lojinha?');
    }
  }
}


// Getters and Setters

var dog = {
  name: {first: 'Barney', last: 'Beagle' },
  color: 'Black'
}

Object.defineProperty(dog, 'fullName', {
  
  // Getter
  get: function() {
    return this.name.first + ' ' + this.name.last 
  },
  
  // Setter
  set: function(value) {
    var nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  }
})

console.log(dog.fullName);


