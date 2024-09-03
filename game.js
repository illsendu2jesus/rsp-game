
let humanScore = 0;
let computerScore = 0;

let init = false;


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

function evaluate(human,computer){

    if(human==computer){
        
    }
    else if(human=="r"&&computer=="s" || human=="p"&&computer=="r" || human=="s"&&computer=="p" ){

        humanScore++;
    }
    else{
        computerScore++;
    }

}



function displayScore(){

    let score1 = document.querySelector('.humanScore');
    score1.textContent = humanScore;


    let score2 = document.querySelector('.computerScore');
    score2.textContent = computerScore;


}

function checkScore(){ 
    let message = document.querySelector(".winner")
    let text = 'is the winner !'


    if(humanScore==5 || computerScore == 5){
        if(humanScore==5){
            message.textContent = 'you human '+text;
        }
        else{
            message.textContent = "computer "+text;
        }
        humanScore = 0;
        computerScore = 0;
        init = true;
        
    }
    else{
    message.textContent = 'first to reach five points wins!';}
    
    
}


let d = document.querySelector('.buttons');
d.addEventListener('click',(e)=>{

    if(!init){
        let val = e.target;
        let human = val.value;
        let computer = getComputerChoice();
        
        
        evaluate(human,computer);

        displayScore();
        checkScore();
        //init = false;
    }
    else{
        displayScore();
        init = false;
    }

}
)