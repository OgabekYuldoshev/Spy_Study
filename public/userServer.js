const chatMassage = document.querySelector("#chat")
const text = document.querySelector("input")

const socket = io();

function send(){

    if(text.value === ""){
        alert("massage is Empty")
    } else{

        const massageShow = document.createElement("div")
        massageShow.classList = "myMsg"
        massageShow.innerText = text.value
        chatMassage.append(massageShow)
    
        const msg = text.value
        socket.emit("send-massage", msg)
        
        text.value = ""
    }
    
}

socket.on("massage", msg=>{
    show(msg)
})

function show(msg){
    const massageShow = document.createElement("div")
    massageShow.classList = "showMsg"
    massageShow.innerText = msg
    chatMassage.append(massageShow)
}