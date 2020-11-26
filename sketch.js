var man,manimage;
var thunder,thunderimage;
var rain,rainimage;
var ground;

function preload(){
   manimage=loadAnimation("images/man/walking_1.png","images/man/walking_2.png","images/man/walking_3.png" ,
                         "images/man/walking_4.png","images/man/walking_5.png","images/man/walking_6.png",
                         "images/man/walking_7.png","images/man/walking_8.png");
   thunderimage=loadAnimation("images/thunder/1.png","images/thunder/1.png",
                              "images/thunder/2.png","images/thunder/2.png",
                              "images/thunder/2.png","images/thunder/2.png",
                              "images/thunder/3.png","images/thunder/3.png",
                              "images/thunder/4.png","images/thunder/4.png",
                              "images/thunder/4.png","images/thunder/4.png",
                              "images/thunder/4.png"); 
   rainimage=loadAnimation("images/rain/(1).png","images/rain/(2).png","images/rain/(3).png",
                           "images/rain/(4).png","images/rain/(5).png","images/rain/(6).png");                      
}

function setup(){
  createCanvas(500, 900);
   
  ground = createSprite(250,890,500,20)
  ground.shapeColor = "brown";
 
  man = createSprite(250,705,30,50);
  man.addAnimation("manrunning",manimage);
  man.scale=0.5;

  thunder = createSprite(250,150,20,30);
  thunder.addAnimation("tundersprake",thunderimage);
  thunder.scale=0.5

  rain = createSprite(350,0,50,30)
  rain.addAnimation("raining",rainimage);
  rain.scale=5;

  rain2 = createSprite(0,0,50,30)
  rain2.addAnimation("raining2",rainimage);
  rain2.scale=5;

  rain3 = createSprite(350,400,50,30)
  rain3.addAnimation("raining",rainimage);
  rain3.scale=5;

  rain4 = createSprite(00,400,50,30)
  rain4.addAnimation("raining2",rainimage);
  rain4.scale=5;
 
  rain5 = createSprite(0,800,50,30)
  rain5.addAnimation("raining",rainimage);
  rain5.scale=5;

  rain5 = createSprite(350,800,50,30)
  rain5.addAnimation("raining",rainimage);
  rain5.scale=5;

}

function draw(){
    background("black");

    drawSprites();
}   

