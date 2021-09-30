
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var  apple1,apple2,apple3,apple4,apple5,apple6,apple7,apple8,apple9,apple10,apple11,apple12;
var world,girl;
var launchingForce =100;

var launcherObject 

function preload()
{
	girl = loadImage("girl.png");
	apple1 = loadImage("apple.png");
	stoneObj = loadImage("stone.png");
	treeObj = loadImage("tree.png");
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new Stone(235,420,40); 

	apple1=new Apple(1100,100,30)
  apple2=new Apple(1170,130,30);
	apple3=new Apple(1010,140,30);
	apple4=new Apple(1000,70,30);
	apple5=new Apple(1100,70,30);
	apple6=new Apple(1000,230,30);
	apple7=new Apple(900,230,40);
	apple8=new Apple(1140,150,40);
	apple9=new Apple(1100,230,40);
	apple10=new Apple(1200,200,40);
	apple11=new Apple(1120,50,40);
	apple12=new Apple(900,160,40);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
  
  launcherObject = new Launcher  (stoneObj.body,{x: 235, y: 400});


	Engine.run(engine);
  
}


function draw() {
  
  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(girl,200,290,200,300);

  treeObj.display();
  stoneObj.display();
  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple6.display();
  apple7.display();
  apple8.display();
  apple9.display();
  apple10.display();
  apple11.display();
  apple12.display();

  stoneObj.display();
  groundObject.display();
  
  launcherObject.display();

  detectollision(stoneObj,apple1);
  detectollision(stoneObj,apple2);
  detectollision(stoneObj,apple3);
  detectollision(stoneObj,apple4);
  detectollision(stoneObj,apple5);
  detectollision(stoneObj,apple6);
  detectollision(stoneObj,apple7);
  detectollision(stoneObj,apple8);
  detectollision(stoneObj,apple9);
  detectollision(stoneObj,apple10);
  detectollision(stoneObj,apple11);
  detectollision(stoneObj,apple12);
  
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){

	launcherObject.fly();
  }
  function keyPressed(){
	if(keyCode=== 32 ){
	  Matter.Body.setPosition (stoneObj.body,{x:35,y:420});
	  launcherObject.attach(stoneObj.body);
	}
  }
  function detectollision(lstone,lapple){

	appleBodyPosition=lapple.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x, appleBodyPosition.y)
		if(distance<=lapple.r+lstone.r)
	  {
		  Matter.Body.setStatic(lapple.body,false);
	  }
	}


