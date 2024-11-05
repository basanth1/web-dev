let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbt");
let newGame = document.querySelector("#newbt");
let msg = document.querySelector("#msg");
let msgContainner = document.querySelector(".msg-container");
let play= document.querySelector("#play1");
let header = document.querySelector(".header");
let containner = document.querySelector(".container");
let turnO =  true;
const  winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,8],
    [3,4,5],
    [6,7,8]
];
let count =0;
const action=(box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            box.style.color="black";
            console.log("O");
            turnO=false;
        }
        else{
            
            console.log("X");
            box.innerText = "X";
            turnO=true;
        }
        box.disabled=true;
        // count++;
        // let winneris = 
        checkWinner();
        // if(count===9 && !winneris){
        //     gameDraw();
        // }
    });
}
// const gameDraw=()=>{
//     msg.innerText="Draw Game";
//     msgContainner.classList.remove("hide");
//     disabledBoxes();
// }
boxes.forEach(action);
const checkWinner=()=>{
    for(pattern of winPatterns){
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;
       if(pos1!=""&& pos2!=""&& pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("winner",pos1);

            showWinner(pos1);
        }
       }
    }
}
containner.classList.add("hide");
play.addEventListener("click",()=>{
    header.classList.add("hide");
    containner.classList.remove("hide");
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainner.classList.remove("hide");
    containner.classList.add("hide");
    disabledBoxes();
}
const disabledBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgContainner.classList.add("hide");
    containner.classList.add("hide");
    header.classList.remove("hide");
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);