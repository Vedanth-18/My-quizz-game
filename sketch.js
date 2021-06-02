var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
var bg;
var character1;
var img;
var fontStyle;
var gif1, gif2;

function preload(){
  bg = loadImage("bg2.png");
  character1 = loadImage("character1.png");
  img = loadImage("img.png");
  fontStyle = loadFont("Font3.ttf");
  gif2 = loadImage("2.gif");
}

function setup(){
  canvas = createCanvas(768,432);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background(bg);
  if(contestantCount === 2){
    contestant.update();
    contestant.updateCount(2);
    quiz.update(1);
  }

  if(gameState === 0){
    image(character1, 430, 200, 250, 300);
    image(img, 425, 130, 180, 150);
    push()
    fill("#ffffff");
    textFont(fontStyle);
    text("Answer the", 470, 192);
    text(" question!", 473, 208);
    pop();;
  }
  if(gameState === 1){
    clear();
    //noLoop();
    image(gif2, 100, 300, 90, 90);
    image(gif2, 658, 300, 90, 90);
    quiz.play();
  }
  console.log("Contestant Count: " + contestantCount);
}
