<?php

$con = new mysqli('localhost', 'root', '', 'exercises');

$prepared_statement = $con->prepare('INSERT INTO times VALUES (NULL, ?, ?)');
$prepared_statement->bind_param('ss', $_POST['nome'], $_POST['estado']);
$prepared_statement->execute();

?>