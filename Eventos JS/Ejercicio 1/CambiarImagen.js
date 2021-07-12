let imagen = document.getElementsByTagName("img")[0];
imagen.onmouseover = function(){
	imagen.src = "imagen2.jpg";
};
imagen.addEventListener("mouseout", function()	{
													imagen.src = "imagen1.jpg";
												});