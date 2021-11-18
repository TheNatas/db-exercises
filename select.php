<?php
header("Content-Type: application/json");

$con = new mysqli('localhost', 'root', '', 'exercises');
$result = mysqli_query($con, 'SELECT * FROM times');
$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->codigo = $obj->codigo;
    $result_obj->nome = $obj->nome;
    $result_obj->estado = $obj->estado;

    $results_arr[] = $result_obj;
  }
  
}
echo json_encode($results_arr);

?>