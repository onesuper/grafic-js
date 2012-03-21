/*
  version: 1.0.0
  author: onesuper
  email: onesuperclark@gmail.com

*/


// ban the text cursor when the mouse is down in canvas
var canvas = document.getElementById("canvas1");
canvas.onmousedown = function() {return false;}

function sketchProc(p) {

	var nowX, nowY;
	var lastX, lastY;
	var pathQueue = new Queue();
	var inStroke = false;
    
	// default attributes 
	p.strokeSize = 1.0;
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

		if(inStroke) {
			p.strokeWeight(p.strokeSize);
			p.stroke(p.strokeColor);
			p.smooth();
			p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);

			if (pathQueue.getLength() <= 100) {
				pathQueue.enqueue(new Array(p.mouseX, p.mouseY));
			}

			
			while (pathQueue.getLength() >= 50) {
				var aPoint = pathQueue.dequeue();
				p.strokeWeight(1.0);
				p.stroke(p.strokeColor);
				p.line(aPoint[0], aPoint[1], p.mouseX, p.mouseY);
			}


		}	
    }



	p.mouseDragged = function() {
		inStroke = true;

	}
	


	p.mouseReleased = function() {
		inStroke = false;
	}

}

var canvas = document.getElementById("canvas1");

var p = new Processing(canvas, sketchProc);
