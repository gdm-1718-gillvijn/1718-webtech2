let fruit = ['appel','peer','ananas','banaan','avocado'];

for(let i=0;i<fruit.length;i++){
    document.write(fruit[i]);
    document.write('<br>');

};
/*
// functie declaratie
function dosomething() {
    alert('opletten in de les');
}

//function expressie
const doSomethingElse = function() {
    alert('Facebooken doe je \'s avonds');
}
*/

//fruit arry declareren

//functie expressie
const doSomethingElse = function(arrayName) {
    for(let i=0;i<arrayName.length;i++){

        document.write(arrayName[i]);
        document.write('<br>');
    }
}

doSomethingElse(fruit);
doSomethingElse(veggies);