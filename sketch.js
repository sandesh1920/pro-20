
var cat,mouse,catImg,mouseImg, catImg2, catAnimation, mouseImg2, mouseAnimation;

var backGround,backGroundImage;


function preload() {
    //load the images here
    backGroundImage = loadImage("images/garden.png")
 
    mouseImg =  loadImage("images/jerryOne.png")

    mouseImg2 = loadAnimation("images/jerryFour.png")

    catImg   =  loadImage("images/tomOne.png")

    catImg2  =  loadAnimation("images/tomFour.png")

    catAnimation = loadAnimation("images/tomTwo.png","images/tomThree.png");
    
    mouseAnimation = loadAnimation("images/jerryTwo.png","images/jerryThree.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backGround = createSprite(500,400);
    backGround.addImage(backGroundImage);
    
    cat = createSprite(800,600);
    cat.addImage(catImg);
    cat.scale = 0.15

    mouse = createSprite(200, 600)
    mouse.addImage(mouseImg)
    mouse.scale = 0.15


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        mouse.addAnimation("yasir",mouseImg2)
        mouse.changeAnimation("yasir")
        mouse.velocityX = 0

        cat.addAnimation("yassir",catImg2)
        cat.changeAnimation("yassir")
        cat.velocityX = 0
    }
    if (keyDown("LEFT_ARROW")){

        keyPressed()

    }

    
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning", catAnimation);
     cat.changeAnimation("catRunning")

     mouse.addAnimation("mouseDancing", mouseAnimation)
     mouse.changeAnimation("mouseDancing")
   }

}
