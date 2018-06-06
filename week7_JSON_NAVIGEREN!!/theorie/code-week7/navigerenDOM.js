//aanspreken van elementen
//1. op basis van id-waarde
let list = document.getElementById('list1');


//2. alle p-elementen (op basis van tag)
let paras = document.getElementsByTagName('p');
console.log(paras);
//deze gaat naar u dynamische DOM-structuur kijken! 

let parasAlt = document.querySelectorAll('p');
console.log(parasAlt);
//static methode, dat wordt 1 keer uitgevoerd, die steekt het reslutaat in variabele parasAlt en die wordt niet meer geupdatet later als er in u Dom aanpassingen worden gemaakt



//3. alle elementen met de klasse a
let aElementen = document.getAlementsByClassName('a');
console.log(aElementen);
let aElementenAlt = document.querySelectorAll('.a');
console.log(aElementenAlt);

//4. eerste element die voldoet aan een selectie
let element = document.querySelector(".b");
console.log(element);
let elementAlt = document.getElementsByClassName('b')[0];
console.log(elementAlt);


//toevoegen van elementen
//we willen binnen onze 2de lijst een vierde li elementje maken met classe b en inhoud item  2,4
//li aanmaken , li aanhangen aan DOMstructuur
let nieuweLi = document.createElement('li');
//tekst toevoegen aan Li
    //eerste manier
    let nieuweTekstNode = document.createTextNode('item 2-4');
    nieuweLi.appendChild(nieuweTekstNode);
    //tweede manier
    nieuweLi.textContent = "item 2-4";
    //derde manier
    //innerHTML, moet niet alleen tekst zijn, maar er mogen ook tags bijkomen
    nieuweLi.innerHTML = '<strong>item</strong> 2-4';
console.log(nieuweLi);
//toevoegen van de classe
    //manier1
    nieuweLi.setAttribute('class','b');
    //tweede manier
    nieuweLi.classList.add('c');
//element toevoegen aan DOM-structuur
let list2 = document.getElementById('list2');
list2.appendChild(nieuweLi);


//klasse verwijderen
nieuweLi.classList.remove('b');
//toggle klassen = klassen verwijderen of toevoegen, als het er is, verwijderd hij, als hij er niet is, dan voeg ik ze toe
nieuweLi.classList.toggle('c');