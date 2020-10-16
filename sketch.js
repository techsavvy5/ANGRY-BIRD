 var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,pig,box1,box2,pig1,strike;
var wall1,wall2,wall3;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	box=createSprite(500,560,55,200);
	box.shapeColor="red";
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	pig=createSprite(560,635,60,50);
    pig.shapeColor="pink";
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
 	World.add(world, ground);

	 box1=createSprite(610,560,55,200);
	 box1.shapeColor="red";
	 

	 box2=createSprite(550,450,200,20);
	 box2.shapeColor="red";

	 pig1=createSprite(560,410,60,50);
	 pig1.shapeColor="pink";

	 strike=createSprite(100,500,20,20);
	 strike.shapeColor="blue";

	 wall1=createSprite(700,100,1700,10);
	 wall1.shapeColor="red";

	 wall2=createSprite(20,100,10,1700);
	 wall2.shapeColor="red";

	 wall3=createSprite(800,100,10,1700);
	 wall3.shapeColor="red";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
if(keyDown(RIGHT_ARROW)){
	strike.velocityX=7;
}
if(strike.isTouching(box)||strike.isTouching(box1)||strike.isTouching(box2)||strike.isTouching(pig)||strike.isTouching(pig1)){
	box.velocityX=3;
	box.velocityY=-5;

	box1.velocityX=5;
	box1.velocityY=-8;

	box2.velocityX=5;
	box2.velocityY=-6;

	pig.velocityX=4;
	pig.velocityY=5;

	pig1.velocityX=5;
	pig1.velocityY=-8;
}
if(strike.isTouching(wall1)||strike.isTouching(wall2)||strike.isTouching(wall3)){
	strike.velocityX=50;
	strike.velocityY=100
}
 
  drawSprites();
 
}



