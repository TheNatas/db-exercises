<?php

$con = new mysqli('localhost', 'root', '', 'exercises');
mysqli_query($con, 'INSERT INTO times VALUES (1, "São Paulo", "SP")');