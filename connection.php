<?php
header('Location: http://localhost/exercises/displayOnTable/index.html');

$con = new mysqli('localhost', 'root', '', 'exercises');

$prepared_statement = $con->prepare('INSERT INTO times VALUES (NULL, ?, ?, ?)');
$prepared_statement->bind_param('sss', $_POST['nome'], $_POST['estado'], $_POST['url']);
$prepared_statement->execute();

?>