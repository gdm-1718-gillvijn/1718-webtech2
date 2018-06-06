// knop declareren
const button = document.getElementById('btnMakeJoke');
const factsList = document.getElementById('facts');
const percentageBar = document.getElementById('percentage');
const advice = document.getElementById('advice');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

button.addEventListener('click', function() {

    // waardes uit de elementen halen
    const firstName = document.getElementById('firstNameField').value;
    const lastName = document.getElementById('lastNameField').value;
    const crush = document.getElementById('crushField').value;

    // url met dynamische parameters
    const chuckNorrisUrl = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;
    let crushUrl = 'https://love-calculator.p.mashape.com/getPercentage?fname=' + firstName + '&sname=' + crush;
  
    // add chuck norris fact
    getJSON(chuckNorrisUrl, function(error, data) {
       addListItem(data.value.joke);
    });

    // add crush data
    fetch(crushUrl, {
        method: 'GET', // or 'PUT'
        headers: new Headers({
            'Accept': 'application/json',
            'X-Mashape-Key': 'API-KEY-MOET-HIER'
        })
        })
    .then(function(response) { console.log(response); return response.json(); })
    .then(function(json) {
        changeProgress(json.percentage);
        makeAdvice(json.result);
    });


})


function addListItem(content) {
    // listitem creëren
    const listItem = document.createElement('li');
    // inhoud aan toevoegen
    listItem.textContent = content;
    // listitem in de ul steken
    factsList.appendChild(listItem);
}

function changeProgress(percentage) {
    
    percentageBar.style.width = percentage + '%';
}

function makeAdvice(someGoodAdvice) {
    
    advice.textContent = someGoodAdvice;
}

/*

//variabele met gegevens
let voornaam = prompt('Vul hier u voornaam in');
let achternaam = prompt('Vul hier u achternaam in');

//url met dynamische parameters
const url = 'http://api.icndb.com/jokes/random?firstName=' + voornaam + '&lastName=' + achternaam;


// JSON FUNCTIE OPROEPEN, BINNEN DE CALLBACK MANIPULEREN WE DE VERKREGEN DATA
getJSON(url, function(error, data){
    //schrijf de fact in het venster
    document.write(data.value.joke);
})

*/