
//waardes van food
let fries= 5;
let hamburger= 4;
let donut= 10;

//alle inputvelden en de knop uit DOM declareren
let input1= document.getElementById('result1');
let input2= document.getElementById('result2');
let input3= document.getElementById('result3');
let userSolution = document.getElementById('result4');

//inputvelden invullen
input1.value= fries + fries + fries;
input2.value= fries + hamburger + hamburger;
input3.value=donut*2 + hamburger + donut*2;

//correcte oplossing berekenen
let correctSolution = hamburger + donut + fries;

//button declareren
let checkButton = document.getElementById('check');

checkButton.addEventListener('click', function() {
    if(correctSolution == userSolution) {
        //correct
        correctImg.style.display = 'block';
        //alert('joepie')
    }
else {
    //wrong
    wrongImg.style.display= 'block';
    //alert('uh oh')
    }
})


