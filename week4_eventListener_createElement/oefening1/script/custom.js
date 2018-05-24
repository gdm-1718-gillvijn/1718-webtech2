//elementen selecteren en in een variabele stoppen
let anchorTags, strongTags, spanTags;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementByTagName('strong');
spanTags = document.getElementByTagName('span');

// eerste anchor tag uit de array van anchorTags halen
let linkElement = anchorTags[0];   //was eerst anchorTag, weet niet of ik dit mocht veranderen!


//event toepassen
linkElement.addEventListener('mouseover', function(){

    //eerste strong tag oranje maken
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.Color = 'orange';

    //tweede strong tag oranje maken
    strongTags[i].style.color = 'orange'
    
    // alle spantags doorlopen
    for(let i = 0; i < spanTags.length; i++) {
        spanTags[i].style.color = 'purple';
    }

});


linkElement.addEventListener('mouseout', function(){

    //alle strongTags doorlopen
    for(let i = 0; i < spanTags.length; i++) {
        spanTags[i].style.color = 'purple';
        
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.Color = 'orange';
        
}
);
//events toepassen op de link

//element ophalen
let spinach= document.getElementById('spinach');

//kleur veranderen
spinachElement.style.color = '#FF00FF';
