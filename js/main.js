$(document).ready(function() {
	var label = "";
	var categoria = "";
    var valor = location.search.substring(1,location.search.length);
	temp = valor.split("&");
	var nombre = temp[0];
	var mesa = temp[1];
	console.log("Se ha conectado el jugador "+nombre+" de la mesa n° "+mesa);

	$.ajax({
		url: 'backend/ingresar.php',
		type: 'POST',
		data: {nombre: nombre, mesa: mesa}
	})
	.done(function(respuesta){
		if (respuesta == "False") {
			label = "Error, el usuario ya esta en curso.";
			mostrar(label);
		}else{
			label = "Eres el jugador n° "+respuesta+" de la mesa."
			mostrar(label);
			categoria = respuesta;
			consultar();
		}
	})
	.fail(function(XMLHttpRequest, textStatus, errorThrown){
		console.log(XMLHttpRequest);
		console.log(textStatus);
		console.log(errorThrown);
	})

	function consultar(){
		$.ajax({
			url: 'backend/consultar.php',
			type: 'POST',
			data: {mesa: mesa}
		})
		.done(function(respuesta){
			label = "Hay "+respuesta+"/5 jugadores conectados de tu mesa";
			mostrar(label);
			if (respuesta >= 5) {
				if (categoria == "1") {
					categoria = "Cultura";
					mostrar_categoria(categoria);
					desaparecer();
				}else if (categoria == "2") {
					categoria = "Mano Amiga";
					mostrar_categoria(categoria);
					desaparecer();
				}else if (categoria == "3") {
					categoria = "Deporte";
					mostrar_categoria(categoria);
					desaparecer();
				}else if (categoria == "4") {
					categoria = "Geografia";
					mostrar_categoria(categoria);
					desaparecer();
				}else if (categoria == "5") {
					categoria = "Musica y entretenimiento";
					mostrar_categoria(categoria);
					desaparecer();
				}else{
					mostrar("El numero de jugadores máximo en tu mesa ha sido superado. No podras jugar desde este dispositivo.")
				}
			}else{
				setTimeout(consultar, 10000);
			}
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest);
			console.log(textStatus);
			console.log(errorThrown);
		})
	}

	function desaparecer(){
		var contenedor = document.getElementById('contenedor_carga');
  		contenedor.style.visibility = "hidden";
  		contenedor.style.opacity = 0;
  		aparecer_elementos();
	}
	function aparecer_elementos(){
		setTimeout(function() {
	        $("#categoria").fadeIn(1500);
	    },1000);
	    setTimeout(function() {
	    	$("#img").fadeIn(1500);
	    },1000);
	    setTimeout(function(){
	      $("#comenzar").fadeIn(1500);
	    },2000);
	}
	function mostrar(texto){
		console.log(texto);
		$("#numUser").text(texto);
	}
	function mostrar_categoria(texto){
		$("#categoria").text(texto);
	}

	$("#comenzar").click(function(){
		if (categoria === "Mano Amiga") {
			categoria = "Mano";
		}else if (categoria === "Musica y entretenimiento") {
			categoria = "Musica";
		}
		$("#body-carga").fadeOut(400);
		location.href = "Preguntas/index.html?"+categoria;
	});
});