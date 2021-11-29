<?php

declare(strict_types=1);

use Firebase\JWT\JWT;

require_once('vendor/autoload.php');

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$jwt = substr(apache_request_headers()['Authorization'], 7);
if (!$jwt){
  http_response_code(401);
  exit();
}

$decoded = JWT::decode($jwt, 'admin', array('HS256'));

$con = new mysqli('localhost', 'root', '', 'exercises');
$result = mysqli_query($con, 'SELECT login FROM usuario');
$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->login = $obj->login;

    $results_arr[] = $result_obj;
  }
  
}

/* will only return users list if logged as one of the users */
foreach($results_arr as $user)
  if ($user->login === $decoded->sub){
    echo json_encode($results_arr);
    exit();
  }

http_response_code(401);
exit();

?>