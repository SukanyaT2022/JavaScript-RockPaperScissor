

var round = 1
var playerScore = 0
var robotScore = 0
function nextRound(){
 
  if(round < 6){
    round = round + 1; 
        document.getElementById('round').innerText = 'Round '+ round
        document.getElementById("rockID").style.visibility = 'visible'
        document.getElementById("paperID").style.visibility = 'visible'
        document.getElementById("scissorID").style.visibility = 'visible'
    document.getElementById('robotID').src ='https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3R8ZW58MHx8MHx8fDA%3D'
   document.getElementById('nextButtonId').disabled = true; // click next round is disable
}
   
}

function makeRockImgShow(){
    document.getElementById("rockID").style.visibility = 'visible'
    document.getElementById("paperID").style.visibility = 'hidden'
    document.getElementById("scissorID").style.visibility = 'hidden'
    var robot = robotRandom()
    whoWin(1,robot)// checking who the winner player or robot- 1 is player choice and robot choice
    document.getElementById('nextButtonId').disabled = false; 
    // after choose a choice then the button able to go to next round
}
function makePaperImgShow(){
    document.getElementById("rockID").style.visibility = 'hidden'
    document.getElementById("paperID").style.visibility = 'visible'
    document.getElementById("scissorID").style.visibility = 'hidden'
    var robot = robotRandom()
    whoWin(2,robot)// 2 player choose choice number 2
    document.getElementById('nextButtonId').disabled = false; 
    // after choose a choice then the button able to go to next round
}
function makeScissorImgShow(){
    document.getElementById("rockID").style.visibility = 'hidden'
    document.getElementById("paperID").style.visibility ='hidden'
    document.getElementById("scissorID").style.visibility = 'visible'
    var robot = robotRandom()
    whoWin(3,robot)
    document.getElementById('nextButtonId').disabled = false; 
    // after choose a choice then the button able to go to next round
}

function robotRandom() {
  var randomNum =  Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if(randomNum==1){
    //rock
    document.getElementById('robotID').src = "/image/rock.webp"
  }else if(randomNum==2){
    //paper
document.getElementById('robotID').src = "/image/paper.webp" 
  }
  else{
    //scissor
    document.getElementById('robotID').src = "/image/scissor.webp" 
  }
  return randomNum
}

function whoWin(player, robot){
    if(player == 1 && robot == 1){
       document.getElementById('winnerID').innerText = ('Draw!')
    }else if (player == 1 && robot == 2){
       document.getElementById('winnerID').innerText = ('Robot wins!')
        robotScore += 1
    }else if (player == 1 && robot == 3){
       document.getElementById('winnerID').innerText = ('Player wins!')
        playerScore +=1
    }
    
    else if (player == 2 && robot == 1){
       document.getElementById('winnerID').innerText = ('Player wins!')
        playerScore +=1
    }else if (player == 2 && robot == 2){
       document.getElementById('winnerID').innerText = ('draw!')
    }else if (player == 2 && robot == 3){
       document.getElementById('winnerID').innerText = ('Robot win!')
        robotScore += 1
    }


    else if (player == 3 && robot == 1){
       document.getElementById('winnerID').innerText = ('Robot wins!')
        robotScore += 1
    }else if (player == 3 && robot == 2){
       document.getElementById('winnerID').innerText = ('Player wins!')
        playerScore +=1
    }else if (player == 3 && robot == 3){
       document.getElementById('winnerID').innerText = ('draw!')
    }
    document.getElementById('playerScoreID').innerText = "Player's score = " + playerScore
    document.getElementById('robotScoreID').innerText = "Robot's score = " + robotScore

    if(round == 6){
        if(playerScore>robotScore){
           document.getElementById('resultID').innerText = ('Player wins the match.')
        }else if(  robotScore>playerScore){
         document.getElementById('resultID').innerText = ('Robot wins the match.')
        }else{
     document.getElementById('resultID').innerText = ('The match is a draw')
        }
    }
}


