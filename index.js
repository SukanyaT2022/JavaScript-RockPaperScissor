
function makeRockImgShow(){
    document.getElementById("rockID").style.visibility = 'visible'
    document.getElementById("paperID").style.visibility = 'hidden'
    document.getElementById("scissorID").style.visibility = 'hidden'
    var robot = robotRandom()
    whoWin(1,robot)// checking who the winner player or robot- 1 is player choice and robot choice
}
function makePaperImgShow(){
    document.getElementById("rockID").style.visibility = 'hidden'
    document.getElementById("paperID").style.visibility = 'visible'
    document.getElementById("scissorID").style.visibility = 'hidden'
    var robot = robotRandom()
    whoWin(2,robot)// 2 player choose choice number 2
}
function makeScissorImgShow(){
    document.getElementById("rockID").style.visibility = 'hidden'
    document.getElementById("paperID").style.visibility ='hidden'
    document.getElementById("scissorID").style.visibility = 'visible'
    var robot = robotRandom()
    whoWin(3,robot)
}

function robotRandom() {
  var randomNum =  Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if(randomNum==1){
    //rock
    document.getElementById('robotID').src = "https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ja3xlbnwwfHwwfHx8MA%3D%3D"
  }else if(randomNum==2){
    //paper
document.getElementById('robotID').src = "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcGVyfGVufDB8fDB8fHww" 
  }
  else{
    //scissor
    document.getElementById('robotID').src = "https://images.unsplash.com/photo-1534978184044-62700a717864?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2Npc3NvcnxlbnwwfHwwfHx8MA%3D%3D" 
  }
  return randomNum
}

function whoWin(player, robot){
    if(player == 1 && robot == 1){
        alert('Draw!')
    }else if (player == 1 && robot == 2){
        alert('Robot wins!')
    }else if (player == 1 && robot == 3){
        alert('Player wins!')
    }
    
    else if (player == 2 && robot == 1){
        alert('Player wins!')
    }else if (player == 2 && robot == 2){
        alert('draw!')
    }else if (player == 2 && robot == 3){
        alert('Robot win!')
    }


    else if (player == 3 && robot == 1){
        alert('Robot wins!')
    }else if (player == 3 && robot == 2){
        alert('Player wins!')
    }else if (player == 3 && robot == 3){
        alert('draw!')
    }


}

