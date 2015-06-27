<?php
$con = mysqli_connect("localhost","root","ena10llon","peliculas");
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM posts");

$datos = array();
while($reg = mysqli_fetch_assoc($result))
{
    $datos[] = $reg;
}
echo json_encode($datos);

mysqli_close($con);