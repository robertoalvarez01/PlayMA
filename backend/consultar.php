<?php 
	header('Access-Control-Allow-Origin: *');
	require 'conexion.php';

	$mesa = $_POST["mesa"];

	$sel = "SELECT * FROM Jugadores WHERE mesa='$mesa'";
	$ejecutar = $mysqli->query($sel);

	$chequear_jugadores = $ejecutar->num_rows ;

	echo ($chequear_jugadores);
?>