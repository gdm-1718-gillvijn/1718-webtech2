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

$tekst1 = 'hallo ';
$tekst2 = 'ik ben ';
$tekst3 = 'Gilles';

echo $tekst1;echo '<br>';
echo $tekst2;echo '<br>';
echo $tekst3;echo '<br>';

$geheel = $tekst1.$tekst2.$tekst3;

echo $geheel;

$firstName = 'Chuck';
$lastName = 'Norris';
$maxAge = 'infinite';

$longString = $firstName . '' . $lastName . "his age is" . $maxAge;
echo $longString;
?>



    
</body>
</html>
