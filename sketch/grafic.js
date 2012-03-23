/*
  version: 1.0.0
  author: onesuper
  email: onesuperclark@gmail.com

*/


// ban the text cursor when the mouse is down in canvas
var canvas = document.getElementById("canvas1");
canvas.onmousedown = function() {return false;}


//sketch procceeding mode
function sketchProc(p) {

	var pathQueue = new Queue();
    
	// default attributes 
	p.strokeSize = 1.0;
	p.strokeColor = p.color(0);	
	p.strokeOpacity = 255;
	p.strokeTail = 50;

    p.setup = function() {
		p.size(800, 600);
		p.background(255); // white canvas	
		p.frameRate(60);
    }

    p.draw = function() {
    }



	p.mouseDragged = function() {
		p.strokeWeight(p.strokeSize);
		p.stroke(p.strokeColor);
		p.smooth();
		p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);

		if (pathQueue.getLength() <= 100) {
			pathQueue.enqueue(new Array(p.mouseX, p.mouseY));
		}

		while (pathQueue.getLength() >= p.strokeTail) {
			var aPoint = pathQueue.dequeue();
			p.strokeWeight(1.0);
			p.stroke(p.strokeColor);
			p.line(aPoint[0], aPoint[1], p.mouseX, p.mouseY);
		}

	}
	
	p.mousePressed = function() {
		//set attributes everytime the mouse is pressed
		setStrokeSize(sld1.value);
		setStrokeTail(sld2.value);
	}

	p.mouseReleased = function() {
		pathQueue = new Queue();
	}
}


function calligraphProc(p) {

	
    var radius = 10.0;
	var opacity = 60;

	var pathArray = new Array();
	

	// default attributes 
	p.strokeSize = 1.0;
	p.strokeColor = p.color(0);	
	p.strokeOpacity = 255;
	p.strokeTail = 50;

    p.setup = function() {
		p.size(800, 600);
		p.background(255); // white canvas	
		p.frameRate(30);
    }

    p.draw = function() {
	
		for(var i=0; i<pathArray.length; i++) {
			p.fill(p.strokeColor, opacity);
			p.noStroke();
			p.smooth();
			p.ellipse(pathArray[i][0], pathArray[i][1], radius, radius);
		}
		
		if (opacity > 0) opacity -= 0.5;
		if (radius < 30)
			radius += 1;
		else
			p.noLoop();

    }

	p.mouseDragged = function() {
		p.fill(p.strokeColor);
		p.noStroke();
		p.smooth();
		//p.ellipse(p.mouseX, p.mouseY, 10, 10);
		pathArray.push(new Array(p.mouseX, p.mouseY));
	}
	
	p.mousePressed = function() {
		//set attributes everytime the mouse is pressed
		setStrokeSize(sld1.value);
		setStrokeTail(sld2.value);
		radius = 10.0;
		opacity = 60;
		p.fill(p.strokeColor);
		p.noStroke();
		p.smooth();
		p.ellipse(p.mouseX, p.mouseY, radius, radius);
		p.loop();

	}

	p.mouseReleased = function() {
		pathArray = new Array();
	
	}
}

//initalize the sketch canvas when the app is launched 
initSketchMode();

function initSketchMode() {
	var canvas = document.getElementById("canvas1");
	var processing = new Processing(canvas, sketchProc);
}


function setSketchMode() {
	var p = Processing.getInstanceById("canvas1");
	p.exit();
	var canvas = document.getElementById("canvas1");
	var processing = new Processing(canvas, sketchProc);
}

function setCalligraphMode() {
	var p = Processing.getInstanceById("canvas1");
	p.exit();
	var canvas = document.getElementById("canvas1");
	var processing = new Processing(canvas, calligraphProc);
}


function clearAll() {
	var processing = Processing.getInstanceById("canvas1");
	processing.setup();
}