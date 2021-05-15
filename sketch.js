const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var background,backgrounImg;

var ground,ground2,ground3,groundImg;

var lucky1,lucky2;

var mario1,mario;

var brick1,brick2,brick3;

var pipe1;

var enemy1,enemy2,enemyImg;

var death;

var score = 0

var invisground;

var invisbrick1,invisbrick2,invisbrick3;

var invislucky1,invislucky2;

var a = 0;

var m;

var pipeImg;

var gameState = 1;

var flycount = 1;

var i = 0;

var h = 0;

var k = 0;

var m = 0;

function preload(){
  mario1 = loadAnimation("sprites/mario1.png","sprites/mario2.png","sprites/mario3.png");

  enemyImg = loadImage("sprites/goomba.png");

  death = loadImage("sprites/ggoomba.png");

  groundImg = loadImage("sprites/ground.png");

  brickImg = loadImage("sprites/brick.png");

  lucky = loadImage("sprites/lucky.png");

  pipeImg = loadImage("sprites/pipe.png");

  scoreBrick = loadImage("sprites/scorebrick.png");
}

function setup() {
  createCanvas(820,550);
 
  engine = Engine.create();
	world = engine.world;

  mario = createSprite(100,489,10,10);
  mario.addAnimation("running",mario1);
  mario.frameDelay = 5;
  mario.setCollider("rectangle",0,0,50,100);

  invislucky1 = createSprite(487,300,40,40);

  invislucky2 = createSprite(570,300,40,40);

  invislucky3 = createSprite(487,300,40,40);

  invislucky4 = createSprite(570,300,40,40);

  invisground = createSprite(400,490,800,50);
  invisground.visible = false;

  invisbrick1 = createSprite(445,320,42,1);
  invisbrick1.visible = false;

  invisbrick2 = createSprite(529,320,45,1);
  invisbrick2.visible = false;

  invisbrick3 = createSprite(611,320,42,1);
  invisbrick3.visible = false;

  invisbrick4 = createSprite(445,280,42,1);
  invisbrick4.visible = false;

  invisbrick5 = createSprite(529,280,45,1);
  invisbrick5.visible = false;

  invisbrick6 = createSprite(611,280,42,1);
  invisbrick6.visible = false;

  invisbrick7 = createSprite(424,300,1,42);
  invisbrick7.visible = false;

  invisbrick8 = createSprite(631,300,1,42);
  invisbrick8.visible = false;

  invisbrick9 = createSprite(445,321,32,1);
  invisbrick9.visible = false;

  invisbrick10 = createSprite(529,321,32,1);
  invisbrick10.visible = false;

  invisbrick11 = createSprite(611,321,32,1);
  invisbrick11.visible = false;

  invissky = createSprite(410,0,820,1);
  invissky.visible = false;

  invispipe = createSprite(200,410,75,35);

  ground1 = createSprite(80,535,800,50);
  ground1.addImage(groundImg);
  ground2 = createSprite(410,535,800,50);
  ground2.addImage(groundImg);
  ground3 = createSprite(740,535,800,50);
  ground3.addImage(groundImg);

  brick1 = createSprite(445,300,50,50);
  brick1.addImage("a",brickImg);
  brick1.addImage("b",scoreBrick);
  brick1.setCollider("rectangle",0,0,200,200);
  brick1.scale = 0.2

  brick2 = createSprite(529,300,50,50);
  brick2.addImage(brickImg);
  brick2.scale = 0.2
  brick2.setCollider("rectangle",0,0,200,200);

  brick3 = createSprite(611,300,50,50);
  brick3.addImage(brickImg);
  brick3.scale = 0.2
  brick3.setCollider("rectangle",0,0,200,200);

  lucky1 = createSprite(487,300,50,50);
  lucky1.addImage(lucky);

  lucky1.scale = 0.13;
  lucky2 = createSprite(570,300,50,50);

  lucky2.addImage(lucky);
  lucky2.scale = 0.13;
 
  pipe1 = createSprite(200,430,50,50);
  pipe1.addImage(pipeImg);
  pipe1.scale = 0.7
  pipe1.setCollider("rectangle",0,0,100,115);

  enemy1 = createSprite(700,442,30,30);
  enemy1.addImage(enemyImg);
  enemy1.scale = 0.5
  enemy1.velocityX = -2
  enemy1.setCollider("rectangle",0,0,80,80);

  enemy2 = createSprite(800,442,30,30);
  enemy2.addImage(enemyImg);
  enemy2.scale = 0.5
  enemy2.velocityX = -2
  enemy2.setCollider("rectangle",0,0,80,80);

  // var render = Render.create({ element: document.body, engine: engine, options: { width: 1000, height: 700, wireframes: false } }); Render.run(render);

  Engine.run(engine)
}

function draw() {
  background("lightblue");

  mario.collide(invislucky1);
  mario.collide(invislucky2);

  mario.collide(invislucky3);
  mario.collide(invislucky4);

  mario.collide(invisbrick1); 
  mario.collide(invisbrick2); 
  mario.collide(invisbrick3); 

  mario.collide(invisbrick4); 
  mario.collide(invisbrick5); 
  mario.collide(invisbrick6); 

  mario.collide(invisbrick7); 
  mario.collide(invisbrick8); 

  mario.collide(invisground);

  mario.collide(invissky);

  mario.collide(invispipe);

  if(keyWentDown("space") && mario.y>330 && mario.y === 415){
     mario.velocityY = -20;
     mario.collide(invisground)
  }

  mario.velocityY = mario.velocityY + 0.8;

  if(mario.isTouching(invispipe)){
    mario.velocityY = 0;
  }

  if(mario.isTouching(pipe1)){
    if(keyWentDown("space") && mario.y>330){
      mario.velocityY = -20;
      mario.collide(invisground);
    }
   mario.velocityY = mario.velocityY + 0.8;
  }

  if(keyDown("right_arrow")){
    mario.x = mario.x + 4
  }
  if(keyDown("left_arrow")){
    mario.x = mario.x - 4
  }
   
  if(keyDown("right_arrow") && a===1){
    mario.mirrorX(mario.mirrorX() * -1) 
    a = 0
  }
   if(keyDown("left_arrow") && a===0){ 
     mario.mirrorX(mario.mirrorX() * -1) 
     a = 1
    }

    if(mario.isTouching(invisbrick7)){
       mario.collide(invisbrick7);
  }

  if(mario.isTouching(invisbrick8)){
    mario.collide(invisbrick8);
}

  if(mario.y === 229 || mario.y === 229.5){
    if(keyWentDown("space")){
      mario.velocityY = -20;
   }
  }

  if(mario.isTouching(invisbrick9) && i < 3){
    i = i + 1
    score = score + 100
  }

  if(i === 3){
    brick1.changeImage("b",scoreBrick);
    brick1.scale = 0.8
 }

 if(mario.isTouching(invisbrick10) && h <= 3){
   m = m + 1
   h = m - 2
   score = score + 50
   console.log(h,m);
}

if(h === 3){
  brick2.addImage(scoreBrick);
  brick2.scale = 0.8
}

if(mario.isTouching(invisbrick11) && k < 3){
  k = k + 1
  score = score + 100
}

if(k === 3){
  brick3.addImage(scoreBrick);
  brick3.scale = 0.8
}

  if(enemy1.x === 256){
     enemy1.velocityX = 2
  }
  if(enemy1.x === 794){
     enemy1.velocityX = -2
  }

  if(enemy2.x === 256){
    enemy2.velocityX = 2
 }
 if(enemy2.x === 794){
    enemy2.velocityX = -2
 }

 if(mario.isTouching(enemy1) && mario.y >= 415){
  enemy1.addImage(death);
  enemy1.scale = 0.4 
  enemy1.velocityX = 0
}

if(mario.isTouching(enemy2) && mario.y >= 415){
  enemy2.addImage(death);
  enemy2.scale = 0.4 
  enemy2.velocityX = 0
}

  drawSprites();

  if(score === 900){
    fill("red");
    textSize(80);
    fill("white");
    text("YOU WIN!",210,235);
    text(score,350,305);
  }

  fill("white");
  textSize(30);
  text("Score: "+score,50,50);
}
  