let com_score;
let user_score;


var xhr = new XMLHttpRequest();


xhr.open('GET', 'score.html', true);


xhr.send();


xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      
        document.getElementById('template-container').innerHTML = xhr.responseText;


        let com_score = document.getElementById("computerScore");
        let user_score = document.getElementById("userScore");

        
        const storedComScore = localStorage.getItem('computerScore') || 0;
        const storedUserScore = localStorage.getItem('userScore') || 0;

        com_score.value = storedComScore;
        user_score.value = storedUserScore;
    } else {
        console.error('Error: ' + xhr.status);
    }
};


xhr.onerror = function() {
    console.error('Request failed');
};

function game(userChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    

    if (userChoice === 'scissor') {
  if (computerChoice === 'paper') {
        
        user_score.value = parseInt(user_score.value) + 1;
        localStorage.setItem('userScore', user_score.value);
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "win.html";
            

        

    } else if (computerChoice === 'rock') {
        com_score.value = parseInt(com_score.value) + 1;
        localStorage.setItem('computerScore', com_score.value);
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "loss.html";
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
        com_score.value = parseInt(com_score.value) + 1;
        localStorage.setItem('computerScore',com_score.value);
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "loss.html";
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
        com_score.value = parseInt(com_score.value) + 1;
        localStorage.setItem('computerScore', com_score.value);
        localStorage.setItem('userpick',userChoice);
        localStorage.setItem('comppick',computerChoice);
        window.location.href = "loss.html";
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













