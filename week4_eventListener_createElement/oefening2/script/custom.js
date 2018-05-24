/*

//div element aanmaken
let brick = document.createElement('div');
//klasse aanmaken
brick.className = 'brick brick-yellow';
//de muur decaleren
let wall = document.getElementById('wall-1');
//div (steen) toevoegen aan div met id waal-1 (muur)
wall.appendChild(brick);

*/

function createbrick(color) {

    //div element aanmaken
    let brick = document.createElement('div');

    //klasse toevoegen
    brick.className = 'brick brick-' + color;

    return brick;
}

function addBrickToWall(color, wallNumber) {

    //id beschrijven
    let wallId = 'wall-' + wallNumber;

    //element ophalen (juiste muur ophalen)
    let wall = document.getElementById(wallId);

    //steentje maken met de juiste kleur
    let newBrick = createbrick(color);

    //steentje toevoegen aan de muur
    wall.appendChild(newBrick);
}

function removeBrickFromWall(color, WallNumber) {

    //id beschrijven
    let wallId = 'wall-' + wallNumber;
    
        //element ophalen (juiste muur ophalen)
        let wall = document.getElementById(wallId);

        let bricks = document.getElementsByClassName('brick')
    }
    
}