let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turn0=true;//playerX, playerO
let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");

let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}
const resetGame=()=>
{
    turn0=true;
    enableBoxes();

}
const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;

    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratultions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn0==true){
            box.innerText="O";
            turn0=false;
            box.style.color="pink";
            
        } else{
            box.innerText="X";
            turn0=true;
              box.style.color="purple";
        }
        box.disabled=true;
        checkWinner();
       
    });
});
const checkWinner=()=>{
    for (let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!="" &&pos3Val!=""){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
                console.log("winner",pos1Val);

             showWinner(pos1Val);

            }
        }
    }
    };
    newGameBtn.addEventListener("click",resetGame);    
    reset.addEventListener("click",resetGame);

