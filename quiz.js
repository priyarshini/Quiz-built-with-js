const  questionNumber=document.querySelector(".questionNumber");
const  questionText=document.querySelector(".questionText");
const  optioncontainer=document.querySelector(".optioncontainer");
const quizbox=document.querySelector(".quizbox");
const resultbox=document.querySelector(".resultbox");
const homebox=document.querySelector(".homebox");
const container=document.querySelector(".container");
let quizCategory=document.querySelector(".quizCategory");
let questions=[];
let questioncounter;
let currentQuestion;
let availableQuestion=[];
let availableOption=[];
let score;
var nextcount=1;
var getresult=false;
var userName=document.getElementById("username");

//validate whether user name entered
function categoryPage(){  
    if(userName.value!='')
    { container.classList.add("hide");
    homebox.classList.remove("hide");}
    else{alert('Enter the name to start the quiz!');}}

//Starting function To get quiz based on Flim category
function startFlim(){
    questions = [{question:"What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
    answer:0,options:["Wilson","Friday","Jones","Billy"]},
    {question:"Who wrote and directed the 1986 film &#039;Platoon&#039;?",
    answer:2,options:["Francis Ford Coppola","Stanley Kubrick","Oliver Stone","Michael Cimino"]},
    {question:"Who played Deputy Marshal Samuel Gerard in the 1993 film &quot;The Fugitive&quot;?",
    answer:1,options:["Harrison Ford","Tommy Lee Jones","Harvey Keitel","Martin Landau"]},
    {question:"Which movie contains the quote, &quot;Say hello to my little friend!&quot;?",
    answer:3,options:["Reservoir Dogs","Heat","Goodfellas","Scarface"]},
    {question:"Who directed the movies &quot;Pulp Fiction&quot;, &quot;Reservoir Dogs&quot; and &quot;Django Unchained&quot;?",
    answer:2,options:["Martin Scorcese","Steven Spielberg","Quentin Tarantino","James Cameron"]},
    {question:"What was Dorothy&#039;s surname in &#039;The Wizard Of Oz&#039;?",
    answer:2,options:["Perkins","Day","Gale","Parker"]},
    {question:"What is the oldest Disney film?",
    answer:0,options:["Snow White and the Seven Dwarfs","Pinocchio","Dumbo","Fantasia"]},
    {question:"In &quot;Jurassic World&quot;, what is the name of the dinosaur that is a genetic hybrid?",
    answer:2,options:["Mosasaurus","Pteranodon","Indominus Rex","Tyrannosaurus Rex "]},
    {question:"In the 1992 film &quot;Army of Darkness&quot;, what name does Ash give to his double-barreled shotgun?",
    answer:3,options:["Bloomstick","Blastbranch","2-Pump Chump","Boomstick"]},
    {question:"For the film &quot;Raiders of The Lost Ark&quot;, what was Harrison Ford sick with during the filming of the Cairo chase?",
    answer:1,options:["Anemia","Dysentery","Constipation","Acid Reflux "]}];
    
    homebox.classList.add("hide");
    quizbox.classList.remove("hide");
    setOver();
    setAvailableQuestions();
    getQuestion();
}

//Starting function To get quiz based on Music category
function startMusic(){
    questions=[
        {question:"Ringo Starr of The Beatles mainly played what instrument?",
        answer:1,options:["Bass","Drums","Guitar","Piano"]},
        {question :"Which country does the band Rammstein hail from?",
        answer:3,options:["Austria","Armenia","Belgium","Germany"]},  
        {question:"How many members are there in the band Nirvana?",
        answer:2,options:["Two","Four","Three","Five"]}, 
        {question:"Which member of the Foo Fighters was previously the drummer for Nirvana?",
        answer:2,options:["Taylor Hawkins","Nate Mendel","Dave Grohl","Chris Shiflett"]},  
        {question:"According to a song by Belinda Carlisle, Heaven is a place on what?",
        answer:0,options:["Earth","Venus","Mars","Uranus"]},     
        {question:"What album did Bon Iver release in 2016?",
        answer:1,options:["Bon Iver, Bon Iver","22, A Million","Blood Bank EP","For Emma, Forever Ago"]},  
        {question:"Who was featured in the song &quot;Words&quot; by Feint? ",
        answer:0,options:["Laura Brehm","Anna Yvette ","Danyka Nadeau","Veela"]},    
        {question:"Which classical composer wrote the &quot;Moonlight Sonata&quot;?",
        answer:3,options:["Chief Keef","Wolfgang Amadeus Mozart","Johannes Brahms","Ludvig Van Beethoven"]},
        {question:"Who is the lead singer of Foo Fighters?",
        answer:3,options:["Dave Mustaine","James Hetfield","Little Red Riding Hood","Dave Grohl"]},   
        {question:"Who is the lead singer of Arctic Monkeys?",
        answer:2,options:["Jamie Cook","Matt Helders","Alex Turner","Nick ;Malley"]}]
        
    homebox.classList.add("hide");
    quizbox.classList.remove("hide");
    setOver();
    setAvailableQuestions();
    getQuestion();
}

//Starting function to get into quiz based on Books category
function startBooks(){
    questions=[
        {question:"Who wrote &quot;Harry Potter&quot;?",answer:1,
        options:["J.R.R. Tolkien","J.K. Rowling","Terry Pratchett","Daniel Radcliffe"]},
        {question:"Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?",
        answer:1,options:["Joseph Conrad","Ian Fleming","John Buchan","Graham Greene"]},
        {question:"How many Harry Potter books are there?",answer:3,options:["8","5","6","7"]},
        {question:"What&#039;s Harry Potter&#039;s dad&#039;s name?",answer:1,
        options:["Joey Potter","James Potter","Frank Potter","Hairy Potter Sr."]},
        {question:"Who wrote the young adult novel &quot;The Fault in Our Stars&quot;?",
        answer:2,options:["Stephenie Meyer","Suzanne Collins","John Green","Stephen Chbosky"]},
        {question:"What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?",
        answer:2,options:["The Sign of the Four","A Case of Identity","A Study in Scarlet","The Doings of Raffles Haw"]},
        {question:"What&#039;s the second book in George R. R. Martin&#039;s &#039;A Song of Ice and Fire&#039; series?",
        answer:3,options:["A Dance with Dragons","A Storm of Swords","A Feast for Crows","A Clash of Kings"]},
        {question:"What was the first ever entry written for the SCP Foundation collaborative writing project?",
        answer:0,options:["SCP-173","SCP-001","SCP-999","SCP-1459"]},
        {question:"Which is NOT a book in the Harry Potter Series?",answer:3,
        options:["The Chamber of Secrets","The Prisoner of Azkaban","The Deathly Hallows","The House Elf"]},
        {question:"Who wrote &quot;A Tale of Two Cities&quot;?",
        answer:1,options:["Charles Darwin","Charles Dickens","Mark Twain","Roald Dahl"]}];
        
    homebox.classList.add("hide");
    quizbox.classList.remove("hide");
    setOver();
    setAvailableQuestions();
    getQuestion();
}

//Starting function To get quiz based on Sports category
function startSports(){
    questions=[
        {question:"In golf, what name is given to a hole score of two under par?",
        answer:1,options:["Birdie","Eagle","Bogey","Albatross"]},
        {question:"In what sport is a &quot;shuttlecock&quot; used?",
        answer:1,options:["Table Tennis","Badminton","Rugby","Cricket"]},
        {question:"In baseball, how many fouls are an out?",answer:0,options:["0","5","3","2"]},
        {question:"How many points did LeBron James score in his first NBA game?",answer:3,options:["19","69","41","25"]},
        {question:"In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
        answer:3,options:["1","2","3","4"]},
        {question:"Who won the 2016 Formula 1 World Driver&#039;s Championship?",answer:3,
        options:["Lewis Hamilton","Max Verstappen","Kimi Raikkonen","Nico Rosberg"]},
        {question:"Which team has won the most Stanley Cups in the NHL?",answer:2,
        options:["Chicago Blackhawks","Toronto Maple Leafs","Montreal Canadians","Detroit Red Wings"]},
        {question:"What is the most common type of pitch thrown by pitchers in baseball?",answer:1,
        options:["Slowball","Fastball","Screwball","Palmball"]},
        {question:"In bowling, what is the term used for getting three consecutive strikes?",answer:3,
        options:["Flamingo","Birdie","Eagle","Turkey"]},{question:"The Los Angeles Dodgers were originally from what U.S. city?",
        answer:1,options:["Las Vegas","Brooklyn","Boston","Seattle"]}];
        
    homebox.classList.add("hide");
    quizbox.classList.remove("hide");
    setOver();
    setAvailableQuestions();
    getQuestion();
}

//Starting function to get quiz based on Games category
function startGames(){
    questions=[
    {question:"Carcassonne is based on which French town?",answer:0,
    options:["Carcassonne","Paris","Marseille","Clermont-Ferrand"]},
    {question:"In a standard game of Monopoly, what colour are the two cheapest properties?",answer:3,
    options:["Green","Yellow","Blue","Brown"]},
    {question:"How many spaces are there on a standard Monopoly board?",answer:1,options:["28","40","55","36"]},
    {question:"How many dice are used in the game of Yahtzee?",answer:1,options:["Four","Five","Six","Eight"]},
    {question:"How many pieces are there on the board at the start of a game of chess?",answer:2,
    options:["16","20","32","36"]},
    {question:"On a standard Monopoly board, which square is diagonally opposite &#039;Go&#039;? "
    ,answer:1,options:["Go to Jail","Free Parking","Jail","The Electric Company"]},
    {question:"How many dots are on a single die?",answer:3,options:["24","15","18","21"]},
    {question:"When was the board game Twister, released to the public?",answer:1,
    options:["September 1965","April 1966","January 1969","February 1966"]},
    {question:"In board games, an additional or ammended rule that applies to a certain group or place is informally known as a &quot;what&quot; rule?",
    answer:1,options:["Custom","House","Extra","Change"]},
    {question:"What is the maximum level you can have in a single class in Dungeons and Dragons (5e)?",
    answer:1,options:["30","20","15","25"]}]
    
    homebox.classList.add("hide");
    quizbox.classList.remove("hide");
    setOver();
    setAvailableQuestions();
    getQuestion();
}

//pushing the question into an array availableQuestion
function setAvailableQuestions()
{
    const totalQuestion=questions.length;
    for( let i=0;i<totalQuestion;i++)
    {availableQuestion.push(questions[i])}
}

//Setting questions and options to display
function getQuestion() 
{  
     //set question number to display
    questionNumber.innerHTML="Question "+ (questioncounter + 1) +" of "+ questions.length;
    //To get random questions
    const questionIndex= availableQuestion[Math.floor(Math.random()*availableQuestion.length)];
    currentQuestion=questionIndex;
    questionText.innerHTML= currentQuestion.question;

    // get position of question in availableQuestion array 
    const index1=availableQuestion.indexOf(questionIndex);

    //To avoid repeated questions to be disaplayed
    availableQuestion.splice(index1,1);

    //Pushing the option into array
    const optionLen= currentQuestion.options.length;
    for (let i=0;i<optionLen;i++)
    {
        availableOption.push(i);
    }
       optioncontainer.innerHTML='';

    //create options to be dispayed in HTML
    for (let i=0;i<optionLen;i++)
    {
        const optionIndex= availableOption[Math.floor(Math.random()*availableOption.length)];
        const index2= availableOption.indexOf(optionIndex);
        availableOption.splice(index2,1);

        const option=document.createElement("div")
        option.innerHTML=currentQuestion.options[optionIndex];
        option.id=optionIndex;
        option.className="option";
        optioncontainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }
    questioncounter++; //increase the question count
    getresult=false;
}

//calculate the results of quiz
function getResult(element){
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
function next(){
   if(getresult==false){
       alert('choose any option !');
   }
   if(getresult==true){
     if(nextcount==10){
          quizOver();}
    else{nextcount++;
        getQuestion();}
}}

//when all the questions were answered this function is called
function quizOver(){
    quizbox.classList.add("hide");
    resultbox.classList.remove("hide");
    showresult();
}

//To display the score of the quiz
function showresult(){
    resultbox.querySelector(".totalscore").innerHTML= "Congrats " +userName.value+" !" +" You have scored "+score +" out of 10 questions";
}

//To makeover the quiz freshly
function setOver(){
     questioncounter=0;
     score=0;
     nextcount=1;    
}

//Brings the category selection page after clicked home button clicked
function home(){
    resultbox.classList.add("hide");
    homebox.classList.remove("hide");
    setOver();
}

//Brings to login page after exit button clicked
function exit(){
    container.classList.remove("hide");
    resultbox.classList.add("hide");
}
