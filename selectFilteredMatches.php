<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$con = new mysqli('localhost', 'root', '', 'exercises');

$data = file_get_contents('php://input');

$data = json_decode($data);

$prepared_statement = $con->prepare('SELECT * FROM partidas WHERE DATE(data) BETWEEN ? AND ?');
$prepared_statement->bind_param('ss', $data->initial_datetime, $data->final_datetime);
$prepared_statement->execute();

$result = $prepared_statement->get_result();
$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->data = $obj->data;
    $result_obj->time_mandante = $obj->time_mandante;
    $result_obj->gols_time_mandante = $obj->gols_time_mandante;
    $result_obj->time_visitante = $obj->time_visitante;
    $result_obj->gols_time_visitante = $obj->gols_time_visitante;

    $results_arr[] = $result_obj;
  }
  
}
echo json_encode($results_arr);

?>