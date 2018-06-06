<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php


if(isset($_POST['zoekveld'])) {
    $zoekVeld = $_POST['zoekveld'];
}
else if(isset($_GET['zoekveld'])) {
    $zoekVeld = $_GET['zoekveld'];
}
else {
    echo 'goodbye good world';
    //die (); 
    // stop vanaf hier
    $zoekVeld ='';
}

    
if (empty($_GET['zoekveld'])) {
    echo '<h1> U hebt niks ingegeven</h1>';
}
// niet leeg, dus zoekresultaten weergeven
else {
    echo '<h1>U zocht naar  ${zoekveld}. $_GET[zoekveld]</h1>';
}
/**
* formulier kan twee methodes hebben om het te versturen naar de server
* - GET (via de adresbalk)
* - POST (via een resquest header)
*
*ophalen van die data i php doe je met $_GET of $_POST
*/ 
// data uit het formulier ophalen , request is een superglobal


?>

</body>
</html>