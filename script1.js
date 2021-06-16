const close = document.querySelectorAll(".menuList");
let menuIndex = 0;
function menuFunction(){
    close[menuIndex].classList.toggle('display-none1');
    if (menuIndex == close.length - 1) {
                    menuIndex = 0;
                } else {
                    menuIndex = menuIndex + 1; 
                }
    close[menuIndex].classList.toggle('display-none1');
} 

var bigImg = document.getElementById("cool");
function enlargeImg1(){
    if(bigImg.style.transform == "scale(1)"){
        bigImg.style.transform = "scale(2)";
        bigImg.style.position ="fixed";
    } else{
        bigImg.style.transform = "scale(1)";
        bigImg.style.position = "inherit";
    }
}

var wed = document.querySelectorAll(".wedding");
var model = document.querySelectorAll(".model");
var birthday = document.querySelectorAll(".birthday");
var baby = document.querySelectorAll('.babyShower');
var selectElem = document.getElementById('select');
console.log(birthday.length)
// var pElem = document.getElementById('img0220');
// var pElem = document.querySelectorAll(".picture10");

selectElem.addEventListener('change', function(){

        if(selectElem.selectedIndex ===1){
            for(let i = 0; i < model.length; i++){
                model[i].style.display = "none";    
            }
            for(let i = 0; i < baby.length; i++){
                baby[i].style.display = "none";    
            }
            for(let i = 0; i < birthday.length; i++){
                birthday[i].style.display = "none";    
            }
            for(let i = 0; i < wed.length; i++){
                wed[i].style.display = "inline";    
            }
        }
        else if(selectElem.selectedIndex ===2){
            for(let i = 0; i < wed.length; i++){
                wed[i].style.display = "none";
            }
            for(let i = 0; i < baby.length; i++){
                baby[i].style.display = "none";    
            }
            for(let i = 0; i < birthday.length; i++){
                birthday[i].style.display = "none";    
            }
            for(let i = 0; i < model.length; i++){
                model[i].style.display = "inline";
            }
        }  else if(selectElem.selectedIndex ===3){
            for(let i = 0; i < wed.length; i++){
                wed[i].style.display = "none";
            }
            for(let i = 0; i < baby.length; i++){
                baby[i].style.display = "none";    
            }
            for(let i = 0; i < birthday.length; i++){
                birthday[i].style.display = "inline";    
            }
            for(let i = 0; i < model.length; i++){
                model[i].style.display = "none";
            }
        }  else if(selectElem.selectedIndex ===4){
            for(let i = 0; i < wed.length; i++){
                wed[i].style.display = "none";
            }
            for(let i = 0; i < baby.length; i++){
                baby[i].style.display = "inline";    
            }
            for(let i = 0; i < birthday.length; i++){
                birthday[i].style.display = "none";    
            }
            for(let i = 0; i < model.length; i++){
                model[i].style.display = "none";
            }
        }
        
        else{
            for(let i = 0; i < wed.length; i++){
                wed[i].style.display = "inline";
            }
            for(let i = 0; i < model.length; i++){
                model[i].style.display = "inline";
            }
            for(let i = 0; i < baby.length; i++){
                baby[i].style.display = "inline";
            }
            for(let i = 0; i < birthday.length; i++){
                birthday[i].style.display = "inline";
            }
        }    
           
    }  
) 


