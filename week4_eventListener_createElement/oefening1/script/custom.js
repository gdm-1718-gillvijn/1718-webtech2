// 1| elementen selecteren en in variabelen stoppen
let anchorTags, strongTags, spanTags;

let invoked = false;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags = document.getElementsByTagName('span');

// eerste anchor tag uit de array van anchorTags halen
let linkElement = anchorTags[0];

// event toepassen
linkElement.addEventListener('mouseover', function() {


    if(!invoked)    changeColorVeryFast(anchorTags[0]);


    // eerste strong tag oranje maken
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = 'orange';
    // tweede strong tag oranje maken
    strongTags[1].style.color = 'orange';

    // alle spantags doorlopen
    for(let i = 0; i < spanTags.length; i++ ) {
        spanTags[i].style.color = 'purple';
    }
});

linkElement.addEventListener('mouseout', function() {

    // alle strongtags doorlopen
    for(let i = 0; i < strongTags.length; i++ ) {
        strongTags[i].style.color = 'black';
    }
    // alle spantags doorlopen
    for(let i = 0; i < spanTags.length; i++ ) {
        spanTags[i].style.color = 'black';
    }

});


// 2| events toepassen op de link


function changeColorVeryFast(element) {
    setInterval(function(){
        let randomColor = getRandomColor();
        //console.log(randomColor);
        element.style.backgroundColor = randomColor;
    }, 300);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
