<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$con = new mysqli('localhost', 'root', '', 'exercises');
$result = mysqli_query($con, 'SELECT * FROM times');
$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->codigo = $obj->codigo;
    $result_obj->nome = $obj->nome;
    $result_obj->estado = $obj->estado;
    $result_obj->url = $obj->url;

    $results_arr[] = $result_obj;
  }
  
}
echo json_encode($results_arr);

?>