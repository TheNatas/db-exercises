<?php

declare(strict_types=1);

use Firebase\JWT\JWT;

require_once('vendor/autoload.php');

$con = new mysqli('localhost', 'root', '', 'exercises');

$data = json_decode(file_get_contents('php://input'));

$prepared_statement = $con->prepare('SELECT * FROM usuario WHERE login = ?');
$prepared_statement->bind_param('s', $data->login_input);
$prepared_statement->execute();

$result = $prepared_statement->get_result();

$user = $result->fetch_assoc();

if (!$user){
  http_response_code(404);
  exit();
}

if (password_verify($data->password_input, $user['senha'])){
  
  $key = 'admin';
  $payload = array(
    'iss' => 'localhost',
    'sub' => $data->login_input
  );

  echo JWT::encode($payload, $key, 'HS256');

}else{
  http_response_code(400);
  exit();
}

$prepared_statement->close();

?>