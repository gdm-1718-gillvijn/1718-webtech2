// waardes van fastfood
let fries, hamburger, donut;

// voor de rappe
fries = parseInt(prompt('Waarde van frietjes'));
donut = parseInt(prompt('Waarde van één donut'));
hamburger = parseInt(prompt('Waarde van hamburger'));



// inputvelden uit DOM declareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById('result4');

let correctImg = document.getElementById('correct');
let wrongImg = document.getElementById('wrong');

// inputvelden invullen
input1.value = fries + fries + fries;
input2.value = fries + hamburger + hamburger;
input3.value = donut*2 + hamburger +  donut*2;

// correcte oplossing berekenen
let correctSolution = hamburger + donut * fries;
console.log(correctSolution);

// button declareren
let checkButton = document.getElementById('check');

// als er op de knop geklikt wordt, 
checkButton.addEventListener('click', function() {
    if(correctSolution == userSolution.value) {
        // correct
        correctImg.style.display = 'block';
        // alert('joepie')
    }
    else {
        // wrong
        wrongImg.style.display = 'block';
        // alert('uh oh')
    }
})