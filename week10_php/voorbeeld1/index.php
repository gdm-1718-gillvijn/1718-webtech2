<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>voorbeeld1</title>
</head>
<body>
    <h1>Voorbeeld 1</h1>
    <?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL); //stukje code om errors te zien!

    include 'content.php';
//oefening1
    // integer
    $myFavoriteNumber = 13;
    $myFloat = 5.2;
    $myString = "hello world";
    $adult = true;
    $myArray = ['Tomaat','witloof','sla'];
    $myArray2 = array(4,5,5,6,7);

    var_dump($myFavoriteNumber); echo '<br>';
    var_dump($myFloat);echo '<br>';
    var_dump($myString);echo '<br>';
    var_dump($adult);echo '<br>';
    var_dump($myArray);echo '<br>';


    //oefening2
    

    // dit is een single line comment
    # single line comment in unix-stijl
    /* 
    hoera
    het is bijna weekend 
    */

    /**
     * 
     * zondag zondag
     * vandaag blijf ik weer heel lang bij jou
     * 
     */


     echo '<strong>';
     echo date('Y:i:s');
     echo '</strong>';

     echo '<br>';

     $i = 2;
     $j = 4.56;
     $k = $i + $j;

     //op het scherm weergeven
     echo $k;

     echo '<br>';
     //op het scherm dumpen
     var_dump($k);

    ?>
    <script>
    //deze commentaar kan iedereen lezen
    /* deze comment
    ook
    */
    </script>
    <!-- dit is html commentaart -->
</body>
</html>




<?php
 echo "Hello Universe"
//enkel php openingstag is nodig als je enkel php schrijft
// als je erop klikt, dowload hij in plaats van dat hij opent. momenteel is er nog geen server. In mamp moeten we server starten zodat php code wordt uitgevoerd.
// php wordt omgezet naar html door server (mamp)
?>
