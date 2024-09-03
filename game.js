
let humanScore = 0;
let computerScore = 0;

function playRound() {

    let human;
    let computer;

    function getComputerChoice(){
        let choice = Math.random();
        if(choice<=0.3){
            return "r";
        }
        else if(choice>=0.6){
            return "p";
        }
        return "s";
    }
    
    function getHumanChoice(){
        /*let choice = prompt("choose one of the options:rock,paper or scissors:").toLowerCase();
        return choice;*/
        let buttons = document.querySelector('.buttons');
        let button;
        buttons.addEventListener("click",(e)=>
        {
            button = e.target;
            //console.log(button.value);
            //console.log(typeof(button.value));
            human =  button.value;
            computer = getComputerChoice()
        });
        //return button;
    }
    while(human==undefined){
        getHumanChoice();
    }
    //getHumanChoice();

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

/*function playGame(){
    for(let i =0;i<50000;i++){
        playRound();
    }
}

playGame();*/
/*while(humanScore!=5 || computerScore!=5){
    playRound();
}*/
playRound();