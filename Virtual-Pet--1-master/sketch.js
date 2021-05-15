
//Create variables here
var Dog ;
var HappyDog;
var foodS;
var foodStock;
var database;
//var StockRemaining = Food:x;
function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
database= firebase.database();
	createCanvas(500, 500);
  Dog = createSprite(250,250,20,20);
  Dog.addImage(dogImage)
  Dog.scale = 0.5
  foodStock = database.ref("Food");
  foodStock.on("value",readStock)
  foodStock.set(20);
  
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)) {
    Dog.addImage(happyDog);
    writeStock(foodS);
    
  }
  if (keyWentUp(UP_ARROW)) {
    Dog.addImage(dogImage);
   
  }
 
  textSize(15);
  fill("blue");
  stroke("red");
  strokeWeight(5);
  text("food: " + foodS, 100, 200);
  textSize(29);
  text("Please press UP ARROW to feed dog", 0, 100);

  
  

}
function readStock(data){
  foodS = data.val();
  
}
function writeStock(x){
  if(x<0){
    x = 0
    Dog.addImage(dogImage);
  }else {
    x= x-1
  }
  database.ref('/').update({
    Food:x
  })
}



