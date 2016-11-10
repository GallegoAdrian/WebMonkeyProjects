// Get the modal
var modal_carta = document.getElementById('myModal_carta');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img;

var x = document.getElementsByClassName("myImg");
var i;
// recorremos bucle para que actue por todas la imagenes de la misma class
for (i = 0; i < x.length; i++) {
    img = document.getElementsByClassName('myImg')[i];
	
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	
	img.onclick = function(){
		//averiguamos nombre de imagen y ruta. luego la modificamos para que escoja otras imagenes más grandes
		var str = this.src;
		var res = str.replace("img/food/", "img/food/big/");
		modal_carta.style.display = "block";
		modalImg.src = res; /*this.src */
		captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close_carta")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal_carta.style.display = "none";
	}
}
