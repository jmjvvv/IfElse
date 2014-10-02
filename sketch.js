function setup()
{
   createCanvas(800, 600);
   background(0);
   fill(255);
   stroke(255);
   ellipse(400, 300, 100, 100);
}


function draw()
{
   background(0, 165, 255);
   


  if (mouseX < 100) {
  ellipse(50, 300, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 300, 150, 150);
} else if (mouseX < 300){
  ellipse(250, 300, 200, 200);
} else if (mouseX < 400){
  ellipse(350, 300, 250, 250);
} else if (mouseX < 500){
  ellipse(450, 300, 300, 300);
} else if( mouseX < 600){
  rect(550, 210, 200, 200);
} else {
  rect(650, 250, 100, 100);
}

}