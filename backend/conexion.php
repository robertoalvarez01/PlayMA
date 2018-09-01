<?php  
	$host = "localhost";
	$user = "root";
	$pw = "Roberto01";
	$db = "playma";
	#$user = "root";
	#$pw = "Roberto01";
	#$db = "interbandos";
	$mysqli = new mysqli ($host, $user, $pw, $db);
	$mysqli->set_charset("utf8");
	if ($mysqli -> connect_error) {
		die ("Error en la conexion". $mysqli -> connect_error);
	}
?>