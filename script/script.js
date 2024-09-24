let com_score;
let user_score;

fetch('score.html')
.then(response => response.text())
.then(data => {
    document.getElementById('template-container').innerHTML = data;

    com_score=document.getElementById("computerScore");
    user_score=document.getElementById("userScore");

    const stroredComScore =localStorage.getItem('computerScore') || 0;
    const stroredUserScore = localStorage.getItem('userScore') || 0;

    com_score.value = stroredComScore;
    user_score.value = stroredUserScore;
})
.catch(error => console.log('Error:', error));


function game(userChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    

    if (userChoice === 'scissor') {
  if (computerChoice === 'paper') {
    localStorage.setItem('userpick',userChoice);
    localStorage.setItem('comppick',computerChoice);
    window.location.href = "win.html";
       user_score.value = parseInt(user_score.value) + 1;
        localStorage.setItem('userScore', user_score.value);
        
            

        

    } else if (computerChoice === 'rock') {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "loss.html";
        com_score.value = parseInt(com_score.value) + 1;
        localStorage.setItem('computerScore', com_score.value);
       
    } else {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "tie.html";
    }
} else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "win.html";
        user_score.value = parseInt(user_score.value) + 1;
        localStorage.setItem('userScore',user_score.value);
        
    } else if (computerChoice === 'scissor') {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "loss.html";
        com_score.value = parseInt(com_score.value) + 1;
        localStorage.setItem('computerScore',com_score.value);
        
        
    } else {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "tie.html";
    }
} else if (userChoice==='rock'){
    if (computerChoice === 'scissor') {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "win.html";
        user_score.value = parseInt(user_score.value) + 1;
        localStorage.setItem('userScore', user_score.value);
    } else if (computerChoice === 'paper'){
        localStorage.setItem('comppick',computerChoice);
        localStorage.setItem('userpick',userChoice);
        window.location.href = "loss.html";
        com_score.value = parseInt(com_score.value) + 1;
        localStorage.setItem('computerScore', com_score.value);
        
        
    }else {
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "tie.html";
    }
}

}

fetch('Rule.html')
.then(response=> response.text())
.then(data=>{
    document.getElementById('rule-container').innerHTML = data;
})




function openRule(){
    let closeButton = document.getElementById("rule-container");
    closeButton.style.display='block';
}


function closeFun(){
    let closeButton = document.getElementById("rule-container");
    closeButton.style.display='none';
}

setTimeout(function() {
    document.getElementById("loading-screen").style.display = "none";
  }, 250);











