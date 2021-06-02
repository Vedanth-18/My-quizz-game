class Quiz {
  constructor(){
    this.image = loadImage("bg1.png");
    this.text = loadFont("Font.ttf");
    this.font = loadFont("Font2.ttf");
    this.font = loadFont("Font3.ttf");
    this.gif1 = loadImage("1.gif");
    this.gif2 = loadImage("2.gif");
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    background(this.image);
    question.hide();
    question.title.hide();
    question.input1.hide();
    question.button.hide();
    question.input2.hide();
    question.option1.hide(); 
    question.option2.hide();
    question.option3.hide();
    question.option4.hide();

    push();
    textStyle(BOLD);
    textSize(35);
    fill("BLACK");
    textStyle(BOLD);
    textSize(50);
    textFont(this.text);
    text("RESULT OF THE QUIZ",200, 120);
    pop();
    
    Contestant.getPlayerInfo();
    
    if(allContestants !== undefined){
      console.log(allContestants);
      push();
      textSize(35);
      fill("BLACK");
      textStyle(BOLD);
      textSize(23);
      textFont(this.text);
      text("NOTE: Correct answers are highlighted in green colour", 150, 230);
      pop();
      for(var plr in allContestants){
        var correctAnswer = "2";
        if(correctAnswer === allContestants[plr].answer){
           //var correct = allContestants[plr].name;
           push()
           fill("#6fe657");
           textSize(20);
           textStyle(BOLD);
           console.log("Name 1: " + allContestants[plr].name);
           textFont(this.font);
           text("The correct answer is given by: " + allContestants[plr].name, 150, 260);
           text("The correct answer is: Option 2: Envelope", 150, 280);
           pop();
        }
        // else if(correctAnswer !== allContestants[plr].answer){
        //    //var notCorrect = allContestants[plr].name;
        //    //console.log("notCorrect: " + notCorrect);
        //    fill("#e65c57");
        //    textSize(20);
        //    textStyle(BOLD);
        //    text("The answer given by " + allContestants[plr].name + " is wrong", 150, 300);
        //    text("The correct answer is: Option 2: Envelope", 150, 320);
        // }
       }
    }
  }
}
