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


//knop declareren 
const button = document.getElementById('btnMakeJoke');

button.addEventListener('click', function() {
  //waarden uit de elementen halen
  const firstName = document.getElementById('firstNameField').value;
  const lastName = document.getElementById('lastNameField').value;

  //url met dynamische parameters
  const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;
  
  getJSON(url, function(error, data) {
    //schrijf de fact in het venster
    //document.write(data.value.joke);

    const listItem= document.createElement('li');
    listItem.textContent = data.value.joke;
    //listitem
    factsList.appendChild(listItem);
  });
})


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