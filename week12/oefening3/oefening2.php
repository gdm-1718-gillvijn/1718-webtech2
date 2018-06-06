<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Oefening 2</title>
    <style>
    
    * {
        font-family: sans-serif;
    }

    body {
        background:pink;
        font-size: 15px;
    }

    input, textarea {
        font-size: 14px;
        padding: 10px 20px;
        background: yellow;
    }
    
    </style>
</head>
<body>

    <h1>Contacteer mij</h1>
    <h1>Want ik ben het waard</h1>

    <div id="contact";

        <form method="POST">
        <div>
            <label for="firstname">Voornaam</label>
            <input id="firstname" type="text" placeholder="Geef je voornaam in">
        </div>

        <div>
            <label for="name">Naam</label>
            <input id="name" type="text" placeholder="Geef je achternaam in">
        </div>

        <div>
            <label for="email">E-mail</label>
            <input id="email" type="email" placeholder="Geef je e-mail in">
        </div>

        <div>
            <label for="password">Wachtwoord</label>
            <input id="password" type="password" placeholder="Geef je wachtwoord in">
        </div>

        <div>
            <label for="message">Bericht</label>
            <textarea name="message" type="message" cols="30" rows="10"></textarea>
        </div>

        <div>
            <button type="submit">Contacteer!</button>
        </div>
        </form>

        <div id="messages">
        <ul class="errors">
        <?php
                if(empty($_POST['firstname'])){
                    echo '<li>Vul de voornaam in aub</li>';
                }

                if(empty($_POST['lastname'])){
                    echo '<li>Vul de voornaam in aub</li>';
                }

                if(empty($_POST['email'])){
                    echo '<li>Vul de voornaam in aub</li>';
                }

                if(empty($_POST['password'])){
                    echo '<li>Vul de voornaam in aub</li>';
                }

                if(empty($_POST['message'])){
                    echo '<li>Vul de voornaam in aub</li>';
                }
               
            ?>
        </ul>

        <ul class="confirmation">
        <?php

                $errors = false;

                //loop door elk veld van het formulier
                foreach($_POST as $inputValue) {
                    //controleer of het veld leeg is
                    if(empty($inputValue)) {
                        $errors = true;
                    }
                }

                //als er geen errors zijn, is alles ingevuld               
                if(!$errors && isset($_POST['message'])) {
                //echo '<li>Het formulier werd correct verzonden</li>';

                $subject = 'Formulier van ' . $_POST['firstname'] . ' ' . $_POST['name'];

                //mail naar jezelf
                mail($_POST['email'], $subject, $_POST['message']);

                //mail naar lector
                mail('frederick.roegiers@arteveldehs.be', $subject, $_POST['message']);

                echo '<li>Het formulier werd correct verzonden</li>';
                }

             

        ?>
        </ul>
        

            <?php
                echo '<pre>';
                var_dump($_POST);
                echo '</pre>';
               
            ?>
        </div>
    
</body>
</html>