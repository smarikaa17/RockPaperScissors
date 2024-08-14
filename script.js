let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");

const gencompChoice = () => {
  const op = ["rock", "paper", "scissors"];
  const randop = Math.floor(Math.random() * 3);
  return op[randop];
};

const drawGame = () => {
   msg.innerText="Oops!Game was Draw. Play again";
   msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin==true){
        userscore++;
        uScore.innerText=userscore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        cScore.innerText=compscore;
         msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
     userWin= compChoice === "paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin= compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
