/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var status = prompt("Olá! Como você está se sentindo hoje?").toLowerCase();

while (status === 'triste') {
  alert('Rir é o melhor remédio! Vou te contar uma piada...');
  var resposta = confirm('E aí?! Gostou da piada?');
  
  if(resposta) {
    status = 'alegre';
    console.log(status);
    alert('Isto fica feliz em ser útil!');
  } else {
    console.log(status);
    alert('Talvez você precise de um psiquiatra. Fale com a Dra. Lucy van Pelt.');
  }
}

alert('Ótimo! Isso significa que você não está se sentindo triste e, sim, ' + status + '. Meus serviços não são mais necessários!');
console.log(status)
  
// while(status === 'triste') {
//   console.log(status);
// }