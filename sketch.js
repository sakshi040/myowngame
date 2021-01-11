const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Backgroundimg;

bombs=[];
coins=[];
monsters=[];

function preload(){
Backgroundimg=loadImage("bg.jpg")
}

function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    player=new Player(675,325,100,100)
    ground=new Ground(675,640,1350,20)
}

    function draw(){
        background(Backgroundimg);
        Engine.update(engine);

        player.display();
        ground.display();

        for(var j=0;j < bombs.length; j++) {
            bombs[j].display();

        for(var j=0;j < coins.length; j++) {
            coins[j].display();

        for(var j=0;j < monsters.length; j++) {
            monsters[j].display();

        if (frameCount%30===0){
            bombs.push(new Bomb(random(width/2-30,width/2+30),10,10))
                      }
        if (frameCount%30===0){
            coins.push(new Coins(random(width/2-30,width/2+30),10,10))
                      }
        if (frameCount%30===0){
            monsters.push(new Monster(random(width/2-30,width/2+30),10,10))
                      }

    }
}
        }
    }