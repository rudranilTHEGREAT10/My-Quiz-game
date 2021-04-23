class Question 
{
    constructor()
    {
        this.title = createElement("h2");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.button = createButton("Submit");
        this.input1 = createInput("Enter your name!");
        this.input2 = createInput("Type your answer!");
        this.yeet = createElement("h2");
        this.correct = createElement("h2")
    }

    hide()
    {
        this.title.hide();
        this.question.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }


    display()
    {
       this.title.html("Pro Astronomer Question");
       this.title.position(350,0);

       this.question.html("Which of the following is not a name of a star?");
       this.question.position(100,30);
       this.option1.html("1:UY Scuti ");
       this.option1.position(150,60);
       this.option2.html("2: Kepler123b");
       this.option2.position(150,100);
       this.option3.html("3: Antares");
       this.option3.position(150,140);
       this.option4.html("4: VY Canis Majoris");
       this.option4.position(150,180);
       this.input1.position(140,240);
       this.input2.position(340,240)
       this.button.position(300, 300);
       this.button.mousePressed(()=>{
       this.title.hide();
       this.input1.hide();
       this.input2.hide();
       this.button.hide();
       contestant.answer = this.input2.value();
       contestant.name = this.input1.value();
       contestantCount+=1;
       contestant.index = contestantCount;
       contestant.update();
       contestant.updateCount(contestantCount);
       this.yeet.html("Your choice: " + contestant.answer)
       this.yeet.position(230, 300);
       if(contestant.answer==="2")
       {
        //fill("green");
        this.correct.html("CORRECT!!!");
        this.correct.position(300,330);
       }
      else
      {
        //fill("red");
        this.correct.html("WRONG!!!");
        this.correct.position(300,330);
      }
    });




}


}//end of js file