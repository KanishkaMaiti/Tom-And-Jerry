
var cat, bgImg, bg
var mouse, catimg1,catimg2,mouseimg1,mouseimg2, mouseimg4, catimg4


function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    mouseimg1 = loadImage("mouse1.png")
    catimg1 = loadImage("cat1.png")
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png")
    catimg2 = loadAnimation("cat2.png", "cat3.png")
    mouseimg4 = loadAnimation("mouse4.png", "mouse4.png")
    catimg4 = loadAnimation("cat4.png", "cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,50,50)
    bg.addImage(bgImg);

    cat = createSprite(700,600,20,0)
    cat.addImage(catimg1);
    cat.scale = 0.2;

    mouse = createSprite(300,600,50,50)
    mouse.addImage(mouseimg1)
    mouse.scale = 0.15

}

function draw() {
    
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2){
     
     cat.velocityX = 0;
     

cat.addAnimation("cathappy", catimg4)
cat.changeAnimation("cathappy")
mouse.addAnimation("mousehappy", mouseimg4)
mouse.changeAnimation("mousehappy")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode === LEFT_ARROW){
     mouse.addAnimation("mouseTeasing", mouseimg2)
     mouse.changeAnimation("mouseTeasing")
     mouse.frameDelay = 10;
     cat.addAnimation("catWalking", catimg2)
     cat.changeAnimation("catWalking")
     cat.frameDelay = 5;
     cat.velocityX = -5;


 }
 if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseimg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 10;
    cat.addAnimation("catWalking", catimg2)
     cat.changeAnimation("catWalking")
     cat.frameDelay = 5;
    cat.velocityX = 5;


}

}
