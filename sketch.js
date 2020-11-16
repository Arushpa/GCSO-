var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,150);
  car=createSprite(100,100,100,100)
  car.shapeColor="white"
  car.velocityX=speed;

  wall=createSprite(1500,200,60,200)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  var deformation=0.5 *weight*speed*speed/22500;
  if(deformation<100){
  car.shapeColor="green";
  }
  if(100<deformation<180){
  car.shapeColor="yellow";
  }
  if(deformation>180){
    car.shapeColor="red";
   }
  drawSprites();
}