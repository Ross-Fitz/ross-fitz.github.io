function play(){

    //var rock=document.getElementById("rock").value;
    //var paper=document.getElementById("paper").value;
    //var scissors=document.getElementById("scissors").value;

    alert("Hello! Welcome to the game of ROCK PAPER SCISSORS.");
    var player, msg;
    player=prompt("Choose one of the following: rock, paper or scissors. Good Luck!","");
    //var computer;
    const options=["rock","paper","scissors"];
    let computer=options[Math.floor(Math.random()*3)];

    if(player=="rock"){
        if(computer=="paper"){
            msg="You picked rock. Computer Picked paper. Paper beats Rock. You Lose!";
        }
        else if(computer=="scissors"){
            msg="You picked rock. Computer picked scissors. You Win!";
        }
        else if(computer=="rock"){
            msg="You both picked rock. It's a draw!";
        }
    }

    else if(player=="paper"){
        if(computer=="scissors"){
            msg="You picked paper. Computer picked scissors. Scissors beats paper. You Lose!";
        }
        else if(computer=="rock"){
            msg="You picked paper. Computer picked rock. Paper beats rock. You Win!";
        }
        else if(computer=="paper"){
            msg="You both picked paper. It's a draw!";
        }
    }

    else if(player=="scissors"){
        if(computer=="rock"){
            msg="You picked scissors. Computer picked rock. Rock beats scissors. You Lose!";
        }
        else if(computer=="paper"){
            msg="You picked scissors. Computer picked paper. Scissors beats paper. You Win!";
        }
        else if(computer=="scissors"){
            msg="You both picked scissors. It's a draw!";
        }
    }
    else{
        msg="Error in entering right value. Try again.";
    }

    alert(msg);

}

