// This example has been updated to use Modernizr - please note the use of localstorage in lowercase
let txtUsername = document.getElementById('username'); // Get form elements
let txtAnswer = document.getElementById('answer');

txtUsername.value = localStorage.getItem('username'); // Elements populated, waarde gaan ophalen
txtAnswer.value = localStorage.getItem('answer'); // by localStorage data

txtUsername.addEventListener('input', function() { // Data saved on keyup
    localStorage.setItem('username', txtUsername.value); //bewaren in browser met setItem
}, false);

txtAnswer.addEventListener('input', function() { // Data saved on keyup
    localStorage.setItem('answer', txtAnswer.value);
}, false);


//examen: wat gebruiken we in plaats van var? antwoord: let
//hoeveel variabelen kan je bewaren?5 megabytes aan data
//je kan geen virussen verspreiden met javascript