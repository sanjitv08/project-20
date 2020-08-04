var car, wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,50,height/2);
}

function draw() {
  background(255,255,255); 
  
  wall.shapeColor=color(255,150,0);
  car.velocityX=speed; 
  
  if ((car.x-wall.x<(car.width+wall.width)/2)&&(wall.x-car.x<(car.width+wall.width)/2)){
    car.velocityX=0;
    var deformation=((0.5*weight*speed*speed)/22500);
    
    if (deformation<100) {car.shapeColor=color(0,255,0);}
    else
       if((deformation>=100)&&(deformation<180)){car.shapeColor=color(230,230,0);}
       else
          car.shapeColor=color(255,0,0);
  }
  drawSprites();
}