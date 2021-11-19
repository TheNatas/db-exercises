<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$con = new mysqli('localhost', 'root', '', 'exercises');
$result = mysqli_query($con, 'SELECT estado, COUNT(*) as quantidade FROM times GROUP BY estado');
$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->estado = $obj->estado;
    $result_obj->quantidade = $obj->quantidade;

    $results_arr[] = $result_obj;
  }
}
echo json_encode($results_arr);

?>