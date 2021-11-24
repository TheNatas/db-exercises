<?php
header('Location: http://localhost/exercises/displayMatches/index.html');

$con = new mysqli('localhost', 'root', '', 'exercises');

$data = json_decode(file_get_contents('php://input'));
$prepared_statement = $con->prepare('DELETE FROM partidas WHERE data = ?');
$prepared_statement->bind_param('s', $data->data);
$prepared_statement->execute();

?>