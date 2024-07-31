let comp_score=0;
let user_score=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscore=document.querySelector('#user-score');
let compscore=document.querySelector('#comp-score');

const draw_game=()=>{
    msg.innerText='Game Draw';
    msg.style.backgroundColor="Black";
}
const comp_game=()=>{
    const options=["Rock","Paper","Scissor"];
    let opt_idx=Math.floor(Math.random()*3);
    return options[opt_idx];
}
const winner=(user_win, user_choice,comp_choice)=>{
    if (user_win) {
        user_score++;
        userscore.innerText=user_score;
        msg.innerText=`You won! Your ${user_choice} beats ${comp_choice}.`;
        msg.style.backgroundColor="Green";
    }else{
        comp_score++;
        compscore.innerText=comp_score;
        msg.innerText=`You Lose! Comp ${comp_choice} beats ${user_choice}.`;
        msg.style.backgroundColor="Red";

    }
}
const Game_play=(user_choice)=>{
    const comp_choice=comp_game();
    
    if (user_choice===comp_choice) {
        draw_game();
    }else{
        let user_win=false;
        if (user_choice==="Rock") {
            user_win=comp_choice==="Paper" ? true : false;
        }else if (user_choice==="Paper") {
            user_win=comp_choice==="Scissor" ? true : false;
        }else {
            user_win=comp_choice==="Rock" ? true : false;
        }
        winner(user_win,user_choice,comp_choice);
    }
    
}
choices.forEach((choice) => {
        choice.addEventListener("click" , ()=>{
        let user_choice=choice.getAttribute("id");
        Game_play(user_choice); 
    })
});