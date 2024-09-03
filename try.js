
let humanScore = 0;
let computerScore = 0;


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

    /*let message = "You:"+humanScore+"--Computer:"+computerScore;
    console.log(message);*/
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
        setTimeout(() => {console.log('jfjf')}, 8000);
        if(humanScore==5){
            message.textContent = 'you human '+text;
        }
        else{
            message.textContent = "computer "+text;
        }
        humanScore = 0;
        computerScore = 0;
        //displayScore();
        //setTimeout(() => {console.log('jfjf')}, 8000);
        
    }
    else{
    message.textContent = 'first to reach five points wins!';}
    
    
}


let d = document.querySelector('.buttons');
d.addEventListener('click',(e)=>{
    
    let val = e.target;
    let human = val.value;
    let computer = getComputerChoice();
    
    
    evaluate(human,computer);
    
    displayScore();

    checkScore();

}
)