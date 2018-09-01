$(document).ready(function(){
	var valor = location.search.substring(1,location.search.length);

	label = "Sumaste "+ valor +" Puntos para tu Equipo.";

	$("#h2").text(label);

	$.ajax({
		url: '../backend/sumar.php',
		type: 'POST',
		data: {id: npregunta}
	})
	.done(function(respuesta){
		
		
	})
	.fail(function(XMLHttpRequest, textStatus, errorThrown){
		console.log(XMLHttpRequest);
		console.log(textStatus);
		console.log(errorThrown);
	})
});