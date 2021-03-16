import { Component, OnInit } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Question } from '../question';





const homeBox = document.querySelector(".home-box");



let questionCounter =0;
let currentQuestion;
let availableQuestions=[];
let availableOptions=[];
let correctAnswers = 0;
let attempt = 0;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  
  questions:Question[];
  quizComponent:QuizComponent;
  
  constructor() {
    
  }

//push the questions into availableQuestions Array
  setAvailableQuestions(){
    const totalQuestion = this.questions.length;
    for(let i=0;i<totalQuestion;i++)
    {
        availableQuestions.push(this.questions[i])
    }
    
  }
  
  //set question number and question and options

getNewQuestion(){
  
  const answersIndicatorContainer = document.querySelector(".answer-idicator");
  const questionNumber=document.querySelector(".question-number");
  const questionText=document.querySelector(".question-text");
  const optionContainer = document.querySelector(".option-container");
  //set question number
  
  questionNumber.innerHTML="Question "+(questionCounter+1)+" of "+this.questions.length;
  //set question text
  //get random question
  const questionIndex=availableQuestions[Math.floor(Math.random()*availableQuestions.length)]
  currentQuestion=questionIndex;
  questionText.innerHTML=currentQuestion.q;
    //get the position of 'questionIndex' from the availableQuestion Array
  const index1=availableQuestions.indexOf(questionIndex);
    //remove the 'questionIndex' from the availableQuestion Array,so that the question does not repeat
  availableQuestions.splice(index1,1);
    //set options
    //get the length of oftions
   const optionLen = currentQuestion.options.length
    //push option into availableOptions Array
    for(let i=0;i<optionLen;i++)
    {
        availableOptions.push(i)
    }

    optionContainer.innerHTML = '';
    let animationDelay=0.15;

    //create options in innerHTML
   for(let i=0;i<optionLen;i++)
    {
        //random option
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //get the position of 'optionIndex' from the availableOptions
        const index2=availableOptions.indexOf(optionIndex);
        //remove the optionIndex' from the availableOptions,so that the option does not repeat
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML=currentQuestion.options[optionIndex];
        option.id=optionIndex;
        option.style.animationDelay = animationDelay + 's'
        animationDelay=animationDelay+0.15;
        option.className="option";
        optionContainer.appendChild(option);
        //option.addEventListener('click', this.getResult);//newly added
       /* option.setAttribute("click" function()
        {
          console.log()
        });
        console.log(option);*/
        option.onclick=function(){
          const id=parseInt(option.id);
          //console.log(option.innerHTML);
        
          //get the answer by comparing the id of clicked option
        if(id===currentQuestion.answer)
        {
          console.log("Good work");
            //set the green color to the correct option
            option.classList.add("correct");
            //add the indicator to correct mark
            answersIndicatorContainer.children[questionCounter-1].classList.add("correct");
            correctAnswers++;
           
        }
        else{
          //set the red color to the wrong option
          option.classList.add("wrong");
          //add the indicator to wrong mark
        //  updateAnswerIndicator("wrong");
        answersIndicatorContainer.children[questionCounter-1].classList.add("wrong");
  
          //if the answer is incorrect the show the correct option by adding green color the correct option
        const optionLen = optionContainer.children.length;
         for(let i=0; i<optionLen; i++)
          {
              if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
                  optionContainer.children[i].classList.add("correct");   
              }
          }
      }
      attempt++;
    //*********unclickable option function goes here**********
    const optionLen = optionContainer.children.length;
    for(let i=0 ; i<optionLen; i++)
    {
        optionContainer.children[i].classList.add("alresdy-answered");
    
    } 
    //******************************************************** */
        }//this is working   
    }
    questionCounter++
  }
  
  answersIndicator()
  {
    const answersIndicatorContainer = document.querySelector(".answer-idicator");
      answersIndicatorContainer.innerHTML = '';
      const totalQuestion =this.questions.length;
      for(let i=0;i<totalQuestion; i++){
          const indicator=document.createElement("div");
          answersIndicatorContainer.appendChild(indicator);
      }
  }
  updateAnswerIndicator(markType){
    const answersIndicatorContainer = document.querySelector(".answer-idicator");
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
} 
//get the quiz Result
quizResult(){
  const resultBox = document.querySelector(".result-box");

resultBox.querySelector(".total-question").innerHTML =String(this.questions.length);
  resultBox.querySelector(".total-attempt").innerHTML = String(attempt);
  resultBox.querySelector(".total-correct").innerHTML = String(correctAnswers);
  resultBox.querySelector(".total-wrong").innerHTML = String(attempt-correctAnswers);
  const precentage = (correctAnswers/this.questions.length)*100;
  resultBox.querySelector(".percentage").innerHTML = precentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML = correctAnswers+" / "+this.questions.length;
  
}

quizOver(){
  const quizBox = document.querySelector(".quiz-box");
  const resultBox = document.querySelector(".result-box");
  //hide quiz quizBox
  quizBox.classList.add("hide");
  //show result Box
  resultBox.classList.remove("hide");
  this.quizResult();
} 
next(){
  if(questionCounter===this.questions.length)
  {
      console.log("Quizz over")
      this.quizOver();
  }
  else{
      this.getNewQuestion();
  }

}
resetQuiz(){
  questionCounter =0;
  correctAnswers = 0;
  attempt = 0;

}

tryagainQuiz(){
  const quizBox = document.querySelector(".quiz-box");
  const resultBox = document.querySelector(".result-box");

  //hide the resultBox
  resultBox.classList.add("hide");
  //show the quizBox
  quizBox.classList.remove("hide");
 this.resetQuiz();
  this.startQuiz()
}
goToHome(){
  const resultBox = document.querySelector(".result-box");
  const homeBox = document.querySelector(".home-box");
  //hide result Box
  resultBox.classList.add("hide");
  //show the home Box
  homeBox.classList.remove("hide");
  this.resetQuiz();
}

//#### STARTING POINT ####

startQuiz(){
  const quizBox = document.querySelector(".quiz-box");
  const homeBox = document.querySelector(".home-box");
  //hide home box
  homeBox.classList.add("hide");
  //show quiz box
  quizBox.classList.remove("hide");
  
  //first we will set all questions in availableQuestions Array
  this.setAvailableQuestions();
  //second we will call getNewQuestion(); function 
  this.getNewQuestion();
  //to create indicator of answers
  this.answersIndicator();
}
ngOnInit(): void {
  const homeBox = document.querySelector(".home-box");

    this.questions=[
      {
          q: 'ශ්‍රී ලංකාවේ මාර්ග නීති සංග්‍රහයේ  අනතුරු ඇගවීමේ සංඥා දක්වා ඇත්තේ',
          options:['නිල් පසුබිමෙහි සුදු වර්ණයෙනි','රතු පසුබිමෙහි සුදු වර්ණයෙනි',
          'කහ පසුබිමෙහි කළු වර්ණයෙනි','සුදු  පසුබිමෙහි රතු  වර්ණයෙනි'],
          answer:2
      },
      {
          q:'වටරවුමක මූලික නීතිය වන්නේ ',
          options:['ඔබට දකුණෙන් පැමිණෙන වාහන වලට ඉඩ දිය යුතුය',
          'ඔබට වම් පසින් හෝ අසන්නයෙන් පැමිණෙන වාහන වලට ඉඩ දිය යුතුය ',
          'අධික රථවාහන තදබදයක් සහිත දිශාවෙන් පැමිණෙන රථවාහන වලට ඉඩ දිය යුතුය','ඔබට වම් පසින් හෝ අසන්නව දකුණෙන් පැමිණෙන වාහන වලට ඉඩ දිය යුතුය'],
          answer:0
  
      },
      {
          q:'එක් දිශාවකට මං තීරු තුනක් සහිත මාර්ගයක ඔබගේ වාහනය ඉදිරියට ගමන් කරන අවස්ථාවකදී ඔබ විසින් තෝරාගත යුතු මං තීරු වනුයේ ',
          options:['මාර්ගයේ මැද තීරුව හෝ දකුණු පස මං තීරුවය','මාර්ගයේ දකුණු පස මං තීරුවය','මාර්ගයේ වම්  පස මං තීරුවය',
          'මාර්ගයේ මැද තීරුව'],
          answer:3
  
      },
      {
          q:'ඔබගේ වාහනය සහ ඔබට ඉදිරියෙන් ධාවනය වන වාහනය අතර ප්‍රමාණවත් දුරක් තබාගත යුත්තේ ',
          options:['ඔබට ඉදිරියෙන් ධාවනය වන වාහනයේ  රියදුරු හදිස්සියේ නතරකලහොත් ,එම වාහනය පසුකර යාමට ඔබට වැඩි වේලාවක් ලැබෙන නිසාය',
          'ඔබට ඉදිරියෙන් ධාවනය වන වාහනයේ  රියදුරු හදිස්සියේ නතරකලහොත්,ඔබට ඔබගේ වාහනය ආරක්ශාකාරී ලෙස නතර කර ගැනීමට හැකි වන නිසාය ',
          'ඔබට ඉදිරියෙන් ධාවනය වන වාහනය ඉස්සර කිරීමට වැඩි ඉඩක් ලැබෙන නිසාය','ඔබට ඉදිරියෙන් ධාවනය වන වාහනය පසුපසින්  ධාවනය කිරීම වඩාත් පහසු වන නිසාය'],
          answer:1
      },
      {
          q:'වාහනයක අවදානම හැඟවීමේ ලාම්පු (Hazard Lamps) පාවිච්චි කලයුත්තේ ,',
          options:['වාහනය අබලන් තත්වයකට පත්ව නවතා තිබියදී පමණි','වාහනයක් හදිසි තත්වයක් නිසා ධාවනයකරන බව දැක්වීම සඳහා','හන්දියකදී වාහනයක් කෙළින්ම ධා වනයකිරීමට අදහස් කරන අවස්තාවේදී ','ප්‍රමුඛතාවය ලබාගැනීම සඳහා'],
          answer:0
      },
      {
          q:'වෙනත් වාහනයක් විසින් ඔබගේ වාහනය  පසු කර යන අස්තවකදී ,',
          options:['ඔබ පසුකර යාමට ඉඩ දීමට  අකැමැති නම් ඔබගේ වාහනයේ දකුණු පස සංඥා දැල්විය යුතුයි', 
          'ඔබගේ වාහනය අඩු ගියරයකට යොදා නතරකිරීමට සූදානම් විය යුතුයි',
          'ඔබගේ වාහනය වේගය වැඩි නොකර පසුකරන්නාට ඔබගේ වාහනය පසුකර යාමට ඉඩ දිය යුතුය', 
          'ඔබ පසුකර යාමට ඉඩ දීමට කැමැත්තක් නොදක්වන්නෙ නම් ඔබට වාහනයේ වේගය වැඩි කල හැක'],
          answer:2
      },
      {
          q:'මංසන්ධි කොටුවේ සලකුණු කර ඇති ස්ථානයකදී ,',
          options:['ඔබ කෙළින්ම ඉදිරියට ගමන් කරන්නේ නම් ඔබට මංසන්ධි කොටුව තුලට ඇතුල් විය හැකිය', 
              'දකුණට හැරවීමේදී  හැර පිටවීමට ඇති මාර්ගය අවහිර නම් මංසන්ධි කොටුව තුලට ඇතුල් නොවිය යුතුය', 
              'දකුණට හැරවීමේදී  හැර ඕනෑම අවස්ථාවකදී  ඔබට මංසන්ධි කොටුව තුළට ඇතුල් විය හැකිය',
              'ඕනෑම අවස්ථාවකදී ඔබට  මංසන්ධි කොටුව තුලට ඇතුල් විය හැකිය'],
          answer:1
      },
      {
          q:'වාහනයක් නතර කර තැබිය හැකි ස්ථානයක් වන්නේ ',
          options:['මං සන්ධියක සිට මීටර 25 ක සීමාවෙන් පිටතය', 
              'බස්රථ නැවතුමක සිට  මීටර 20 ක සීමාවෙන් පිටතය',
              'පදික  මාරුවක දඟර ප්‍රදේශයේ හෝ එහි සිට  මීටර  10 ක සීමාවෙන්  පිටතය', 
              'ගිනි නිවන ජලනලයක සිට මීටර 10 ක සීමාවෙන් පිටතය'],
          answer: 2  
      }
  ];
  homeBox.querySelector(".total-questions").innerHTML = String(this.questions.length);

  //this.setAvailableQuestions();
  //this.getNewQuestion();
  //this.answersIndicator();
  //this.startQuiz();
 
 
  }

  
}
