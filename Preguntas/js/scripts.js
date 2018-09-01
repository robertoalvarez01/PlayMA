$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

// var imagenes = ['Img/2.jpg','Img/2.jpg','Img/2.jpg','Img/2.jpg'],
// 	cont = 0;

// 	function carrousel(banner){
// 		banner.addEventListener('click', e =>{
// 			let atras = banner.querySelector('.atras'),
// 			adelante = banner.querySelector('.adelante'),
// 			img = banner.querySelector('img'),
// 			tgt = e.target;

// 			if (tgt == atras) {
// 				if (cont > 0) {
// 					img.src = imagenes[cont - 1];
// 					cont--;
// 				}else{
// 					img.src = imagenes[imagenes.length - 1];
// 					cont = imagenes.length - 1;
// 				}
// 			}else if(tgt == adelante){
// 				if (cont < imagenes.length - 1) {
// 					img.src = imagenes[cont + 1];
// 					cont++;
// 				}else{
// 					img.src = imagenes[0];
// 					cont = 0;
// 				}
// 			}
// 		});
		
// 	}

// document.addEventListener("DOMContentLoaded", () => {
// 	let banner = document.querySelector('.banner');

// 	carrousel(banner);
// })




