let category = document.querySelector('#category');
let Qnumber=document.getElementById("qnumber");
let difficulty =document.querySelector('#difficulty');

const timeline = document.querySelector(".timeline");
const timeText = document.querySelector(".timertext");
const timeCount = document.querySelector(".timersec");

const title=document.querySelector(".title");
const  questionNumber=document.querySelector(".questionNumber");
const  questionText=document.querySelector(".questionText");
const  optioncontainer=document.querySelector(".optioncontainer");
const quizbox=document.querySelector(".quizbox");
const resultbox=document.querySelector(".resultbox");
const homebox=document.querySelector(".homebox");
const container=document.querySelector(".container");
let quizCategory=document.querySelector(".quizCategory");
var userName=document.getElementById("username");
var startBtn=document.getElementById("start");
var goBtn=document.getElementById("goButton");
var homeBtn=document.getElementById("homeBtn");
var exitBtn=document.getElementById("exitBtn");
var nextBtn=document.getElementById("nextBtn");

let questions=[];
let questioncounter;
let currentQuestion={};
let availableQuestion=[];
let availableOption=[];
let score;
var nextcount=1;
var getresult=false;
var categoryName;
var quizTime;
var minutes ;
var seconds;
let amountValue="";
let categoryId ="" ;
let difficultyValue="";
let data;
let timeValue =  15;
let widthValue = 0;
let counter;
let counterLine;

//Starting function 
startBtn.addEventListener("click",function(){
    
    homebox.classList.add("hide");
    quizbox.classList.remove("hide");
    amountValue =Qnumber.value;
    if (categoryId=11){ categoryName="Flim"}
    if (categoryId=12){ categoryName="Music"}
    if (categoryId=15){categoryName="Video Games"}
    if (categoryId=10){categoryName="Books"}
    if (categoryId=21){ categoryName="Sports"
    }
    categoryId = category.value;
    difficultyValue = difficulty.value;
    fetch( "https://opentdb.com/api.php?amount="+ amountValue+"&category="+categoryId+"&difficulty="+difficultyValue+"&type=multiple")
    .then(response =>{
        return response.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerOptions = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerOptions.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

           answerOptions.forEach((option, index) => {
                formattedQuestion['option' + (index + 1)] = option;
            });

            return formattedQuestion;
        });
       
        setOver();
        startTimer(15); 
        startTimerLine(0); 
        setAvailableQuestions();
        getQuestion();
        startTime=setInterval(function(){
            seconds++;
            if(seconds>59)
            { minutes++;
            seconds=0;}
        },1000);
       
        
    })
      
});

//validate whether user name entered
goBtn.addEventListener('click',function()
{  
    if(userName.value!=''){
         container.classList.add("hide");
         homebox.classList.remove("hide");}
    else{alert('Enter the name to start the quiz!');}})

//pushing the question into an array availableQuestion
function setAvailableQuestions()
{
    availableQuestion=[...questions];
}

//Setting questions and options to display
function getQuestion() 
{
     //set question number to display
    title.innerHTML="Quiz on "+ categoryName;
    questionNumber.innerHTML= "<b>"+(questioncounter + 1) +"</b>  / "+"<b>"+ amountValue+"</b>";
    
    //To get random questions
    const questionIndex= availableQuestion[Math.floor(Math.random()*availableQuestion.length)];
    currentQuestion=questionIndex;
    questionText.innerHTML= currentQuestion.question;

    // get position of question in availableQuestion array 
    const index1=availableQuestion.indexOf(questionIndex);

    //To avoid repeated questions to be disaplayed
    availableQuestion.splice(index1,1);

    //Pushing the option into array
    
    for (let i=1;i<=4;i++)
    {
        availableOption.push(i);
    }
       optioncontainer.innerHTML='';

    //create options to be dispayed in HTML
    for (let i=1;i<=4;i++)
    {
        const optionIndex= availableOption[Math.floor(Math.random()*availableOption.length)];
        const index2= availableOption.indexOf(optionIndex);
        availableOption.splice(index2,1);

        const options=document.createElement("div")
        options.innerHTML=currentQuestion['option'+optionIndex];
        options.id=optionIndex;
        options.className="option";
        optioncontainer.appendChild(options);
        options.setAttribute("onclick","getResult(this)");
    }
   
    questioncounter++; 
    getresult=false;
}

//calculate the results of quiz
function getResult(element){
    clearInterval(counter); 
    clearInterval(counterLine); 
    const id=parseInt(element.id);
    //getting ans by comparing id of clicked option
    if(id === currentQuestion.answer){
        element.classList.add("correct");
        score++; }
    else{
        element.classList.add("incorrect");
    //displaying correct answer
    const optionLen=optioncontainer.children.length;
    for(let i=0;i<optionLen;i++)
    { if(parseInt(optioncontainer.children[i].id)=== currentQuestion.answer){
        optioncontainer.children[i].classList.add("correct");}}}
    unclickableOption();
    getresult=true;
}

//To make other options unclickable once user cliked a option
function unclickableOption(){
    const optionLen=optioncontainer.children.length;
    for( let i=0;i<optionLen;i++){
        optioncontainer.children[i].classList.add("already-answered");}}
      
//To get into next question
nextBtn.addEventListener('click',function(){
   if(getresult==false){
       alert('choose any option !');
   }
   if(getresult==true){
     if(questioncounter==amountValue){
        clearInterval(counter);
        clearInterval(counterLine);
        clearInterval(startTime);
        quizOver();}
    else{
        nextcount++;
        clearInterval(counter);
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        getQuestion();}
}})

//when all the questions were answered this function is called
function quizOver(){
    
    quizbox.classList.add("hide");
    resultbox.classList.remove("hide");
    showresult();
}
let spendTime;
//To display the score of the quiz
function showresult(){
   
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

    resultbox.querySelector(".totalscore").innerHTML= "<h3>Congrats " +userName.value+" !</h3>" +"<h4> You have scored <b>"+score +"</b> out of <b>"+amountValue +"</b> questions in "+ minutes + ":" + seconds +" on "+categoryName+ " category </h4>" }

//To makeover the quiz freshly
function setOver(){
     seconds=0
     minutes=0
     startTime=0
     questioncounter=0;
     score=0;
     nextcount=1;    
     timeValue =  15;
     widthValue = 0;
     clearInterval(counter);
     clearInterval(counterLine);
}

//Brings the category selection page after clicked home button clicked
homeBtn.addEventListener('click',function(){
    resultbox.classList.add("hide");
    homebox.classList.remove("hide");
    setOver();
})

//Brings to login page after exit button clicked
exitBtn.addEventListener('click',function(){
    container.classList.remove("hide");
     resultbox.classList.add("hide");
})

var count;
//setting up timer 
function startTimer(count){
    counter = setInterval(timer, 1000);
    function timer(){
        document.getElementById('timersec').innerHTML=count;
        count--;
        if(count === 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
        }
        if (count === 0){
            alert("You're out of time!");
            if(questioncounter==amountValue){
                clearInterval(counter); //clear counter
                clearInterval(counterLine);
                quizOver();}
              
            else{
                nextcount++;
                clearInterval(counter); //clear counter
                clearInterval(counterLine); //clear counterLine
                startTimer(timeValue); //calling startTimer function
                startTimerLine(widthValue); //calling startTimerLine function
                getQuestion();
            }
        }
            
    }
}

//setting up timerline 
function startTimerLine(count)
{
    counterLine = setInterval(timer, 20);
    function timer()
       {
        count += 1; 
        timeline.style.width = (count) + "px";
        if(count > 695){ 
            clearInterval(counterLine); 
        }
    }
}
         
