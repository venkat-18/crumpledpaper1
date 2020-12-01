
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	rect1=createSprite(500,620,10,100);
rect1.shapeColor="cyan";
rect2=createSprite(700,620,10,100);
rect2.shapeColor="cyan";
rect3=createSprite(600,658,200,10);
rect3.shapeColor="cyan";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);


	 paper=new Paper();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  drawSprites();
 
}



