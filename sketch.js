var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500, 200, 60,height/2);
  wall.shapeColor=color(100);
  car=createSprite(50,200,50,50);
  speed=random(40,100);
  weight=random(300,1600);
}

function draw() {
  background(30);  
  car.velocityX=speed;
 
  if(wall.x-car.x<55){
   car.velocityX=0;
   var defo=0.5*speed*speed*weight/22509;

   if(defo>180){
   car.shapeColor=color(255,0,0);
   fill("red");
   textSize(20); 
   text("THAT IS A TERRIBLE CAR!.IT'S LETHAL TO TRAVEL IN IT. GRADE: D",200,200);
   }
   if(defo<180&&defo>100){
    car.shapeColor=color(230,230,0) 
    fill("yellow");
    textSize(20);
     text("THAT CAR IS OKAY TO TRAVEL IN, GRADE: B-",200,200);  
  }
   if(defo<100){
    car.shapeColor=color(0,250,0);
    fill("green");
    textSize(20);
    text("THAT IS A GOOD CAR!,  GRADE: A",200,200);
   }
  }
  
  drawSprites();
}