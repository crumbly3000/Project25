
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObj,paperObj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObj=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new paper(200, 642, 50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObj.display();
  dustbinObj.display();
  paperObj.display();
}
