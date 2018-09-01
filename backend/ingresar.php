<?php 
	header('Access-Control-Allow-Origin: *');
	require 'conexion.php';

	$nombre = $_POST["nombre"];
	$mesa = $_POST["mesa"];

	$sel = "SELECT * FROM Jugadores WHERE nombre='$nombre' AND mesa='$mesa'";
	$ejecutar = $mysqli->query($sel);

	$chequear_jugador = $ejecutar->num_rows ;

	$sele = "SELECT * FROM Jugadores WHERE mesa='$mesa'";
	$ejec = $mysqli->query($sele);
	$chequear_numero = $ejec->num_rows ;
	$numero_jugador = $chequear_numero + 1;

	if ($chequear_jugador == 1) {
		echo("False");
		exit();
	}else{
		$insertar = "INSERT INTO Jugadores(nombre, mesa, posicion) VALUES('$nombre', '$mesa', '$numero_jugador')";
		$ejecutar = $mysqli->query($insertar);

		if ($ejecutar) {
			echo($numero_jugador);
		}
	}
?>