const password = 'kellypfaff';

let guess =prompt('Wat is het geheime wachtwoord???');
let amountTries = 1;


/*if (password == guess) {
    document.write('Goed zo rakker');
} */

while(password != guess){
    amountTries++; // tries 
    guess = prompt('Wat is het geheime wachtwoord???');
}

document.write('je hebt het wachtwoord geraden' + password + ' geraden')
document.write('Na '+ amountTries + ' pogingen');