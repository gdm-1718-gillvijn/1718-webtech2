let form = document.getElementsByTagName("form")[0];
let form = document.getElementsByClassName("form-horizontal")[0];

// let form = document.querySelector
// let form = document.querySelector("form.form.horizontal");

//queryselector : wat zit er in mijn pagina, dat komt in mijn pagina, statisch!
//1ste: dynamisch! je kan later nog aanpassen

let wachtwoordVeld = document.getElementById("password");

form.addEventListener("submit",function(event){
    //hier gebeurt validatie van formulier alvorens gegevens worden verzonden
    event.preventDefault(); //iets tegenhouden
    //let regex = /a{8}/;                       //minstens 8 a's
    //let regex = /a{8,20}/;                    //minstens 8 en maximum 20 a's
    //let regex = /^[[a-z -]{8}/;             //de tekst moet beginnen met 8 letters ,spatie of streepjes
    //let regex = /[[a-z -]{8}$/;               //de tekst moet eindigen met 8 letters, spaties of streepjes
    //let regex = /^http/;
    //let regex = /\.be$/;

    let regex = /^[a-zA-Z -/']{2,}$/;                // / ervoor nodig voor aceentje omdat het speciaal is
    console.log('Voornaamveld is correct: ${regex.test(wachtwoordVeld.value)}');
})

let regex2 = /^[A-Z]+[0-9]+.{6,10}$/;
console.log('WachtwoordVeld is correct: $')


// {} : hoeveel keer iets herhaald moet worden
// ^ het moet beginnen met .. karakters 
//je mag maar 1 variabele met dezelfde naam
// + minstens 1 hoofdletter, minstens 1 cijfer