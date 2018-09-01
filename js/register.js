$(document).ready(function(){
	setTimeout(function() {
        $("#loaderPage").fadeOut(1500);
    },3000);
	$("#boton").click(function(){
		var x = $("#inputName").val();
		var y = $("#mesa").val();
		if (x != "" && y != "") {
			location.href = "index_Carga.html?"+x+"&"+y;
		}
	});
});