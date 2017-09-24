/* PLANNING A PROJECT
----------------------------------------------------------------------------------------
1. What do you want to make?
----------------------------------------------------------------------------------------

Um assistente médico que pergunte como o paciente está se sentindo. Caso o paciente diga
que está 'triste', ele conta uma piada aleatória. Quando o paciente diz que está 'feliz'
o assistente agradece e encerra a consulta.

----------------------------------------------------------------------------------------
2. What steps do you think are necessary?
----------------------------------------------------------------------------------------

a. uma lista de piadas
b. Estrutura condicional que depende da resposta do paciente

----------------------------------------------------------------------------------------
3. What sintax or codding patterns might you use?
----------------------------------------------------------------------------------------

a. Array para a lista de piadas
b. Uma função que randomiza as piadas independente do tamanho da array

----------------------------------------------------------------------------------------
Remember: There are many ways to create things with code! The most important part is to
write it and get it working. If you can't get something to work, try make it simpler.
After, look for ways you might improve your code!
----------------------------------------------------------------------------------------
*/

var jokes = [
    "Can a kangaroo jump higher than a house?\n Of course, a house doesn’t jump at all.",
    "Anton, do you think I’m a bad mother?\n My name is Paul.",
    "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away.",
    "What is the difference between a snowman and a snowwoman?\n Snowballs.",
    "I thought I’d tell you a good time travel joke – but you didn't like it."
];

function randomJokes(range) {
    return Math.round(Math.random() * range);
}

var status = prompt("Olá! Como você está se sentindo hoje?").toLowerCase();

while (status === 'triste') {

    alert("So... I'll tell you a joke:\n" + jokes[randomJokes(jokes.length - 1)]);
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
