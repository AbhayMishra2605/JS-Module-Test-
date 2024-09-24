let userPick = localStorage.getItem('userpick');
let comPick = localStorage.getItem('comppick');

let imgElement = document.querySelector("#youPiked img");
let imgElement1 = document.querySelector("#pcPiked img");
let tag =document.querySelector("#youPiked #rockSec");
let tag1 =document.querySelector("#pcPiked div");

    if (userPick === 'rock') {
        imgElement.src = "Pictures/icons8-fist-67 1.png"; 
        imgElement.id = "rockImg";  
        tag.style.borderWidth = "0.8vw";
        tag.style.borderStyle = "solid";
        tag.style.borderColor = "#0074B6"; 
    } else if (userPick === 'paper') {
        imgElement.src = "Pictures/icons8-hand-64 1.png";
        imgElement.id = "paperImg";  
        tag.style.borderWidth = "0.8vw";
        tag.style.borderStyle = "solid";
        tag.style.borderColor = "#FFA943"; 
    } else if (userPick === 'scissor') {
        imgElement.src = "Pictures/sessior.png";
        imgElement.id = "sessiorImg";  
        tag.style.borderWidth = "0.8vw";
        tag.style.borderStyle = "solid";
        tag.style.borderColor = "#BD00FF";
        
        
    }
    if (comPick === 'rock') {
        imgElement1.src = "Pictures/icons8-fist-67 1.png"; 
        imgElement1.id = "rockImg";  
        tag1.style.borderWidth = "0.8vw";
        tag1.style.borderStyle = "solid";
        tag1.style.borderColor = "#0074B6"; 
    } else if (comPick === 'paper') {
        imgElement1.src = "Pictures/icons8-hand-64 1.png";
        imgElement1.id = "paperImg";  
        tag1.style.borderWidth = "0.8vw";
        tag1.style.borderStyle = "solid";
        tag1.style.borderColor = "#FFA943"; 
    } else if (comPick === 'scissor') {
        imgElement1.src = "Pictures/sessior.png";
        imgElement1.id = "sessiorImg";  
        tag1.style.borderWidth = "0.8vw";
        tag1.style.borderStyle = "solid";
        tag1.style.borderColor = "#BD00FF";
        
        
    }
    
   

    setTimeout(()=>{
        let massage=document.querySelector('.massage');
       
        massage.style.display='block';
       

    },600);