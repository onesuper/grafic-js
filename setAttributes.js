/*
version: 1.0.0
author: onesuper
email: onesuperclark@gmail.com
*/



function setStrokeColor() 
{
	var color = document.getElementById("color");
	var p = Processing.getInstanceById("canvas1");
	p.strokeColor = p.color(parseInt(color.value.substr(1, 2), 16),
							parseInt(color.value.substr(3, 2), 16),
							parseInt(color.value.substr(5, 2), 16)
						   );
	
}

function setStrokeSize()
{
	var p = Processing.getInstanceById("canvas1");
	p.strokeSize = 20.0;
}