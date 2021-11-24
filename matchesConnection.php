<?php
header('Location: http://localhost/exercises/displayMatches/index.html');

$con = new mysqli('localhost', 'root', '', 'exercises');

if ($_POST['home-team'] == $_POST['away-team'] || $_POST['home-team-goals'] < 0 || $_POST['away-team-goals'] < 0){
  http_response_code(400);
  exit();
}

$prepared_statement = $con->prepare('INSERT INTO partidas VALUES (NOW(), ?, ?, ?, ?)');
$prepared_statement->bind_param('sisi', $_POST['home-team'], $_POST['home-team-goals'], $_POST['away-team'], $_POST['away-team-goals']);
$prepared_statement->execute();

?>