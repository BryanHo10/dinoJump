var x = 200;
var y = 200;
var radius = 50;
/*var circleWidth = 50;
var circleHeight = 50;*/
var realspeed = 1;
var xspeed = realspeed;
var yspeed = realspeed;
var colorCircle = 255;
var colorA = 225;
var colorB = 225;
var colorC = 225;

function setup(){

  createCanvas(400, 600);
}

function draw(){
  background(0);
  //frameRate(5);
  x += xspeed;
  y += yspeed;

  if (x+radius/2>=width){
  	xspeed = -realspeed;
  }

  if (x-radius/2<=0){
  	xspeed = realspeed;
  }

  if (y+radius/2>=height){
  	yspeed = -realspeed;	
  }

  if (y-radius/2<=0){
  	yspeed = realspeed;
  }
  if(mouseX >= x-(radius/2) && mouseX <= x+(radius/2) 
  	&& mouseY >=y-(radius/2)&&mouseY<=y+(radius/2))
  {
  	colorA = floor(random(1,225));
  	colorB = floor(random(1,225));
  	colorC = floor(random(1,225));
  	colorCircle = color(colorA,colorB,colorC)
  }

  fill(colorCircle);
  ellipse(x, y, radius, radius);


}
