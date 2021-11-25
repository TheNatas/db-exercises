<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents('php://input'));

$con = new mysqli('localhost', 'root', '', 'exercises');

$result = mysqli_query($con,
  'SELECT time, count(*) as partidas 
  FROM(
      SELECT time_mandante as time
      FROM partidas
      
      UNION ALL

      SELECT time_visitante as time
      FROM partidas
    
  )  as sub
  GROUP BY 1;'
);

$results_arr = [];

if ($result){
  while($obj = $result->fetch_object()){
    $result_obj = new StdClass();
    $result_obj->time = $obj->time;
    $result_obj->partidas = $obj->partidas;

    $results_arr[] = $result_obj;

  }
}
echo json_encode($results_arr);

?>