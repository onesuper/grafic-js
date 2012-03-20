/*
version: 1.0.0
author: onesuper
email: onesuperclark@gmail.com
*/



// called by the hook in the color picker
function setStrokeColor(color)
{
	var p = Processing.getInstanceById("canvas1");
	p.strokeColor = p.color(parseInt(color.substr(1, 2), 16),
							parseInt(color.substr(3, 2), 16),
							parseInt(color.substr(5, 2), 16)
						   );
	$("#colorbar .input").val(color);
	$("#colorbar .show").css({"background" : color}); // display the selected color")
}


function setStrokeSize()
{
	var p = Processing.getInstanceById("canvas1");
	p.strokeSize = 20.0;
}