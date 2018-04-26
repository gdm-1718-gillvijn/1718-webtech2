var dog = {
    breed: 'Collie',
    name: 'Lassie',
    color: 'brownnish',
    age: 56,
    gender: 'm',
    coloreyes: function() {
        return 'brown'
    }

}

let Dog = function(breed, name, color,age) {
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.colorEyes = function() {
        return 'pink'
    };

    this.birthYear = function() {
        const now = new Date();
        
    }
    this.birthYear = function() {
        const currentYear = 2018
        let birthYear = currentYear - this.age;
        return birthyear;
}

let myFavouriteDog = new Dog('Collie', 'Lassie','brown',20);

//property toevoegen aan het object
myfavouriteDog.bestToyEver = 'een mooie rode bal';

//functie toevoegen aan de constructor,
Dog.prototype.speak = function(Line) {
    let slogan = 'de' + this.breed + 'hond zegt: ' + Line;
    return slogan;
}

let saySomething = myFavouriteDog.speak('Er klopt iemand op de deur');
console.log(saySomething);
document.write(myFavouriteDog.birthYear());
