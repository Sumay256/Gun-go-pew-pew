var bullet,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);
 bullet=createSprite(50,200,20,5);
 bullet.shapeColor="white";
 wall=createSprite(900,200,random(20,80),200);


 speed=random(50,100);
 weight=random(500,1500);
 bullet.velocityX=speed;
}

function draw() {
  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
  if(deformation<150){
    wall.shapeColor=color(0,255,0);
  }
  /*if(deformation>100&&deformation<180){
    wall.shapeColor=color(230,230,0);
  }*/
  }
  if(deformation>150){
    wall.shapeColor=color(255,0,0);
  }
console.log(deformation);
  background(70);  
  drawSprites();
}