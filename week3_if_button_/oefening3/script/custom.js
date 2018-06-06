setInterval(function(){
    // true or false
    var randomTrueFalse = Math.random() >= 0.5; 
    // getal tussen 1 en 4
    var randomBetween = Math.floor(Math.random() * 4) + 1;

    // random een true of false
    if(randomTrueFalse == true) {
        drawMountain(randomBetween); // teken berg
    } else {
        drawFlatArea(randomBetween); // teken dal
    }
}, 5000); // elke seconde
function drawMountain(lengthOfMountain) {
    let i = 1;    // initiële toplengte
    document.write('/');    // helling
    while(i <= lengthOfMountain) {
        document.write("'");
        i++;
    }
    document.write("\\");// afdaling
}
function drawFlatArea(lengthFlat) {
    let i = 1;
    while(i <= lengthFlat) {
        document.write("_");
        i++;
    }
}