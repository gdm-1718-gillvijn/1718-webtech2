
// draw a mountain
drawMountain(2);
drawMountain(5);
drawMountain(10);

setInterval(function(){
    var randomTrueFalse = Math.random() >= 0.5;

    // random een true of False
    if(randomTrueFalse == true) {
        drawMountain(randomBetween); //teken berg
    } else {
        drawFlatArea(randomBetween); // teken dal
    }
}, 400); //elke seconde


function drawMountain(lengthOfMountain) {

    //initiele toplengte
    let i = 1;

    //helling
    document.write('/');

    //zolang het einde van de top nog niet bereikt
    while(i<= lengthOfMountain) {
        document.write("'");
        i++;
    }

    //afdaling
    document.write("\\");
}

function drawFlatArea(lengthFlat) {
    let i= 1;
    while(i <= lengthFlat) {
        document.
    }
}