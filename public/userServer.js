
const text = document.querySelector("#massage")
const name = document.querySelector("#name")
const auth = document.querySelector(".auth")

const socket = io();

//Auth Validate
window.addEventListener("load", ()=>{
    auth.style.display = "flex"
})

function authValid(){
    if(name.value === ""){
        const err = document.createElement("div")
        err.classList = "error"
        err.innerText = "Iltimos, Ismingizni yozing!"
        document.querySelector("body").append(err)

        setTimeout(()=>{
            err.remove()
        }, 3000)

        err.addEventListener("click", ()=>{
            err.remove()
        })

    } else{
        socket.emit("joined-user", name.value)
        auth.style.display = "none"
    }
}



//Send Massage
function send(){
    if(text.value === ""){
            const err = document.createElement("div")
            err.classList = "error"
            err.innerText = "Xabar bo\'sh xolatda"
            document.querySelector("body").append(err)
        
            setTimeout(()=>{
                err.remove()
            }, 3000)

            err.addEventListener("click", ()=>{
                err.remove()
            })
    } else{

        const massageShow = document.createElement("span")
        massageShow.classList = "myMsg"
        massageShow.innerText = text.value
        document.querySelector(".chat").append(massageShow)
    
        const msg = text.value
        socket.emit("send-massage", msg)
        
        text.value = ""
    }
    
}

//Show Massage
socket.on("massage", data=>{
    show(`${data.username}: ${data.massage}`)
})


function show(msg){
    const massageShow = document.createElement("span")
    massageShow.classList = "showMsg"
    massageShow.innerText = msg
    document.querySelector(".chat").append(massageShow)
}

//new user
socket.on("newUser", user=>{
    show(`${user} online...`)
})

//Dissconect User
socket.on("user-disconected", disconnect=>{
    show(`${disconnect} offline!`)
})




