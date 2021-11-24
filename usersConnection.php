<?php

$con = new mysqli('localhost', 'root', '', 'exercises');

$data = json_decode(file_get_contents('php://input'));

$prepared_statement = $con->prepare('SELECT * FROM usuario WHERE login = ?');
$prepared_statement->bind_param('s', $data->login_input);
$prepared_statement->execute();

$result = $prepared_statement->get_result();

if ($myrow = $result->fetch_assoc()){
  http_response_code(400);
  exit();
}

$prepared_statement->close();

$hashed_pw = password_hash($data->password_input, PASSWORD_DEFAULT);

$prepared_statement = $con->prepare('INSERT INTO usuario VALUES (NULL, ?, ?)');
$prepared_statement->bind_param('ss', $data->login_input, $hashed_pw);
$prepared_statement->execute();

?>