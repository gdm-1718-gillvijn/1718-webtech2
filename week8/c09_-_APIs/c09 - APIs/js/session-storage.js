let txtUsername = document.getElementById('username'), // Get form elements
    txtAnswer = document.getElementById('answer');

txtUsername.value = sessionStorage.getItem('username'); // Elements populated
txtAnswer.value = sessionStorage.getItem('answer'); // by sessionStorage

txtUsername.addEventListener('input', function() { // Save data on keyup
    sessionStorage.setItem('username', txtUsername.value);
}, false);

txtAnswer.addEventListener('input', function() { // Save data on keyup
    sessionStorage.setItem('answer', txtAnswer.value);
}, false);

//verschil met localStorage: als de sessie wordt afgesloten, verdwijnen de waarden , bij local storage blijven ze bewaard, je kan zelf kiezen hoelang
//voordeel sessionstorage: gegevens doorgeven naar andere javascripts

//cookies werkt op dezelfde manier, maar is wat verouderd

//https://developer.mozilla.org/nl/docs/Web/API/Window/sessionStorage
