btn = document.getElementById("myBtn");
btn.onclick = function setup(){
	btn.remove();
	document.getElementById("holder").innerHTML = '<canvas id="canvas" width="800" height="400">'+
	'</canvas><button type="button" class="btnClear" onclick="clearButton()" >Clear</button>';
	drawCanvas();
	alert("Please click on five arbitary spots on the screen!");
}



function drawCanvas(){
	var ctx = document.getElementById("canvas").getContext('2d');
	ctx.canvas.addEventListener('click', function(event){
	var x = event.clientX - ctx.canvas.offsetLeft;
	var y = event.clientY - ctx.canvas.offsetTop;
	drawRect(x,y,randomNumber(),randomNumber());
	//randomShape(x,y);
	});
}

// Generates random color
function randomColor(){
	var colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"]
	var randomNumber = Math.floor(Math.random() * 6);
	var randomColor = colors[randomNumber];
	
	return randomColor;
}

//Creates random number between 20-60
function randomNumber(){
	var randomNumber = Math.floor(Math.random() * 80) + 20;
	return randomNumber;
}
// Resets canvas
function clearButton(){
	var ctx = document.getElementById("canvas").getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
}
// Draws rectangle
function drawRect(x, y, n1, n2){
	var ctx = document.getElementById("canvas").getContext('2d');
	ctx.save();
	ctx.fillStyle = randomColor();
	ctx.fillRect(x,y,n1,n2);
	ctx.restore();
	ctx.fill(); 
}

/***
// Meant to generate random shape but could not get it to work.
function randomShape(x, y){
	var ctx = document.getElementById("canvas").getContext('2d');
	var radius  =  randomNumber();
	var dCircle = drawCircle(ctx, x, y, radius);
	var dRect = drawRect(x,y,randomNumber(),randomNumber());
	var dOval = drawEllipse(ctx, x, y, randomNumber(), randomNumber());
	//Is this correct? This is meant to loop through the shapes var and pick 1 shape.
	var shapes = [drawCircle(ctx, x, y, radius),drawRect(x,y,randomNumber(),randomNumber()),
	drawEllipse(ctx, x, y, randomNumber(), randomNumber())];
	var pick = shapes[Math.floor(Math.random()*shapes.length)];
	//var pick = shapes[random];
	
	return pick;
}

// Draws circle but not implemented
function drawCircle(ctx, x, y, radius){
	var ctx = document.getElementById("canvas").getContext('2d');
	var startAngle        = (Math.PI/180)*0;
	var endAngle          = (Math.PI/180)*360;  
	ctx.beginPath();
	ctx.arc(x, y, radius,startAngle, endAngle, false);
	ctx.fillStyle = randomColor();
	ctx.fill();              
}

// Draws oval but not implemented
function drawEllipse(ctx, cx, cy, rx, ry){
	var ctx = document.getElementById("canvas").getContext('2d');
    ctx.save(); // save state
    ctx.beginPath();
    ctx.translate(cx-rx, cy-ry);
    ctx.scale(rx, ry);
    ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);
	ctx.fillStyle = randomColor();
	ctx.fill();
    ctx.restore(); // restore to original state
    ctx.stroke();
}
***/
