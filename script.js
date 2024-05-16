let boxes=document.querySelectorAll(".box")
let turn0=true
let msg=document.querySelector(".winner")
let reset=document.querySelector(".reset")
msg.innerText=""

let winpatterns=[[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O"
            turn0=false
        }
        else{
            box.innerText="X"
            turn0=true
        }
        box.disabled=true
        checkwinner();

    })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(pos1)=>{
        msg.innerText=`Winner is:-  ${pos1}`
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        console.log(pos1)
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner is:-",pos1)
                disableboxes();
                showwinner(pos1)
                
            }
        }
    }
}

reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
        msg.innerText=""
    }
})