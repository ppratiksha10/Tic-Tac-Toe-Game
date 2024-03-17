let boxes = document.querySelectorAll(".box");

let reset = document.querySelector("#reset");

let newGameBtn = document.querySelector("#newgame");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");


//playerX , playerO

let turnO = true;

//Storing winning pattern using 2D array

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



//reset game

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};



//eventListner

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if (turnO)
        {
            
            box.innerText = "O";
            box.style.color = "black";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        
        //button disable
        box.disabled = true;
        
        // Check winer funcation

        checkWinner();
    });
});



//disable Boxes after winning 
const disableBoxes = () =>
    {
        for(let box of boxes)
        {
            box.disabled = true;
        }
    };

    //disable Boxes after winning 
const enableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};



//show Winner

const showWinner = (winner) =>
{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
            let pos1Val =  boxes[pattern[0]].innerText;
            let pos2Val =  boxes[pattern[1]].innerText;
            let pos3Val =  boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val &&  pos2Val === pos3Val)
                {
                    showWinner(pos1Val);
                }
            }

    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);