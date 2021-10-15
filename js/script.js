//Rock, Paper, Scissors

//Main function of the game
function rpsGame(yourChoice){
    console.log('Your choice:',yourChoice.id);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;

    botChoice=numberToChoice(randToRpsInt());
    console.log('Computer choice:',botChoice);

    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    message=finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);
}

//To generate a random number
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

//To make a choice for computer
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

//Calculate score to decide winner of the game
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase={
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    //Calculating user score
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    //Calculating computer score
    var computerScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

//To select the message according to our score
function finalMessage([yourScore, computerScore]){
    console.log('Your Score:',yourScore,' and Computer Score:',computerScore);

    if(yourScore === 0){
        return {'message':'You lost', 'color':'red'};
    }
    else if(yourScore === 0.5){
        return {'message':'You tied', 'color':'yellow'};
    }
    else{
        return {'message':'You won!', color:'green'};
    }

}

//To display final output in the screen
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    
    var imagesDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //Removing rock,paper,scissors images from screen
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //Creating empty div elements
    var humanDiv=document.createElement('div');
    var messageDiv=document.createElement('div');
    var botDiv=document.createElement('div');

    //Inserting images and message to div elements
    humanDiv.innerHTML = "<img src='" +imagesDatabase[humanImageChoice]+ "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(38,49,231,1);'>";
    botDiv.innerHTML = "<img src='" +imagesDatabase[botImageChoice]+ "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(38,49,231,1);'>";
    messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color']+ "; font-size: 65px; padding:35px;' >" +finalMessage['message']+ "</h1>";

    //Displaying human choice, bot choice and final message
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}