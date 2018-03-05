
// draw a mountain
drawMountain(2);
drawMountain(5);
drawMountain(10);

function drawMountain(lengthOfMountain) {

    //initiele toplengte
    let i = 1;

    //helling
    document.write('/');

    //zolang het einde van de top 
    while(i<8) {
        document.write("'");
        i++;
    }

    //afdaling
    document.write("\\");
}

function drawFlatArea() {

}