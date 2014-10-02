function setup()
{
	createCanvas(800, 600);
	background(0);
	noFill(255);
	stroke(255, 255, 0);
	ellipse(400, 250, 100, 100);
}

function draw()
{
	ellipse(400, 300, mouseX, mouseY);
}
