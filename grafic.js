/*
  version: 1.0.0
  author: onesuper
  email: onesuperclark@gmail.com

*/


function sketchProc(p) {

	var nowX, nowY;
	var lastX, lastY;

	var mouseDown = false;
    
	// default attributes 
	p.strokeSize = 5.0;
	p.strokeColor = p.color(0);	
	p.strokeOpacity = 255;
	
	
    p.setup = function() {
		p.size(800, 600);
		p.background(255); // white canvas	
		p.frameRate(60);
		nowX = 0;
		nowY = 0;
		lastX = 0;
		lastY = 0;
    }

    p.draw = function() {
		if (mouseDown ) {
			//p.fill(p.strokeColor, p.strokeOpacity);
			//p.ellipse(nX, nY, p.strokeSize, p.strokeSize);
			p.strokeWeight(p.strokeSize);
			p.stroke(p.strokeColor);
			p.line(lastX, lastY, nowX, nowY);
			lastX = nowX;
			lastY = nowY;
		}
    }


    p.mouseMoved = function() {
		
    }

	p.mouseDragged = function() {
		nowX = p.mouseX;
		nowY = p.mouseY;	
	}
	
	p.mouseClicked = function() {
		
	}

	p.mousePressed = function() {
		mouseDown = true;
		nowX = p.mouseX;
		nowY = p.mouseY;
		lastX = p.mouseX;
		lastY = p.mouseY;
	}
	p.mouseReleased = function() {
		mouseDown = false;
	}

}

var canvas = document.getElementById("canvas1");

var p = new Processing(canvas, sketchProc);
