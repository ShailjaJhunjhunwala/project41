const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var droplets,boy,thunder;
var thunder1_img,thunder1_img,thunder1_img,thunder1_img;
var ThunderGroup;

function preload(){
    thunder1_img = loadImage("images/1.png")
    thunder1_img = loadImage("images/2.png")
    thunder1_img = loadImage("images/3.png")
    thunder1_img = loadImage("images/4.png")
    ThunderGroup = new Group()
}

function setup(){
   createCanvas(300,500)
   rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;
    
    boy = new Umbrella(100,500,20)
    if (frameCount % 05 === 0) {
        droplets = new Drops(random(300, 10), 10, 10);

        droplets.velocityY = 6;
    }

	Engine.run(engine);
  
    
}

function draw(){
    background(0)
    if (frameCount % 20 === 0) {
        thunder = createSprite(random(300, 100), random(300, 100), 100, 100);
        var rand = Math.round(random(1,5));
        switch(rand){
        case 1: thunder.addImage("thunder",thunder1_img);
        break;
        case 2: thunder.addImage("thunder", thunder2_img);
        break;
        case 3: thunder.addImage("thunder", thunder3_img);
        break;
        case 4: thunder.addImage("thunder", thunder4_img);
        break;
     }
        ThunderGroup.add(thunder);
    }
    droplets.display();
    drawSprites() 
}   

