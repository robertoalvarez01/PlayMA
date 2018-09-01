<?php 
	header('Access-Control-Allow-Origin: *');
	require 'conexion.php';

	$id = $_POST["id"];

	$sel = "SELECT pregunta, opcion1, opcion2, opcion3, correcta FROM cultura WHERE id='$id'";
	$ejecutar = $mysqli->query($sel);
	$res = $ejecutar->fetch_assoc();
	$salida = $res['pregunta']."|".$res['opcion1']."|".$res['opcion2']."|".$res['opcion3']."|".$res['correcta'];
	echo $salida;
?>