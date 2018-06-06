<?php 

echo '<h1>Datatypes</h1>';

echo ' <h2> Scalaire Datatypes</h2>';



echo '<h3>Boolean</h3>';
$b = TRUE;
var_dump ($b);

echo '<h3>integer</h3>';
$i = 5 ;
var_dump ( $i);
$secondBoolean = is_int($i);
var_dump ($secondBoolean);

echo '<h3>Float</h3>';
$decimal = 6.89;
var_dump($decimal);

echo '<h3>String</h3>';
$someCoolVariabele = 'Hello World';
var_dump ( $someCoolVariabele); //je kan meer informatie zien! 


echo '<h2>Samengestelde Datatypes</h2>';
echo '<h3>Array</h3>';

//oude notatie
$a = array(1,3,5,9,10);
//enumeratieve arrays, nieuwe notatie
$a = [1,3,5,9,10];
var_dump($a);

//associatieve array
$myFavorites = [
    'movie' => 'Star Wars',
    'book' => 'Harry Potter',
    'music' => 'M-kids'
];
echo '<br>';

var_dump($myFavorites);
echo '<br>';

//mijn favoriet boek printen op het scherm
print $myFavorites['book'];

//multidimensionale array
$myFavorites = [
    'movies' => [
        'Star Wars',
        'A clockwork Orange', 
        'Scream',
        'The Hangover'
    ],
    'books' => [
        'Jane Eyre',
        'kippenvel',
        'de GVR'
    ],
    'playlist' => 'M-kids'
];

print $myFavorites['books'][1];
