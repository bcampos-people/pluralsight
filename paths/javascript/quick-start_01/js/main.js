/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/* Welcome Player */
var playerName = prompt("Warrior! Tell us your name!");
alert("Welcome to our army, " + playerName + "! Tonight we dine in HELL!");


/* Choose a weapon and congrats if they pick an axe or knife */
var playerWeapon = prompt("Now it's time to separate the men from the boys, " + playerWeapon + ". Choose your weapon: ").toLowerCase();
console.log(playerWeapon);

if (playerWeapon === "axe" || playerWeapon === "knife") {
  alert("Good choice, Pvt. " + playerName + "!");
} else if (playerWeapon === "gun") {
  alert("Brave! You chose wisely!");
} else {
  alert("So... " + playerWeapon + ", heh?! You chose poorly, Pvt., " + playerName);
}


/* Random Attack Results */
if (window.confirm("Do you wanna attack?!")) {
  var attackResult = Math.round(Math.random() * 10);
  console.log(attackResult);
  
  if (attackResult >= 5) {
    if (playerWeapon === "rubber chicken") {
      alert("You use a " + playerWeapon + " to defeat our enemy! You're a crazy god of war!");
    } else {
      alert("You defeat our enemy Pvt., " + playerName + "! Congratulations!");
    }
  } else if (attackResult <= 4) {
    alert("You miss... oh the humanity!");
  }
  
} else {
  alert("Ok! We'll wait for your comand, sir.");
}

