let dog = {
    breed: 'Collie',
    name: 'Lassie',
    color: 'brownish',
    age: 56,
    gender: 'm',
    colorEyes: function() {
        return 'brown'
    }
}


// klassedefinitie met constructor
let Dog = function(breed, name, color, age, gender) {
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.colorEyes = function() {
        return 'pink'
    };
    this.birthYear = function() {

        const now = new Date();
        const year = now.getFullYear();


        // 2018 vervangen naar huidig jaar
        // zodat het ook nog in 2027 werkt
        const currentYear = year;
        
        // geboortejaar berekenen
        let birthYear = currentYear - this.age;
        
        // geboortejaar retourneren
        return birthYear;

    }
}

// functie toevoegen aan de constructor
// zonder constructor zelf te wijzigen
Dog.prototype.speak = function(line) {
    
    let slogan = 'De ' + this.breed + ' hond zegt: ' + line;
    return slogan;
}

let myFavouriteDog = new Dog('Collie', 'Lassie', 'brown and black', 98, 'm');

// property toevoegen aan het object
myFavouriteDog.bestToyEver = 'een mooie rode bal';

let saySomething = myFavouriteDog.speak('Er klopt iemand op de deur');
console.log(saySomething);





document.write(myFavouriteDog.birthYear());