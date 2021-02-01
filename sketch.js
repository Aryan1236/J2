
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	, paper;
var world;


function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650,10);
	paper = new Paper (100,500,10);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 


  dustbinObj.display();
  groundObject.display();
  
  paper.display();

  console.log(mouseX,mouseY);

}

function keyPressed ()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y: -15});
	}
}