/*
version: 1.0.0
author: onesuper
email: onesuperclark@gmail.com

 */


function sketchProc(processing) {

    var radius = 10.0;
    var nX, nY;


    processing.setup = function() {
	processing.size(800, 600);
	processing.background(225);	
	processing.strokeWeight(1);
	nX = 0;
	nY = 0;
    }

    processing.draw = function() {
	processing.fill(0, 121, 184);
	if (processing.mousePressed) {
	    processing.ellipse(nX, nY, radius, radius);
	}
    }


    processing.mouseMoved = function() {
	nX = processing.mouseX;
	nY = processing.mouseY;
    }

}

var canvas = document.getElementById("canvas1");

var p = new Processing(canvas, sketchProc);
