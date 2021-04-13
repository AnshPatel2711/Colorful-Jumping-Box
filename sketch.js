var canvas;
var music;
var surface1, surface2, surface3, surface4, edges;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
surface1 = createSprite(100, 580, 180, 20);
surface1.shapeColor = "blue";
surface2 = createSprite(300, 580, 180, 20);
surface2.shapeColor = "yellow";
surface3 = createSprite(500, 580, 180, 20);
surface3.shapeColor = "red";
surface4 = createSprite(700, 580, 180, 20);
surface4.shapeColor = "green";

    //create box sprite and give velocity
box = createSprite(random(20,750),200, 20, 20);
box.shapeColor = "white";
box.velocityX= 5;
box.velocityY= 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();
box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box) && box.bouceOff(surface1)){
    box.shapeColor= "blue";
}
if(surface2.isTouching(box) && box.bouceOff(surface2)){
    box.shapeColor= "white";
    box.setVelocity(0,0);
}
if(surface3.isTouching(box) && box.bouceOff(surface3)){
    box.shapeColor= "red";
}
if(surface4.isTouching(box) && box.bouceOff(surface4)){
    box.shapeColor= "green";
}

    drawSprites();
}
