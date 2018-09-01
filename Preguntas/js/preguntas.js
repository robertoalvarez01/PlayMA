$(document).ready(function(){
	var valor = location.search.substring(1,location.search.length);
	console.log(valor);
	puntajeparticipante = 0;
	var npregunta = 1;
	var correcta = "";
	var btn1 = "";
	var btn2 = "";
	var btn3 = "";
	var btn4 = "";
	var correctapos = 0;
	var estado = 0;

	categoria();

	function colorear(e){
		$("#respuesta1").removeClass("btn-outline-info");
		$("#respuesta2").removeClass("btn-outline-info");
		$("#respuesta3").removeClass("btn-outline-info");
		$("#respuesta4").removeClass("btn-outline-info");
		if (e == 1) {
			$("#respuesta1").addClass("btn-success");
			$("#respuesta2").addClass("btn-danger");
			$("#respuesta3").addClass("btn-danger");
			$("#respuesta4").addClass("btn-danger");
		}else if (e == 2) {
			$("#respuesta1").addClass("btn-danger");
			$("#respuesta2").addClass("btn-success");
			$("#respuesta3").addClass("btn-danger");
			$("#respuesta4").addClass("btn-danger");
		}else if (e == 3) {
			$("#respuesta1").addClass("btn-danger");
			$("#respuesta2").addClass("btn-danger");
			$("#respuesta3").addClass("btn-success");
			$("#respuesta4").addClass("btn-danger");
		}else if (e == 4) {
			$("#respuesta1").addClass("btn-danger");
			$("#respuesta2").addClass("btn-danger");
			$("#respuesta3").addClass("btn-danger");
			$("#respuesta4").addClass("btn-success");
		}
	}

	function rearmar(){
		$("#respuesta1").removeClass("btn-danger");
		$("#respuesta2").removeClass("btn-danger");
		$("#respuesta3").removeClass("btn-danger");
		$("#respuesta4").removeClass("btn-danger");
		$("#respuesta1").removeClass("btn-success");
		$("#respuesta2").removeClass("btn-success");
		$("#respuesta3").removeClass("btn-success");
		$("#respuesta4").removeClass("btn-success");
		$('selector').css( 'cursor', 'pointer' );
		$("#respuesta1").removeClass("btn");
		$("#respuesta2").removeClass("btn");
		$("#respuesta3").removeClass("btn");
		$("#respuesta4").removeClass("btn");
		$("#respuesta1").addClass("btn");
		$("#respuesta2").addClass("btn");
		$("#respuesta3").addClass("btn");
		$("#respuesta4").addClass("btn");
		$("#respuesta1").removeClass("btn-block");
		$("#respuesta2").removeClass("btn-block");
		$("#respuesta3").removeClass("btn-block");
		$("#respuesta4").removeClass("btn-block");
		$("#respuesta1").addClass("btn-block");
		$("#respuesta2").addClass("btn-block");
		$("#respuesta3").addClass("btn-block");
		$("#respuesta4").addClass("btn-block");
		$("#respuesta1").removeClass("btn-outline-info");
		$("#respuesta2").removeClass("btn-outline-info");
		$("#respuesta3").removeClass("btn-outline-info");
		$("#respuesta4").removeClass("btn-outline-info");
		$("#respuesta1").addClass("btn-outline-info");
		$("#respuesta2").addClass("btn-outline-info");
		$("#respuesta3").addClass("btn-outline-info");
		$("#respuesta4").addClass("btn-outline-info");

		estado = 0;
		$("#img").fadeOut(1);
	}

	function ordenar(respuesta){
		var orden = Math.floor(Math.random() * (4 - 1)) + 1;
		var resp = respuesta.split("|");
		correcta = resp[4];

		$("#pregunta").text(resp[0]);
		if (resp[0] == "¿De qué pais es esta bandera?") {
			$("#img").fadeIn(1);
		}

		if (orden === 1) {
		$("#respuesta1").text(resp[4]);
		$("#respuesta2").text(resp[3]);
		$("#respuesta3").text(resp[2]);
		$("#respuesta4").text(resp[1]);
		correctapos = 1;
		}else if (orden === 2) {
		$("#respuesta1").text(resp[1]);
		$("#respuesta2").text(resp[4]);
		$("#respuesta3").text(resp[3]);
		$("#respuesta4").text(resp[2]);
		correctapos = 2;
		}else if (orden === 3) {
		$("#respuesta1").text(resp[2]);
		$("#respuesta2").text(resp[1]);
		$("#respuesta3").text(resp[4]);
		$("#respuesta4").text(resp[3]);
		correctapos = 3;
		}else if (orden === 4) {
		$("#respuesta1").text(resp[3]);
		$("#respuesta2").text(resp[2]);
		$("#respuesta3").text(resp[1]);
		$("#respuesta4").text(resp[4]);
		correctapos = 4;
		}

		btn1 = $("#respuesta1").text();
		btn2 = $("#respuesta2").text();
		btn3 = $("#respuesta3").text();
		btn4 = $("#respuesta4").text();

		$("#cuerpo").fadeIn(400);

	}

	function categoria(){
		$.ajax({
			url: '../backend/'+valor+'.php',
			type: 'POST',
			data: {id: npregunta}
		})
		.done(function(respuesta){
			console.log(respuesta);

			ordenar(respuesta);
			
		})
		.fail(function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest);
			console.log(textStatus);
			console.log(errorThrown);
		})
	}

	function puntaje(){
		location.href = "../Puntajes/index.html?"+puntajeparticipante;
	}

	function muestra(){
		colorear(correctapos);
		setTimeout(function(){
			if (npregunta == 15) {
				puntaje();
			}else{
				npregunta = npregunta + 1;
				$("#cuerpo").fadeOut(400);
				setTimeout(function(){
					rearmar();
					categoria();
				},400)
			}
		}, 2000);
	}

	$("#respuesta1").click(function(){
		if (estado == 0) {
			estado = 1;
			if (btn1 === correcta) {
				puntajeparticipante = puntajeparticipante+ 10;
			}
			muestra();
		}
	});

	$("#respuesta2").click(function(){
		if (estado == 0) {
			estado = 1;
			if (btn2 === correcta) {
				puntajeparticipante = puntajeparticipante+ 10;
			}
			muestra();
		}
	});

	$("#respuesta3").click(function(){
		if (estado == 0) {
			estado = 1;
			if (btn3 === correcta) {
				puntajeparticipante = puntajeparticipante+ 10;
			}
			muestra();
		}
	});

	$("#respuesta4").click(function(){
		if (estado == 0) {
			estado = 1;
			if (btn4 === correcta) {
				puntajeparticipante = puntajeparticipante+ 10;
			}
			muestra();
		}
	});
});