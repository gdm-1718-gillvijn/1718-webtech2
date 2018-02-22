// 3 variabelen met beestjes
const animal1 = 'elephant';
const animal2 = 'cockroach';
const animal3 = 'zebra';

//variabele van het type array
let animals = [];

//variabelen in een array steken
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);

//manueel alle string concatteneren (samenvoegen)
let allAnimals = animals[0] + animals[1] + animals[2];

//op scherm zetten
document.write(allAnimals);
document.write('<br>-----<br>');

//tweede manier
let allAnimals2 = '';

//loopen door de array
for(let i = 0; i < 3; i++) {
    //resultaat loggen van elk element uit array
    console.log(animals[i]);
    //de strings concatteneren
    allanimals2 += animals[i];
}

//samengevoegde strings op het scherm schrijven
document.write(allAnimals2);
