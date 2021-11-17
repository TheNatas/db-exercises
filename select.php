<?php

$con = new mysqli('localhost', 'root', '', 'exercises');
$result = mysqli_query($con, 'SELECT * FROM times');

if ($result){
  while($obj = $result->fetch_object()){
    $line = '';
    $line .= $obj->codigo;
    $line .= "|".$obj->nome;
    $line .= "|".$obj->estado;
    echo nl2br($line."\n");
  }
}