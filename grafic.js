/*
  version: 1.0.0
  author: onesuper
  email: onesuperclark@gmail.com

*/


function sketchProc(p) {

	var nX, nY;
	var mouseDown = false;
    
	//global attributes 
	p.strokeSize = 10.0;
	p.strokeColor = p.color(0);	// default black
	p.strokeOpacity = 255;
	
	
    p.setup = function() {
		p.size(800, 600);
		p.background(255); // white canvas	
		p.noStroke();
		p.frameRate(60);
		nX = 0;
		nY = 0;
    }


    p.draw = function() {
		if (mouseDown ) {
			p.fill(p.strokeColor, p.strokeOpacity);
			p.ellipse(nX, nY, p.strokeSize, p.strokeSize);
		}
    }


    p.mouseMoved = function() {
		
    }

	p.mouseDragged = function() {
		nX = p.mouseX;
		nY = p.mouseY;	
	}
	
	p.mouseClicked = function() {
		
	}

	p.mousePressed = function() {
		mouseDown = true;
		nX = p.mouseX;
		nY = p.mouseY;
	}
	p.mouseReleased = function() {
		mouseDown = false;
	}

}

var canvas = document.getElementById("canvas1");

var p = new Processing(canvas, sketchProc);
