class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.reset = createButton("RESET");
    this.font = loadFont("Font4.ttf");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.question.hide();
  }

  display(){
    push();
    textFont("Arial");
    textStyle(BOLD);
    fill("#000000");
    this.title.html("MyQuiz Game");
    this.title.style.fontFamily=this.font;
    this.title.fontWeight = "light";
    this.title.position(312, 60);

    this.question.html("Question:What starts and ends with the letter ‘E’, but has only one letter?");
    this.question.position(105,115);
    this.option1.html("1: Everyone " );
    this.option1.position(135, 145);
    this.option2.html("2: Envelope" );
    this.option2.position(135, 165);
    this.option3.html("3: Estimate " );
    this.option3.position(135, 185);
    this.option4.html("4: Example" );
    this.option4.position(135, 205);

    this.input1.position(135, 260);
    this.input2.position(135, 290);
    this.button.position(135, 320);

    this.reset.position(600, 390);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.reset.mousePressed(()=>{
      quiz.update(0);
      contestant.updateCount(0);
      text("Refresh the page to play again", 380, 360);
    })
  }
}
