const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var blobObject1,blobObject2,blobObject3,blobObject4;
var roof;
var rope1;

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	blobObject1 = new blob(400,600);
	blobObject2 = new blob(340,600);
	blobObject3 = new blob(280,600);
	blobObject4 = new blob(460,600);
	blobObject5 = new blob(520,600);

	roof= new Roof(400,400,500,50);

	rope1 = new Rope(blobObject1.body,roof.body,-60*2,0);

	Engine.run(engine);
  
}


function draw() {
  background(rgb(230, 230, 230));
  blobObject1.display();
  blobObject2.display();
  blobObject3.display();
  blobObject4.display();
  blobObject5.display();
  roof.display();
  drawSprites();
 
}



