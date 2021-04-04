var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 660);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.20;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

	fairy.velocityX = 0;
	fairy.velocityY = 0;

	if(star.y > 485)	{
		star.velocityY = 0;
	}
	
	drawSprites();

}

function keyPressed() {
	
	if(keyCode === RIGHT_ARROW) {
		fairy.velocityX = 15;

	}

	if(keyCode === LEFT_ARROW) {
		fairy.velocityX = -15;
		
	}

	if(keyCode === DOWN_ARROW) {
		star.velocityY = 10;
		
	}
}
