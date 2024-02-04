let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const compChoice= () => {
    const option=["rock","paper","scissor"];
    const num=Math.floor(Math.random()*3);
    return option[num];
};

let usergame=(userWin)=>{
    if (userWin===true){
        userScore+=1;
        console.log("you won");
        let result=document.getElementById("result");
        result.innerText="you won!!";
        let resultcolor=document.querySelector(".text2");
        resultcolor.style.backgroundColor="green";
        let score=document.getElementById("userScore");
        score.innerText=userScore;

       
    }else{
        compScore+=1
        console.log("comp win");
        let result1=document.getElementById("result");
        result1.innerText="comp won!!";
        let resultcolor1=document.querySelector(".text2");
        resultcolor1.style.backgroundColor="red";
        let score1=document.getElementById("compScore");
        score1.innerText=compScore;

       
        

    }

};


const playGame=(userChoice)=>{
    console.log("clicked",userChoice);
    const comp = compChoice();
    console.log("computer choice:",comp);
    if (userChoice===comp){
        console.log("draw!!!");
        let result3=document.getElementById("result");
        result3.innerText=" draw!!";
        let resultcolor2=document.querySelector(".text2");

        resultcolor2.style.backgroundColor="rgb(6, 20, 46)";

       
    }else{
        let userWin=true;
        if (userChoice==="rock") {
            userWin= comp==="scissor" ? true : false;
          
        } else if(userChoice==="paper") {
            userWin= comp==="scissor" ? false : true;
            
        } else {
            userWin= comp==="rock" ? false : true;
           
        }
        usergame(userWin);


        
    }
    


}


choices.forEach( (choice) => {
    
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
       


    })
});