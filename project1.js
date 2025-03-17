let boxes=document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let winBox= document.querySelector(".winBox");
let newBtn= document.querySelector("#newBtn");
let msg = document.querySelector("#winMsg");
let winImg= document.querySelector(".winImage");
let drawImg= document.querySelector(".drawImage");
let turnMsg = document.querySelector("#turn");
let turnO = true;
let count=0;


let winPatterns=[         
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],                       //array of arrays
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
    if(turnO){
        turnMsg.innerText="Turn for X"
        box.innerText= "O";
        turnO= false;
    }
    else{
        turnMsg.innerText="Turn for O"
        box.innerText= "X";
        turnO= true;
    }
    
    let isWinner = winner();

    box.disabled = true;
    count++;
    console.log(count);

    if(count == 9 && isWinner!=true){
        draw();
        console.log(msg.innerText);
    }
    
 });
});

const winner=()=>{
    for( let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText ;
        let pos2val = boxes[pattern[1]].innerText ;
        let pos3val = boxes[pattern[2]].innerText ;
        // console.log(pos1val);

        if(pos1val !="" && pos2val != "" && pos3val!= ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log(`winner is ${pos1val}`);
                showWinner(pos1val);
                disableBoxes();
            }
        }
    }
}

const showWinner = (winner) =>{
 msg.innerText = `Congratulations! Winner is ${winner} ` ;
 winBox.classList.remove("hide");
 winImg.classList.remove("hide1");
}

const disableBoxes =() =>{
  for(let box of boxes){
    box.disabled= true;
  }
}

const enableBoxes =() =>{
    for(let box of boxes){
      box.disabled= false;
      box.innerText="";
      winBox.classList.add("hide");
      winImg.classList.add("hide1");
      drawImg.classList.add("hide2");
      count=0;
    }
  }

const resetGame=() =>{
 turn0 = true;
 count=0;
 enableBoxes();
}

const draw=() =>{
    msg.innerText = `It's a Draw` ;
    winBox.classList.remove("hide");
    drawImg.classList.remove("hide2");
    // enableBoxes();
 }

// const winLine=() =>{

//  }


reset.addEventListener("click",resetGame);

newBtn.addEventListener("click",resetGame);



