
let humanScore = 0;
let computerScore = 0;

function playRound() {

    function getComputerChoice(){
        let choice = Math.random();
        if(choice<=0.3){
            return "rock";
        }
        else if(choice>=0.6){
            return "paper";
        }
        return "scissors";
    }
    
    function getHumanChoice(){
        let choice = prompt("choose one of the options:rock,paper or scissors:").toLowerCase();
        return choice;
    }

    const human = getHumanChoice()[0];
    const computer = getComputerChoice()[0];

    if(human==computer){
        console.log("Tie game");
    }
    else if(human=="r"&&computer=="s" || human=="p"&&computer=="r" || human=="s"&&computer=="p" ){
        console.log("You win!");
        humanScore++;
    }
    else{
        console.log("You lose");
        computerScore++;
    }

    let message = "You:"+humanScore+"--Computer:"+computerScore;
    console.log(message);
    
}

function playGame(){
    for(let i =0;i<5;i++){
        playRound();
    }
}

playGame();