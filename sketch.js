
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy, boyImg;
var tree, treeImg;
var stone, sling;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload()
{

	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	boy = createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale=0.125;
	
	tree = createSprite(775,375);
	tree.addImage(treeImg);
	tree.scale=0.42;

	ground = new Ground(500,625,1200,20);

	stone = new Stone(100,460,50,40);

	mango1 = new Mango(600,290,34,15);
	mango2 = new Mango(855,325,35,15);
	mango3 = new Mango(670,260,35,15);
	mango4 = new Mango(730,200,35,15);
	mango5 = new Mango(710,320,36,15);
	mango6 = new Mango(780,250,36,15);
	mango7 = new Mango(825,170,35,16);
	mango8 = new Mango(880,260,34,15);
	mango9 = new Mango(940,220,33,15);
	mango10 = new Mango(980,350,35,15);
	mango11 = new Mango(950,300,35,15);
    
    sling = new SlingShot(stone.body,{x:100, y:460});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  textSize(30);
  fill('purple');
  textFont("Broadway");
  text("Press Space to get another stone to Play!!",50 ,50);

  Engine.update(engine);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  
  drawSprites();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  stone.display();

  ground.display();
}
 function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectCollision(lstone,lmango){

	if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x  < lmango.diametre + lstone.diametre
		&&lstone.body.position.y -lmango.body.position.y < lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed(){
    if(keyCode===32){
	 Matter.Body.setPosition(stone.body,{x:100,y:460});
	 sling.attach(stone.body);
	}
}

