<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$con = new mysqli('localhost', 'root', '', 'exercises');
$result = mysqli_query($con, 'SELECT * FROM partidas');
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