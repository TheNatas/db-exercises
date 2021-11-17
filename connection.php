<?php

$con = new mysqli('localhost', 'root', '', 'exercises');
mysqli_query($con, 'INSERT INTO times VALUES (0, "Santos", "SP")');