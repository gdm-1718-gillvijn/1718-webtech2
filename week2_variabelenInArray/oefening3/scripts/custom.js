// 3 variabelen met beestjes van het type string
const animal1 = 'elephant';
const animal2 = 'cockroach';
const animal3 = 'zebra';

// variabele van het type array
let animals = [];

// variabelen in de array steken
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);
animals.push('bunny');
animals.push('panther');

// manueel alle strings concatteneren (samenvoegen)
let allAnimals = animals[0] + animals[1] + animals[2];

// op scherm zetten
document.write(allAnimals);
document.write('<br>-------<br>');

// tweede manier
let allAnimals2 = '';

// loopen door de array
for(let i = 0; i < animals.length; i++) {
    // resultaat loggen van elk element uit array
    console.log(animals[i]);
    // de strings concatteneren
    allAnimals2 += animals[i];
}

// samengevoegde strings op het scherm schrijven
document.write(allAnimals2);