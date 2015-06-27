<?php
switch($_SERVER['REQUEST_METHOD']) 
{
	case "GET":
		if(isset($_GET['Id']))
		{
			$bookId = $_GET["Id"];
			echo $bookId;
		}
		else
		{
			echo "todos";
		}
		break;

	case "POST":
		$postData = json_decode(file_get_contents("php://input"), true);
		var_dump($postData);
		break;

	case "PUT":
		$putData = json_decode(file_get_contents("php://input"), true);
		var_dump($putData);
		break;

	case "DELETE":
		$bookId = $_GET["Id"];
		echo "Eliminando el libro con id " . $bookId;
		break;
}