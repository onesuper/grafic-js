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
		processing.stroke(0);
		//processing.frameRate(40);
		nX = 0;
		nY = 0;
		
		
    }

    processing.draw = function() {
		
		
		processing.fill(0, 100, 120);
		processing.ellipse(nX, nY, radius, radius);
		
    }


    processing.mouseMoved = function() {
		
    }

	processing.mouseDragged = function() {
		
		nX = processing.mouseX;
		nY = processing.mouseY;
		
	}
	
	processing.mousePressed = function() {
		
	
	}
	processing.mouseReleased = function() {
		
	}

}

var canvas = document.getElementById("canvas1");

var p = new Processing(canvas, sketchProc);
