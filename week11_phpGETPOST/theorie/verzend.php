<?php
//superglobals
 $username = $_GET['username'];
 $favdate = $_GET['fav-date'];
 if(isset($_POST['fav-date'])) && !empty($_POST['fav-date'])) //isset wordt gebruikt om te kijken of je op een knop hebt geklikt of niet
 {
     $favdate = $_POST['fav-date'];
 }
// echo '<h1>' . $username . '</h1>' ;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1><?=$username ?></h1>
    <p>Je favoriete weekdag is : <?=$favdate ?> </p>
</body>
</html>