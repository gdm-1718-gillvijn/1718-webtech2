
/*
let number= prompt('geef een getal in');

console.log("dit is wat tekst");
console.log(number);

// concatenation: voeg het getal toe aan de string 'het getal..'
let text= 'het getal dat u invoerde was: ' + number;

// hoe lang is het getal
let numberLength = number.length;

// gebruik makend van inrerpolatie om de variabele in de string te steken
let text2 = `de lengte is ${numberLength} karakters lang`;

// breng het resulataat op het scherm
document.write(text);
document.write('<br>');
document.write(text2);
*/

/*
let number = prompt('geef een eerste getal in');
number = parseFloat(number);

let number2 = prompt('geef een tweede getal in');
number2 = parseFloat(number2);

let sum = number + number2;

let text = `De som van ${number} en ${number2} is ${sum}`;


document.write(text);


let i = 7;

console.log(i); //7 --> want ongewijzigd
console.log(i++); //7 --> want eerst gelogd, dan pas 1 aan toegevoegd
console.log(i); //8 --> 1 is toegevoegd in voorgaande statement
console.log(++i); //9 --> eentje toevoegen, dan loggen
*/


let students =['Yentl','Steff','Casper','Ona','Fleur']



let number = 7263;
// 1uur = 3600seconden
let amountHours = number / 3600; //kommagetal...
//naar beneden afronden
amountHours = Math.floor(amountHours);

//hoeveel seconden blijven er over?
let remainingSeconds = number % 3600;
console.log('Overgebleven seconden: ' + remainingSeconds);

let amountMinutes = Math.floor(remainingSeconds / 60);
console.log('Aantal minuten: ' + amountMinutes);
