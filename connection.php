<?php

$con = new mysqli('localhost', 'root', '', 'exercises');

$data = json_decode(file_get_contents('php://input'));

$prepared_statement = $con->prepare('INSERT INTO times VALUES (NULL, ?, ?, ?)');
$prepared_statement->bind_param('sss', $data->team_name, $data->team_state, $data->team_img);
$prepared_statement->execute();

foreach($data->players as $player){

  $prepared_statement->close();

  $prepared_statement = $con->prepare('SELECT codigo FROM times WHERE nome = ?');
  $prepared_statement->bind_param('s', $data->team_name);
  $prepared_statement->execute();
  $result = $prepared_statement->get_result();
  $row = $result->fetch_assoc();
  
  $prepared_statement->close();

  $prepared_statement = $con->prepare('INSERT INTO jogadores VALUES (NULL, ?, ?)');
  $prepared_statement->bind_param('si', $player, $row['codigo']);
  $prepared_statement->execute();

}
echo json_encode('http://localhost/exercises/displayOnTable/index.html');
?>