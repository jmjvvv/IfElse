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
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 150, 150);
} else if (mouseX < 300){
  ellipse(250, 200, 200, 200);
} else if (mouseX < 400){
  ellipse(350, 200, 250, 250);
} else if (mouseX < 500){
  ellipse(450, 200, 300, 300);
} else if( mouseX < 600){
  ellipse(550, 200, 350, 350);
} else {
  ellipse(650, 200, 400, 400);
}

}