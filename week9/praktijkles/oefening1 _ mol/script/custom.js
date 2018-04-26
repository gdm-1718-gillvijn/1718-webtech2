//knop en inputveld declareren
let inputField = document.getElementById('NameOfTheMole');
let btnSubmit = document.getElementById('StoreMyMole');

//click event zetten op de knop
btnSubmit.addEventListener('click', function(){
    //de mol uit het inputveld halen
    let mole = inputField.value;

    //na een klik moet het in de local storage opgeslagen worden
    localStorage.setItem('myMole', mole);

});
//controleren of er een mol in de local storage zit?
let storeMole = localStorage.getItem('myMole');
if(storeMole != null){
    btnSubmit.style.display = "none";
    inputField.style.display="none";
    //rood of groen scherm
    if(storedMole == 'pieter')
    moleBackground.style.backgroundImage = "url('./groen.png')";
    else
    moleBackground.style;backgroundImage = "url('./rood.png')";
}

