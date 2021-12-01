<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$con = new mysqli('localhost', 'root', '', 'exercises');

$data = json_decode(file_get_contents('php://input'));

$prepared_statement = $con->prepare('SELECT * FROM jogadores WHERE codigo_time = ?');
$prepared_statement->bind_param('i', $data->team_code);
$prepared_statement->execute();

$result = $prepared_statement->get_result();
$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->id = $obj->id;
    $result_obj->nome = $obj->nome;
    $result_obj->codigo_time = $obj->codigo_time;

    $results_arr[] = $result_obj;
  }
  
}
echo json_encode($results_arr);

?>